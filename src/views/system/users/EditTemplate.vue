<template>
  <BasicDrawer
    :title="!item.id ? '新增配置' : '编辑配置'"
    direction="rtl"
    size="50%"
    :loading="itemLoading"
    v-model="dialog"
    @close="cancelItem">
    <template #default>
      <el-form ref="formRef" :model="item" :rules="rules" label-width="80px" size="small">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="item.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户昵称" prop="nickname">
          <el-input v-model="item.nickname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :prop="!item.id ? 'password' : ''">
          <el-input v-model="item.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-switch v-model="item.status" :active-value="1" :inactive-value="0"></el-switch>
        </el-form-item>
        <el-form-item label="角色" prop="status">
          <el-select v-model="item.roles" multiple placeholder="请选择角色" style="width: 100%;">
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
        password: [{required: true, message: '请选择渲染组件', trigger: 'change'}],
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