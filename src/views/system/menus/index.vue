<template>
  <page-wrapper :title="$route.meta['title']">
    <template #extra>
      <el-button type="primary" size="mini" @click="addItem">新增</el-button>
    </template>
    <el-card shadow="none">
      <BasicQuery v-model="query" :schemas="schemas" @submit="getQuery"></BasicQuery>
    </el-card>
    <el-card shadow="none" class="mt-2">
      <BasicTable row-key="id" lazy
                  :columns="columns"
                  :data="lists"
                  :paginate="paginate"
                  :loading="listLoading"
                  :load="loadChildren"
                  :tree-props="{children: 'children', hasChildren: 'children_count'}"
                  @change-page="changePage">
        <template #label="{row:{icon,label}}">
          <div class="flex-row align-center">
            <icon v-if="icon" :name="icon" :size="14"/>
            <span style="margin-left: 5px;">{{ label }}</span>
          </div>
        </template>
        <el-table-column label="操作" width="120">
          <template #default="{row}">
            <el-button type="text" size="small" @click="editItem(row)">编辑</el-button>
            <el-popconfirm title="删除你是认真的吗？" iconColor="red" @confirm="deleteItem(row)">
              <template #reference>
                <el-button type="text" size="small" :disabled="row.name === 'Administrator'">删除</el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </BasicTable>
      <EditTemplate ref="editTemplateRef" v-model="dialog"/>
    </el-card>
  </page-wrapper>
</template>

<script>
import {PageWrapper} from "@/components/Page/index.js"
import {BasicTable, BasicQuery} from "@/components/Table/index.js"
import EditTemplate from "./EditTemplate.vue";
import {listApi, itemApi, updateApi, storeApi, deleteApi} from "@/api/menus.js";
import {defineComponent, toRefs, provide, shallowReactive} from "vue";
import {useResourceApi} from "@/composables/useResourceApi.js";

export default defineComponent({
  name: "index",
  components: {BasicQuery, BasicTable, EditTemplate, PageWrapper},
  setup() {
    const state = shallowReactive({
      columns: [
        {prop: 'id', label: 'ID', width: 100},
        {prop: 'title', label: '菜单名称', minWidth: 120, slot: 'label'},
        {prop: 'name', label: '英文标识', minWidth: 120},
        {prop: 'type_label', label: '菜单类型', minWidth: 80},
        {prop: 'url', label: '目标地址', minWidth: 150},
        {prop: 'created_at', label: '创建时间', minWidth: 135},
      ],
      schemas: [
        {field: 'id', placeholder: '菜单ID', component: 'Input'},
        {field: 'title', placeholder: '菜单名称', component: 'Input'},
        {field: 'name', placeholder: '菜单标识', component: 'Input'},
      ],
    })

    let resourceApi = useResourceApi({
      listApi,
      itemApi,
      updateApi,
      storeApi,
      deleteApi,
      item: {type: 'route'},
      refreshAfterConfirm: false,
    });

    const maps = new Map();
    const {confirmItem, deleteItem, getList, item} = resourceApi;

    const loadChildren = async (tree, treeNode, resolve) => {
      // maps.set(tree.id, {tree, treeNode, resolve});
      // const {data: {data}} = await childrenListApi(tree.id);
      // resolve(data);
    }

    const _confirmItem = async () => {
      const {tree, treeNode, resolve} = {...maps.get(item.value.pid)};
      await confirmItem();
      tree ? await loadChildren(tree, treeNode, resolve) : await getList();
    }

    const _deleteItem = async (item) => {
      const {tree, treeNode, resolve} = {...maps.get(item.pid)};
      await deleteItem(item);
      tree ? await loadChildren(tree, treeNode, resolve) : await getList();
    }

    resourceApi = {...resourceApi, ...{confirmItem: _confirmItem, deleteItem: _deleteItem}}
    provide('resourceApi', resourceApi);
    // provide('childrenListApi', childrenListApi);

    return {
      ...toRefs(state),
      ...toRefs(resourceApi),
      // autoGenerateApi,
      loadChildren,
    }
  },
})
</script>

