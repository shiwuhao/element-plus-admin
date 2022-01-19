<template>
  <BasicDrawer :title="!item.id ? '新增菜单' : '编辑菜单'" v-model="dialog" @close="cancelItem">
    <template #default>
      <el-form ref="formRef" :model="item" :rules="rules" v-loading="itemLoading" label-width="80px">
        <el-form-item label="菜单类型" prop="type">
          <el-radio-group v-model="item.type">
            <el-radio-button v-for="(key,value) in menuTypes" :key="key" :label="value">{{ key }}</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="父级节点" prop="pid">
          <el-cascader
            v-model="item.pid"
            :show-all-levels="true"
            :props="{checkStrictly:true,value:'id',label:'label',emitPath:false}"
            :options="menuOptions"
            clearable
            placeholder="请选择父级菜单"
          ></el-cascader>
        </el-form-item>
        <el-form-item label="英文标识" prop="name">
          <el-input v-model="item.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="显示名称" prop="label">
          <el-input v-model="item.label" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="目标地址" prop="url">
          <el-select v-if="item.type === 'route'"
                     v-model="item.url"
                     placeholder="请选择路由页面"
                     filterable
                     clearable
                     class="w-full">
            <el-option v-for="(item,index) in getPermissionRoutes" :key="index" :value="item.path">
              <span style="float: left">{{ item.path }}</span>
              <span style="float: right">{{ item.meta.title }}</span>
            </el-option>
          </el-select>
          <el-input v-else v-model="item.url" placeholder="请输入地址"></el-input>
        </el-form-item>
        <el-form-item label="菜单图标">
          <icon-picker v-model="item.icon" clearable/>
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
import {menuTypeEnum} from "@/enums/appEnum.js";
import {useFetchListToTree} from '@/api/menus.js';

export default {
  name: "editTemplate",
  components: {BasicDrawer, IconPicker},
  setup() {
    const state = shallowReactive({
      rules: {
        pid: [{required: true, message: '请选择父级节点', trigger: 'change'}],
        type: [{required: true, message: '请选择菜单类型', trigger: 'change'}],
        name: [{required: true, pattern: /^(\w|:){3,50}$/, message: '标识为必填项，3-50个英文字符', trigger: 'blur'}],
        label: [{required: true, message: '请输入显示名称', trigger: 'blur'}],
        method: [{required: true, message: '请选择请求方式', trigger: 'change'}],
        url: [{required: true, message: '请输入后端url地址', trigger: 'blur'}],
      },
      menuTypes: menuTypeEnum,
    })

    const {getPermissionRoutes} = useConfig();
    const {formRef, item, dialog, itemLoading, confirmLoading, cancelItem, confirmItem} = inject('fetchResource');
    const {lists: menuOptions, fetch: fetchTree} = useFetchListToTree();

    watch(dialog, () => dialog.value && fetchTree());

    return {
      ...toRefs(state),
      menuOptions,
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