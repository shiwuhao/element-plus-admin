<template>
  <BasicDrawer
    :title="!item.id ? '新增配置' : '编辑配置'"
    direction="rtl"
    size="50%"
    :loading="itemLoading"
    v-model="dialog"
    @close="cancelItem">
    <template #default>
      <el-form ref="formRef" :model="item" :rules="rules" label-width="80px" size="small" autocomplete="off">
        <el-form-item label="用户标识" prop="username">
          <el-input v-model="item.username" placeholder="用户名、手机号、邮箱等唯一标识"></el-input>
        </el-form-item>
        <el-form-item label="用户昵称" prop="nickname">
          <el-input v-model="item.nickname" placeholder="请输入用户昵称"></el-input>
        </el-form-item>
        <el-form-item label="用户密码" :prop="!item.id ? 'password' : ''">
          <el-input v-model="item.password" show-password minlength="6" maxlength="20" placeholder="请输入用户密码"></el-input>
        </el-form-item>
        <el-form-item label="用户状态" prop="status">
          <el-radio-group v-model="item.status" size="mini">
            <el-radio-button :label="1">启用</el-radio-button>
            <el-radio-button :label="0">禁用</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="用户角色">
          <el-select v-model="item.roles" multiple placeholder="请选择用户角色" style="width: 100%;">
            <el-option v-for="item in getRoles" :key="item.id" :label="item.title" :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </template>
    <template #footer>
      <el-button @click="cancelItem" size="small">取 消</el-button>
      <el-button type="primary" size="small" @click="confirmItem" :loading="confirmLoading">
        {{ confirmLoading ? '提交中 ...' : '确 定' }}
      </el-button>
    </template>
  </BasicDrawer>
</template>

<script>
import {BasicDrawer} from "@/components/Drawer";
import {toRefs, shallowReactive, inject} from "vue";
import {useConfig} from "@/composables/config/useConfig";

export default {
  name: "editTemplate",
  components: {BasicDrawer},
  setup() {
    const state = shallowReactive({
      rules: {
        username: [{required: true, message: '请选择配置分组', trigger: 'change'}],
        nickname: [{required: true, message: '请选择配置类型', trigger: 'change'}],
        password: [{required: true,pattern: /^(\w|:|.){3,50}$/, message: '请选择渲染组件', trigger: 'change'}],
        status: [{required: true}],
      }
    })

    const {getRoles} = useConfig();
    const {formRef, item, dialog, itemLoading, confirmLoading, cancelItem, confirmItem} = inject('resourceApi');

    return {
      ...toRefs(state),
      getRoles,
      formRef,
      item,
      dialog,
      itemLoading,
      confirmLoading,
      cancelItem,
      confirmItem,
    }
  }
}
</script>