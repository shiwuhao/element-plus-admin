<template>
  <el-button @click="addItem">aaa</el-button>
  <BasicDrawer
    :title="!itemData.id ? '新增配置' : '编辑配置'"
    direction="rtl"
    size="50%"
    :loading="fetchLoading"
    v-model="dialog"
    @close="cancel">
    <template #default>
      <el-form ref="formRef" :model="itemData" :rules="rules" label-width="80px" size="small">
        <el-form-item label="配置分组" prop="group">
          <el-select v-model="itemData.group" clearable placeholder="请选择配置分组" style="width: 100%;">
            <template v-for="(item,index) in getGroups" :key="index">
              <el-option :label="item.label" :value="item.value"></el-option>
            </template>
          </el-select>
        </el-form-item>
        <el-form-item label="配置类型" prop="type">
          <el-select v-model="itemData.type" clearable placeholder="请选择配置类型" style="width: 100%;">
            <template v-for="(item,index) in getTypes" :key="index">
              <el-option :label="item.label" :value="item.value"></el-option>
            </template>
          </el-select>
        </el-form-item>
        <el-form-item label="渲染组件" prop="component">
          <el-select v-model="itemData.component" clearable placeholder="请选择渲染组件" style="width: 100%;">
            <template v-for="(item,index) in getComponents" :key="index">
              <el-option :label="item.label" :value="item.value"></el-option>
            </template>
          </el-select>
        </el-form-item>
        <el-form-item label="配置标识" prop="name">
          <el-input v-model="itemData.name" autocomplete="off">
            <template #prepend v-if="itemData.group">{{ itemData.group }}</template>
          </el-input>
        </el-form-item>
        <el-form-item label="配置名称" prop="title">
          <el-input v-model="itemData.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="配置项" prop="extra">
          <el-input v-model="itemData.extra" type="textarea" rows="3" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="配置值" prop="value">
          <el-input v-model="itemData.value" type="textarea" rows="3" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
    </template>
    <template #footer>
      <el-button @click="cancel" size="small">取 消</el-button>
      <el-button type="primary" size="small" @click="confirm" :loading="submitLoading">
        {{ submitLoading ? '提交中 ...' : '确 定' }}
      </el-button>
    </template>
  </BasicDrawer>
</template>

<script>
import {BasicDrawer} from "@/components/Drawer";
import {toRefs, shallowReactive} from "vue";
import {useConfig} from "@/hooks/config/useConfig";
import {itemApi, updateApi, storeApi} from '@/api/configs'
import {useEditTemplate} from "@/composables/useEditTemplate";

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

    const {getGroups, getTypes, getComponents,} = useConfig();
    const pageData = useEditTemplate({itemApi, updateApi, storeApi});

    return {
      ...toRefs(pageData),
      ...toRefs(state),
      getGroups,
      getTypes,
      getComponents,

    }
  }
}
</script>