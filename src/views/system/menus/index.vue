<template>
  <page-wrapper :title="$route.meta['title']">
    <template #extra>
      <el-button type="primary" @click="addItem">新增</el-button>
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
                  :tree-props="{children: 'children', hasChildren: 'children_count'}"
                  @change-page="changePage">
        <template #label="{row:{icon,label}}">
          <div class="flex-row align-center">
            <span style="width: 14px;"><icon v-if="icon" :name="icon" :size="14"/></span>
            <span class="ml-1">{{ label }}</span>
          </div>
        </template>
        <el-table-column label="操作" width="120">
          <template #default="{row}">
            <el-button type="text" size="small" @click="editItem(row)">编辑</el-button>
            <el-popconfirm title="删除你是认真的吗？" iconColor="red" @confirm="deleteItem(row)">
              <template #reference>
                <el-button type="text" size="small">删除</el-button>
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
import {defineComponent, toRefs, provide, shallowReactive} from "vue";
import {useFetchResource} from '@/api/useFetchMenus.js';

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

    const fetchResource = useFetchResource({item: {type: 'route'}});
    provide('fetchResource', fetchResource);

    return {
      ...toRefs(state),
      ...toRefs(fetchResource),
    }
  },
})
</script>

