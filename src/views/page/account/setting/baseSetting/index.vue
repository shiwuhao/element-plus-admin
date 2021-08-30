<template>
  <div class="base-setting">
    <h2>基本设置</h2>
    <el-row :gutter="30">
      <el-col :span="16">
        <el-form :model="form" label-position="top">
          <el-form-item label="邮箱">
            <el-input v-model="form.email" placeholder="请输入邮箱" clearable />
          </el-form-item>
          <el-form-item label="昵称">
            <el-input v-model="form.name" placeholder="请输入昵称" clearable />
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
            <el-row :gutter="10">
              <el-col :span="12">
                <el-select v-model="form.area" placeholder="请选择地区">
                  <el-option label="山西省" value="shanxi"></el-option>
                  <el-option label="北京市" value="beijing"></el-option>
                </el-select>
              </el-col>
              <el-col :span="12">
                <el-select v-model="form.area" placeholder="请选择地区">
                  <el-option label="太原市" value="taiyuan"></el-option>
                  <el-option label="市辖区" value="shixiaqu"></el-option>
                </el-select>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="街道地址" prop="address">
            <el-input v-model="form.address" clearable placeholder="请输入街道地址"/>
          </el-form-item>
          <el-form-item label="联系电活" prop="phone">
            <el-row :gutter="10">
              <el-col :span="6">
                <el-input v-model="form.phone" clearable placeholder="请输入区号"/>
              </el-col>
              <el-col :span="18">
                <el-input v-model="form.phone" clearable placeholder="请输入联系电活"/>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
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
import {defineComponent, ref, reactive, toRefs} from 'vue';
import {BasicForm} from "@/components/Form";
import {BasicUpload} from "@/components/Upload";
export default defineComponent({
  components: {BasicForm,BasicUpload},
  setup() {
    const labelPosition = ref('top');
    const form = reactive({})
    const avatar = reactive({
      src: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
      size: 140
    })
    const {src,size} = avatar;
    return {
      labelPosition,
      form,
      ...toRefs(avatar)
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
  }
}
</style>