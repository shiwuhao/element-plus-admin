<template>
  <div :class="getIsMobile?'mobile-base-setting':'base-setting'">
    <el-row :gutter="30">
      <el-col :span="16" class="mobile-form">
        <el-form :model="form" label-position="top" :rules="rules" ref="formRef">
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="form.email" placeholder="请输入邮箱" clearable/>
          </el-form-item>
          <el-form-item label="昵称" prop="name">
            <el-input v-model="form.name" placeholder="请输入昵称" clearable/>
          </el-form-item>
          <el-form-item label="个人简介" prop="introduce">
            <el-input type="textarea" v-model="form.introduce" placeholder="请输入个人简介" autosize/>
          </el-form-item>
          <el-form-item label="国家/地区" prop="region">
            <el-select v-model="form.region" placeholder="请选择地区" style="width: 100%">
              <el-option label="中国" value="zhongguo"></el-option>
              <el-option label="法国" value="faguo"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="所在省市" prop="area">
            <el-cascader
              :options="options"
              clearable
              placeholder="请选择省市"
              filterable
              v-model="form.area"
              style="width: 100%"
            >
            </el-cascader>
          </el-form-item>
          <el-form-item label="街道地址" prop="address">
            <el-input v-model="form.address" clearable placeholder="请输入街道地址"/>
          </el-form-item>
          <el-form-item label="联系电活" prop="phone">
            <el-input v-model="form.phone" clearable placeholder="请输入联系电活"/>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm" :loading="confirmLoading">
              {{ confirmLoading ? '提交中 ...' : '确 定' }}
            </el-button>
            <el-button @click="resetForm">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="8" class="base-setting-image">
        <h3>头像</h3>
        <el-avatar :src="avatar.src" :size="avatar.size"></el-avatar>
        <BasicUpload
          icon="el-icon-upload"
          size="medium"
          type="primary"
        />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import {defineComponent, ref, reactive, toRefs, shallowReactive, onMounted} from 'vue';
import {BasicUpload} from "@/components/Upload";
import {getRequest} from '@/libs/api.js';
import {ElMessage} from 'element-plus';
import {useRootSetting} from "@/composables/setting/useRootSeeting.js";
export default defineComponent({
  components: {BasicUpload},
  setup() {
    const {getIsMobile} = useRootSetting();
    const formRef = ref(null);
    const state = shallowReactive({
      confirmLoading: false,
      form: {},
      avatar: {
        src: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
        size: 140
      },
      options: []
    })
    //非递归监听，监听第一层数据 shallowReactive
    const field = shallowReactive({
      rules: {
        email: [{required: true, message: '请输入邮箱', trigger: 'blur'}],
        name: [{required: true, message: '请选择昵称', trigger: 'blur'}],
        introduce: [{required: true, message: '请输入个人简介', trigger: 'blur'}],
        region: [{required: true, message: '请选择地区', trigger: 'change'}],
        area: [{required: true, message: '请选择地区', trigger: 'change'}],
        phone: [{required: true, message: '请输入联系电话', trigger: 'blur'}],
        address: [{required: true, message: '请输入街道地址', trigger: 'blur'}]
      }
    })
    const {form,options,confirmLoading,avatar:{size,src}} = state;
    const submitForm = () => {
      formRef.value.validate(async (valid) => {
        if (valid) {
          await storeForm();
        }
      })
    }
    const storeForm = async () => {
      state.confirmLoading= true;
      getRequest('/js/baseSetting.json').then(res => {
        state.confirmLoading = false
        ElMessage.success('提交成功')
       state.form = res.data.data
      })
    }
    const resetForm = () => {
      formRef.value.resetFields();
    }
    onMounted(() => {
      getEditData()
      getArea()
    })
    const getEditData = () => {
      getRequest('/js/baseSetting.json').then(res => {
        state.form = res.data.data
        editForm(state.form)
      })
    }
    const getArea = () => {
      getRequest('/js/province.json').then(res => {
          formatArea(res.data.data)
      })
    }
    const editForm = (data) => {
      const {email, name, introduce, region, area, address, phone} = data;
      [form.email, form.name, form.introduce, form.region, form.area, form.address, form.phone]=
        [email, name, introduce, region, area, address, phone]
    }
    const formatArea = (data) => {
      let options = [];
      data.forEach(item => {
        let {
          id: value,
          name: label,
          children: children
        } = item
        options.push({
          value,
          label,
          children: children && children.map(item => {
            return {label: item.name, value: item.id}
          })
        })
      })
      state.options = options
    }
    return {
      formRef,
      submitForm,
      resetForm,
      editForm,
      getIsMobile,
      ...toRefs(state),
      ...toRefs(field),
    }
  }
})
</script>
<style lang="scss" scoped>
.base-setting,.mobile-base-setting {
  padding-left: 18px;

  ::v-deep .el-select--small {
    width: 100%;
  }

  .base-setting-image {
    @include flex($direction: column);

    .el-avatar {
      margin-bottom: 25px;
    }

    .el-icon-upload {
      text-align: center;
    }
  }
}
.mobile-base-setting {
  .base-setting-image {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
  }
  .mobile-form {
    margin: auto;
  }
  .el-form {
    margin-top: 278px;
  }
}
</style>