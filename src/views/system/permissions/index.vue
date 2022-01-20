<template>
  <page-wrapper :title="$route.meta['title']" content-full-height>
    <template #extra>
      <el-button @click="permissionTreeToggleExpand">{{ !expandAll ? '节点展开' : '节点收起' }}</el-button>
    </template>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="6" :lg="4" :xl="4" class="mb-2">
        <el-card shadow="none" style="height: 100%;">
          <el-tree default-expand-all
                   highlight-current
                   node-key="type"
                   :expand-on-click-node="false"
                   current-node-key="all"
                   :data="types"
                   :props="{children: 'children',label:'label'}"
                   @node-click="nodeSelectType"></el-tree>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="18" :lg="20" :xl="20" class="mb-2">
        <el-card shadow="none">
          <el-tree ref="permissionTreeElRef"
                   :default-expand-all="expandAll"
                   :props="{children: 'children'}"
                   :data="permissionTrees"
                   draggable
                   @node-drop="nodeDrop">
            <template #default="{ node:{data: {permissible,permissible_type,permissible_type_label}} }">
              <span class="custom-tree-node">
                <span>{{ permissible?.label }}</span>
                <span>
                  <span class="mr-2">{{ permissible?.name }}</span>
                  <el-tag size="small"
                          effect="plain"
                          :type="permissible_type==='actions'?'success':'danger'">{{ permissible_type_label }}</el-tag>
                </span>
              </span>
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
import {defineComponent, toRefs, shallowReactive, onMounted, ref} from "vue";
import {fetchUpdate} from '@/api/permissions.js'
import {useFetchAllPermissions} from "@/api/all.js";

export default defineComponent({
  name: "index",
  components: {BasicQuery, BasicTable, PageWrapper},
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
      query: {},
      expandAll: true,
      types: [
        {
          type: 'all',
          label: '全部节点',
          children: [
            {type: 'menus', label: '菜单节点'},
            {type: 'actions', label: '动作节点'}
          ]
        },
      ],
    });

    const permissionTreeElRef = ref(null);
    const {lists: permissionTrees, fetch: fetchTree} = useFetchAllPermissions();

    const methods = {
      // 权限树展开收起
      permissionTreeToggleExpand: () => {
        state.expandAll = !state.expandAll;
        Object.keys(permissionTreeElRef.value.store.nodesMap).forEach(key => permissionTreeElRef.value.store.nodesMap[key].expanded = state.expandAll);
      },
      // 拖拽成功完事件
      nodeDrop: ({data: {id: draggingId}}, {data: {id: dropId}}, dropType) => {
        fetchUpdate({id: draggingId, dropId, dropType})
      },
      // 节点类型选择事件
      nodeSelectType: ({type}) => {
        fetchTree({type});
      }
    };

    onMounted(() => {
      fetchTree();
    })

    return {
      ...toRefs(state),
      ...methods,
      permissionTrees,
      permissionTreeElRef,
    }
  },
})
</script>

<style lang="scss" scoped>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
</style>