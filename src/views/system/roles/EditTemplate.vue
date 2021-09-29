<template>
  <BasicDrawer
    :title="!item.id ? '新增角色' : '编辑角色'"
    direction="rtl"
    size="50%"
    :loading="itemLoading"
    v-model="dialog"
    @close="cancelItem">
    <template #default>
      <el-form ref="formRef" :model="item" :rules="rules" label-width="80px" size="small">
        <el-form-item label="英文标识" prop="name">
          <el-input v-model="item.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="显示名称" prop="title">
          <el-input v-model="item.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色备注" prop="textarea">
          <el-input v-model="item.remark" type="textarea" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色状态" prop="status">
          <el-radio-group v-model="item.status" size="mini">
            <el-radio-button :label="1">启用</el-radio-button>
            <el-radio-button :label="0">禁用</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="访问授权" prop="permission_ids">
          <el-tree
            v-if="dialog"
            :data="getTreePermissions"
            :props="{ children: 'children',label: 'title'}"
            :default-expanded-keys="[0]"
            :default-checked-keys="defaultCheckedKeys"
            node-key="id"
            show-checkbox
            style="height:100%;"
            @check="handlePermissionCheck">
          </el-tree>
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
import {toRefs, shallowReactive, inject, watch} from "vue";
import {useConfig} from "@/composables/config/useConfig";

export default {
  name: "editTemplate",
  components: {BasicDrawer},
  setup() {
    const state = shallowReactive({
      defaultCheckedKeys: [],
      rules: {
        name: [{required: true, pattern: /^(\w|:){3,50}$/, message: '标识为必填项，3-50个英文字符', trigger: 'blur'}],
        title: [{required: true, message: '请输入显示名称', trigger: 'blur'}],
        status: [{required: true, message: '请选择状态', trigger: 'blur'}],
        permission_ids: [{required: true, message: '请选择权限节点', type: 'array', trigger: 'change'}],
      }
    })

    const {getTreePermissions} = useConfig();
    const {formRef, item, dialog, itemLoading, confirmLoading, cancelItem, confirmItem} = inject('resourceApi');
    const handlePermissionCheck = (checkedData, {checkedKeys}) => item.value.permission_ids = checkedKeys;
    watch(item, () => state.defaultCheckedKeys = item.value.permission_ids);

    return {
      ...toRefs(state),
      getTreePermissions,
      formRef,
      item,
      dialog,
      itemLoading,
      confirmLoading,
      cancelItem,
      confirmItem,
      handlePermissionCheck,
    }
  }
}
</script>