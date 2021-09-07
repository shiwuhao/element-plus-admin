<template>
  <BasicDrawer
    :title="!item.id ? '新增权限' : '编辑权限'"
    direction="rtl"
    size="50%"
    :loading="itemLoading"
    v-model="dialog"
    @close="cancelItem">
    <template #default>
      <el-form ref="formRef" :model="item" :rules="rules" label-width="80px" size="small">
        {{ item }}
        <el-form-item label="节点类型" prop="name">
          <el-radio-group v-model="item.type" size="mini">
            <el-radio-button label="menu">菜单路由</el-radio-button>
            <el-radio-button label="permission">权限节点</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="父级节点" prop="pid">
          <el-cascader
            v-model="item.pid"
            :options="getTreePermissions"
            :show-all-levels="false"
            :props="{ checkStrictly: true,expandTrigger:'hover',value:'id',label:'title',emitPath:false }"
            clearable
            style="width: 100%;"
          ></el-cascader>
        </el-form-item>
        <el-form-item label="唯一标识" prop="name">
          <el-input v-model="item.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="显示名称" prop="title">
          <el-input v-model="item.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item :label="item.type === 'permission' ? '后端URL' : '前端路由'" prop="url">
          <el-input v-model="item.url">
            <template #prepend v-if="item.type === 'permission'">
              <el-select v-model="item.method" placeholder="请求方式" style="width: 120px">
                <el-option label="get" value="get"></el-option>
                <el-option label="post" value="post"></el-option>
                <el-option label="put" value="put"></el-option>
                <el-option label="delete" value="delete"></el-option>
              </el-select>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="备注" prop="textarea">
          <el-input v-model="item.remark" type="textarea" autocomplete="off"></el-input>
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
        type: [],
        pid: [{required: true, message: '请选择父级节点', trigger: 'blur'}],
        name: [{required: true, message: '请输入唯一标识', trigger: 'blur'}],
        title: [{required: true, message: '请输入显示名称', trigger: 'blur'}],
        method: [{required: true, message: '请输入显示名称', trigger: 'blur'}],
        url: [{required: true, message: '请输入后端url地址', trigger: 'blur'}],
      }
    })

    const {getTreePermissions} = useConfig();
    const {formRef, item, dialog, itemLoading, confirmLoading, cancelItem, confirmItem} = inject('resourceApi');

    return {
      ...toRefs(state),
      formRef,
      item,
      dialog,
      itemLoading,
      confirmLoading,
      cancelItem,
      confirmItem,
      getTreePermissions
    }
  }
}
</script>