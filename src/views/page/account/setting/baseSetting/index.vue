<template>
  <div class="base-setting">
    <h2>基本设置</h2>
    {{form}}
    <el-row :gutter="30">
      <el-col :span="16">
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
        <el-avatar :src="src" :size="size"></el-avatar>
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
import {BasicForm} from "@/components/Form";
import {BasicUpload} from "@/components/Upload";
import {getRequest} from '@/libs/api';
import {ElMessage} from 'element-plus';

export default defineComponent({
  components: {BasicForm, BasicUpload},
  setup() {
    const labelPosition = ref('top');
    const formRef = ref(null);
    const confirmLoading = ref(false);
    const form = reactive({})
    const avatar = reactive({
      src: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
      size: 140
    })
    const {src, size} = avatar;
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
    const area = reactive({
      options: [
        {
          value: 1,
          label: '陕西',
          children: [
            {value: 3, label: '西安'},
            {value: 4, label: '延安'},
          ]
        },
        {
          value: 2,
          label: '山西',
          children: [
            {value: 5, label: '晋中市'},
            {value: 6, label: '太原市'},
            {value: 7, label: '阳泉市'},
          ]
        }
      ]
    })
    const submitForm = () => {
      formRef.value.validate(async (valid) => {
        if (valid) {
          await storeForm();
        }
      })
    }
    const storeForm = async () => {
      confirmLoading.value = true;
      getRequest('/js/baseSetting.json').then(res => {
        confirmLoading.value = false
        ElMessage.success('提交成功')
        form.value = res.data.data
      })
    }
    const resetForm = () => {
      formRef.value.resetFields();
    }
    onMounted(()=>{
      getRequest('/js/baseSetting.json').then(res => {
        form.value = res.data.data
      })
    })
    return {
      labelPosition,
      form,
      formRef,
      submitForm,
      resetForm,
      confirmLoading,
      ...toRefs(avatar),
      ...toRefs(field),
      ...toRefs(area)
    }
  }
})
</script>
<style lang="scss" scoped>
.base-setting {
  margin: -16px 0 0 26px;

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
</style>