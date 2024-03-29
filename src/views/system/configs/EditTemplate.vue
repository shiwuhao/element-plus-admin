<template>
  <BasicDrawer :title="!item.id ? '新增配置' : '编辑配置'" v-model="dialog" @close="cancelItem">
    <template #default>
      <el-form ref="formRef" :model="item" :rules="rules" v-loading="itemLoading" label-width="80px">
        <el-form-item label="配置分组" prop="group">
          <el-select v-model="item.group" clearable placeholder="请选择配置分组" style="width: 100%;">
            <el-option v-for="(item,index) in getConfigGroups" :label="item.label" :value="item.value"
                       :key="index"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="配置类型" prop="type">
          <el-select v-model="item.type" clearable placeholder="请选择配置类型" style="width: 100%;">
            <el-option v-for="(item,index) in getConfigTypes" :label="item.label" :value="item.value"
                       :key="index"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="渲染组件" prop="component">
          <el-select v-model="item.component" clearable placeholder="请选择渲染组件" style="width: 100%;">
            <el-option v-for="(item,index) in getConfigComponents" :label="item.label" :value="item.value"
                       :key="index"></el-option>
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
        <el-form-item>
          <el-button @click="cancelItem" size="small">取 消</el-button>
          <el-button type="primary" size="small" @click="confirmItem" :loading="confirmLoading">
            {{ confirmLoading ? '提交中 ...' : '确 定' }}
          </el-button>
        </el-form-item>
      </el-form>
    </template>
  </BasicDrawer>
</template>

<script>
import {BasicDrawer} from "@/components/Drawer/index.js";
import {toRefs, shallowReactive, inject} from "vue";
import {useConfig} from "@/composables/config/useConfig.js";

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

    const {getConfigGroups, getConfigTypes, getConfigComponents} = useConfig();
    const {formRef, item, dialog, itemLoading, confirmLoading, cancelItem, confirmItem} = inject('resourceApi');

    return {
      ...toRefs(state),
      getConfigGroups,
      getConfigTypes,
      getConfigComponents,
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