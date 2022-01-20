<template>
  <BasicDrawer
    custom-class="drawer"
    :title="!item.id ? '新增角色' : '编辑角色'"
    v-model="dialog"
    @close="cancelItem">
    <template #default>
      <el-form ref="formRef" :model="item" :rules="rules" v-loading="itemLoading" label-width="80px">
        <el-form-item label="英文标识" prop="name">
          <el-input v-model="item.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="显示名称" prop="label">
          <el-input v-model="item.label" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色备注" prop="textarea">
          <el-input v-model="item.remark" type="textarea" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色状态" prop="status">
          <el-radio-group v-model="item.status">
            <el-radio-button :label="1">启用</el-radio-button>
            <el-radio-button :label="0">禁用</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="访问授权" prop="permission_ids">
          <el-tree
            v-if="dialog"
            :data="permissions"
            :props="{ children: 'children'}"
            :default-expanded-keys="[0]"
            :default-checked-keys="defaultCheckedKeys"
            :check-strictly="true"
            node-key="id"
            show-checkbox
            class="w-full"
            @check="handlePermissionCheck">
            <template #default="{ node:{data: {permissible,permissible_type,permissible_type_label}} }">
              <span class="custom-tree-node">
                <span>{{ permissible?.label }}</span>
                <el-tag size="small" effect="plain"
                        :type="permissible_type==='actions'?'success':'danger'">{{ permissible_type_label }}</el-tag>
              </span>
            </template>
          </el-tree>
        </el-form-item>
        <el-form-item>
          <el-button @click="cancelItem">取 消</el-button>
          <el-button type="primary" @click="confirmItem" :loading="confirmLoading">
            {{ confirmLoading ? '提交中 ...' : '确 定' }}
          </el-button>
        </el-form-item>
      </el-form>
    </template>
  </BasicDrawer>
</template>

<script>
import {BasicDrawer} from "@/components/Drawer/index.js";
import {toRefs, shallowReactive, inject, watch, nextTick} from "vue";
import {useFetchAllPermissions} from "@/api/all.js";

export default {
  name: "editTemplate",
  components: {BasicDrawer},
  setup() {
    const state = shallowReactive({
      defaultCheckedKeys: [],
      rules: {
        name: [{required: true, pattern: /^(\w|:){3,50}$/, message: '标识为必填项，3-50个英文字符', trigger: 'blur'}],
        label: [{required: true, message: '请输入显示名称', trigger: 'blur'}],
        status: [{required: true, message: '请选择状态', trigger: 'blur'}],
        permission_ids: [{required: true, message: '请选择权限节点', type: 'array', trigger: 'change'}],
      }
    })

    const {formRef, item, dialog, itemLoading, confirmLoading, cancelItem, confirmItem} = inject('fetchResource');

    // 初始化默认节点
    const initDefaultCheckedKeys = () => state.defaultCheckedKeys = item.value.permission_ids;

    const {lists: permissions, fetch: fetchAllPermissions} = useFetchAllPermissions();

    // 设置勾选的节点
    const handlePermissionCheck = (checkedData, {checkedKeys}) => item.value.permission_ids = checkedKeys;

    // 监控编辑事件
    watch(dialog, async () => {
      if (dialog.value) {
        await fetchAllPermissions();
        await nextTick(() => initDefaultCheckedKeys())
      }
    });

    return {
      ...toRefs(state),
      permissions,
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
<style lang="scss">
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
</style>