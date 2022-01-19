<template>
  <BasicDrawer :title="!item.id ? '新增菜单' : '编辑菜单'" v-model="dialog" @close="cancelItem">
    <template #default>
      <el-form ref="formRef" :model="item" :rules="rules" v-loading="itemLoading" label-width="80px">
        <el-form-item label="英文标识" prop="name">
          <el-input v-model="item.name" placeholder="请输入英文标识"></el-input>
        </el-form-item>
        <el-form-item label="显示名称" prop="label">
          <el-input v-model="item.label" placeholder="请输入显示名称"></el-input>
        </el-form-item>
        <el-form-item label="请求方式" prop="method">
          <el-select v-model="item.method"
                     placeholder="请选择请求方式"
                     filterable
                     clearable
                     class="w-full">
            <el-option v-for="(key,value) in methods" :key="key" :value="value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="请求地址" prop="uri">
          <el-input v-model="item.uri" placeholder="请输入地址"></el-input>
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
import {useConfig} from "@/composables/config/useConfig.js";
import {IconPicker} from '@/components/Icon/index.js'
import {methodEnum} from "@/enums/appEnum.js";

export default {
  name: "editTemplate",
  components: {BasicDrawer, IconPicker},
  setup() {
    const state = shallowReactive({
      rules: {
        pid: [{required: true, message: '请选择父级节点', trigger: 'change'}],
        name: [{required: true, pattern: /^(\w|:|-){3,50}$/, message: '标识为必填项，3-50个英文字符', trigger: 'blur'}],
        label: [{required: true, message: '请输入显示名称', trigger: 'blur'}],
        method: [{required: true, message: '请选择请求方式', trigger: 'change'}],
        uri: [{required: true, message: '请输入后端url地址', trigger: 'blur'}],
      },
      methods: methodEnum,
    })

    const {getPermissionRoutes} = useConfig();
    const {formRef, item, dialog, itemLoading, confirmLoading, cancelItem, confirmItem} = inject('fetchResource');

    return {
      ...toRefs(state),
      formRef,
      item,
      dialog,
      itemLoading,
      confirmLoading,
      cancelItem,
      confirmItem,
      getPermissionRoutes,
    }
  }
}
</script>