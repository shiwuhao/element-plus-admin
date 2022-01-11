<template>
  <BasicDrawer :title="!item.id ? '新增菜单' : '编辑菜单'" v-model="dialog" @close="cancelItem">
    <template #default>
      <el-form ref="formRef" :model="item" :rules="rules" v-loading="itemLoading" label-width="80px" size="small">
        <el-form-item label="菜单类型" prop="type">
          <el-radio-group v-model="item.type">
            <el-radio-button v-for="(key,value) in menuTypes" :key="key" :label="value">{{ key }}</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="父级节点" prop="pid">
          <el-cascader
            v-model="item.pid"
            :show-all-levels="false"
            :props="{ checkStrictly: true,value:'id',label:'title',emitPath:false,lazy: true,lazyLoad:lazyLoad }"
            clearable
            class="w-full"
          ></el-cascader>
        </el-form-item>
        <el-form-item label="英文标识" prop="name">
          <el-input v-model="item.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="显示名称" prop="title">
          <el-input v-model="item.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="前端路由" prop="url">
          <el-select v-model="item.url" placeholder="请求方式" style="width: 100%" filterable>
            <el-option v-for="(item,index) in getPermissionRoutes" :key="index" :value="item.path">
              <span style="float: left">{{ item.path }}</span>
              <span style="float: right">{{ item.meta.title }}</span>
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="菜单图标" v-if="item.type === 'menu'">
          <icon-picker v-model="item.icon"/>
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
import {childrenListApi} from "@/api/permissions.js";
import {IconPicker} from '@/components/Icon/index.js'
import {menuTypeEnum} from "@/enums/appEnum.js";

export default {
  name: "editTemplate",
  components: {BasicDrawer, IconPicker},
  setup() {
    const state = shallowReactive({
      rules: {
        pid: [{required: true, message: '请选择父级节点', trigger: 'change'}],
        type: [{required: true, message: '请选择菜单类型', trigger: 'change'}],
        name: [{required: true, pattern: /^(\w|:){3,50}$/, message: '标识为必填项，3-50个英文字符', trigger: 'blur'}],
        title: [{required: true, message: '请输入显示名称', trigger: 'blur'}],
        method: [{required: true, message: '请选择请求方式', trigger: 'change'}],
        url: [{required: true, message: '请输入后端url地址', trigger: 'blur'}],
      },
      menuTypes: menuTypeEnum,
    })

    const {getPermissionRoutes} = useConfig();
    const childrenListApi = inject('childrenListApi');
    const {formRef, item, dialog, itemLoading, confirmLoading, cancelItem, confirmItem} = inject('resourceApi');

    const lazyLoad = async ({level, data}, resolve) => {
      if (level === 0) {
        resolve([{id: 0, pid: 0, title: '根节点', children: []}]);
      } else {
        const {data: {data: lists}} = await childrenListApi(data.id);
        resolve(lists)
      }
    }

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
      lazyLoad
    }
  }
}
</script>