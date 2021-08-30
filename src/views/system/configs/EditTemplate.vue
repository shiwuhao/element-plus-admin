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
        <el-form-item label="配置分组" prop="group">
          <el-select v-model="item.group" clearable placeholder="请选择配置分组" style="width: 100%;">
            <template v-for="(item,index) in getGroups" :key="index">
              <el-option :label="item.label" :value="item.value"></el-option>
            </template>
          </el-select>
        </el-form-item>
        <el-form-item label="配置类型" prop="type">
          <el-select v-model="item.type" clearable placeholder="请选择配置类型" style="width: 100%;">
            <template v-for="(item,index) in getTypes" :key="index">
              <el-option :label="item.label" :value="item.value"></el-option>
            </template>
          </el-select>
        </el-form-item>
        <el-form-item label="渲染组件" prop="component">
          <el-select v-model="item.component" clearable placeholder="请选择渲染组件" style="width: 100%;">
            <template v-for="(item,index) in getComponents" :key="index">
              <el-option :label="item.label" :value="item.value"></el-option>
            </template>
          </el-select>
        </el-form-item>
        <el-form-item label="配置标识" prop="name">
          <el-input v-model="item.name" autocomplete="off">
            <template #prepend v-if="item.group">{{ item.group }}</template>
          </el-input>
        </el-form-item>
        <el-form-item label="配置名称" prop="title">
          <el-input v-model="item.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="配置项" prop="extra" v-if="item.type === 'enum'">
          <el-input v-model="item.extra" type="textarea" rows="3" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="配置值" prop="value">
          <el-input v-model="item.value" type="textarea" rows="3" autocomplete="off"></el-input>
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
        group: [{required: true, message: '请选择配置分组', trigger: 'change'}],
        type: [{required: true, message: '请选择配置类型', trigger: 'change'}],
        component: [{required: true, message: '请选择渲染组件', trigger: 'change'}],
        name: [{required: true, message: '请输入配置标识', trigger: 'blur'}],
        title: [{required: true, message: '请输入配置标题', trigger: 'blur'}],
        extra: [{required: true, message: '请输入配置项', trigger: 'blur'}],
        value: [{required: true, message: '请输入配置值', trigger: 'blur'}]
      }
    })

    const {getGroups, getTypes, getComponents} = useConfig();
    const {formRef, item, dialog, itemLoading, confirmLoading, cancelItem, confirmItem} = inject('resourceApi');

    return {
      ...toRefs(state),
      getGroups,
      getTypes,
      getComponents,
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