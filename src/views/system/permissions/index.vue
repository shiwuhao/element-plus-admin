<template>
  <page-wrapper :title="$route.meta['title']" content-full-height>
    <template #extra>
      <el-button type="primary" @click="defaultExpandAll = !defaultExpandAll">toggle</el-button>
      <el-button type="primary" @click="initSort">初始化排序</el-button>
    </template>
    <el-row :gutter="10">
      <el-col :span="4">
        <el-card shadow="none" class="mt-2" style="height: 100%;">
          <el-tree default-expand-all
                   highlight-current
                   node-key="type"
                   :expand-on-click-node="false"
                   current-node-key="all"
                   :data="types"
                   :props="{children: 'children',label:'label'}"
                   @node-click="handleSelectType"></el-tree>
        </el-card>
      </el-col>
      <el-col :span="20">
        <el-card shadow="none" class="mt-2" style="height: 100%;width: 100%;">
          {{defaultExpandAll}}
          <el-tree :default-expand-all="defaultExpandAll"
                   :props="{children: 'children'}"
                   @node-click="handleNodeClick"
                   :data="lists"
                   draggable
                   @node-drop="handleDrop">
            <template #default="{ node:{data: {id,permissible,permissible_type,permissible_type_label}} }">
              <span class="mr-1">{{ permissible.label }} - {{ id }}</span>
              <el-tag size="small" :type="permissible_type === 'menus' ? 'warning' : ''">
                {{ permissible_type_label }}
              </el-tag>
            </template>
          </el-tree>
        </el-card>
      </el-col>
    </el-row>
  </page-wrapper>
</template>

<script>
import {PageWrapper} from "@/components/Page/index.js"
import {BasicTable, BasicQuery} from "@/components/Table/index.js"
import EditTemplate from "./EditTemplate.vue";
import {defineComponent, toRefs, shallowReactive, onMounted} from "vue";
import {useFetchTreeList, fetchUpdate, fetchInitSort} from '@/api/useFetchPermissions.js'

import {ElMessage,ElNotification} from "element-plus";

export default defineComponent({
  name: "index",
  components: {BasicQuery, BasicTable, EditTemplate, PageWrapper},
  setup() {
    const state = shallowReactive({
      columns: [
        {prop: 'id', label: 'ID', width: 100},
        {prop: 'title', label: '显示名称', minWidth: 180, slot: 'title'},
        {prop: 'name', label: '英文标识', minWidth: 140},
        {prop: 'type_label', label: '类型', minWidth: 60},
        {prop: 'method', label: '请求方式', minWidth: 80},
        {prop: 'url', label: '路由', minWidth: 150},
        {prop: 'created_at', label: '创建时间', minWidth: 135},
      ],
      schemas: [
        {field: 'id', placeholder: '权限ID', component: 'Input'},
        {field: 'title', placeholder: '权限名称', component: 'Input'},
        {field: 'name', placeholder: '权限标识', component: 'Input'},
      ],
      defaultExpandAll: true,
      types: [
        {
          type: 'all', label: '全部节点', children: [
            {type: 'menus', label: '菜单节点'},
            {type: 'actions', label: '动作节点'}
          ]
        },
      ],
    });

    const {lists, fetch} = useFetchTreeList();
    const getPermissionTagType = ({permissible_type}) => permissible_type === 'actions' ? 'info' : 'warning' && console.log(permissible_type);

    const handleSelectType = ({type}) => {
      fetch({type});
    }

    const handleNodeClick = (data) => {
      console.log(data)
    }

    const handleDrop = ({data: {id: draggingId}}, {data: {id: dropId}}, dropType, ev) => {
      fetchUpdate({id: draggingId, dropId, dropType})
      console.log(draggingId, dropId, dropType, ev)
      console.log(ev);
    }
    const initSort = () => {
      console.log(111);
      ElMessage('this is a message.')
      console.log(222);

      // ElMessage.error('1231');
      // fetchInitSort();
    }

    onMounted(() => {
      fetch();
    })

    return {
      ...toRefs(state),
      lists,
      handleSelectType,
      handleDrop,
      getPermissionTagType,
      handleNodeClick,
      initSort,
    }
  },
})
</script>

