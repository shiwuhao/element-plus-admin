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
            :props="{ children: 'children',label: renderPermissionTreeLabel}"
            :default-expanded-keys="[0]"
            :default-checked-keys="defaultCheckedKeys"
            node-key="id"
            show-checkbox
            style="height:100%;"
            @check="handlePermissionCheck">
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
import {toRefs, shallowReactive, inject, watch} from "vue";
import {fetchList} from "@/api/permissions.js";
import {listToTree} from "@/utils";

export default {
  name: "editTemplate",
  components: {BasicDrawer},
  setup() {
    const state = shallowReactive({
      permissions: [],
      defaultCheckedKeys: [],
      rules: {
        name: [{required: true, pattern: /^(\w|:){3,50}$/, message: '标识为必填项，3-50个英文字符', trigger: 'blur'}],
        label: [{required: true, message: '请输入显示名称', trigger: 'blur'}],
        status: [{required: true, message: '请选择状态', trigger: 'blur'}],
        permission_ids: [{required: true, message: '请选择权限节点', type: 'array', trigger: 'change'}],
      }
    })

    const {formRef, item, dialog, itemLoading, confirmLoading, cancelItem, confirmItem} = inject('resourceApi');

    // 初始化默认节点
    const initDefaultCheckedKeys = () => state.defaultCheckedKeys = item.value.permission_ids;

    // 获取所有权限节点
    const fetchAllPermissions = async () => {
      await fetchList().then(({data: {data}}) => {
        state.permissions = [{id: 0, pid: 0, children: listToTree(data)}];
        initDefaultCheckedKeys();
      })
    }

    // 渲染权限树节点label
    const renderPermissionTreeLabel = (data, {level, data: {permissible}}) => {
      return level === 1 ? '根节点' : permissible['label'];
    }

    // 设置勾选的节点
    const handlePermissionCheck = (checkedData, {checkedKeys}) => item.value.permission_ids = checkedKeys;

    // 监控编辑事件
    watch(dialog, async () => dialog.value && await fetchAllPermissions());

    return {
      ...toRefs(state),
      formRef,
      item,
      dialog,
      itemLoading,
      confirmLoading,
      cancelItem,
      confirmItem,
      renderPermissionTreeLabel,
      handlePermissionCheck,
    }
  }
}
</script>