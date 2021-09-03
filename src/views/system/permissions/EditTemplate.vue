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
        <el-form-item label="唯一标识" prop="name">
          <el-input v-model="item.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="显示名称" prop="title">
          <el-input v-model="item.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="请求方式" prop="method">
          <el-radio-group v-model="item.method">
            <el-radio-button label="GET"></el-radio-button>
            <el-radio-button label="POST"></el-radio-button>
            <el-radio-button label="PUT"></el-radio-button>
            <el-radio-button label="DELETE"></el-radio-button>
            <el-radio-button label="*"></el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="后端URL" prop="url">
          <el-input v-model="item.url" autocomplete="off"></el-input>
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

export default {
  name: "editTemplate",
  components: {BasicDrawer},
  setup() {
    const state = shallowReactive({
      rules: {
        name: [{required: true, message: '请输入唯一标识', trigger: 'blur'}],
        title: [{required: true, message: '请输入显示名称', trigger: 'blur'}],
        method: [{required: true, message: '请输入显示名称', trigger: 'blur'}],
        url: [{required: true, message: '请输入后端url地址', trigger: 'blur'}],
      }
    })

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
    }
  }
}
</script>