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
        <el-form-item label="唯一标识" prop="name">
          <el-input v-model="item.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="显示名称" prop="title">
          <el-input v-model="item.title" autocomplete="off"></el-input>
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