<template>
  <page-wrapper :title="$route.meta['title']">
    <template #extra>
      <el-button type="primary" size="mini" @click="addItem">新增</el-button>
    </template>
    <el-card shadow="none">
      <basic-query v-model="query" :schemas="schemas" @submit="getQuery"></basic-query>
    </el-card>
    <el-card shadow="none" class="mt-2">
      <basic-table :columns="columns"
                  :data="lists"
                  :paginate="paginate"
                  :loading="listLoading"
                  @change-page="changePage">

        <template #roles="{row:{roles}}">
          <el-tag class="mr-2" v-for="(item,index) in roles" :key="index" size="mini">{{ item.label }}</el-tag>
        </template>
        <el-table-column label="操作" width="120">
          <template #default="{row}">
            <el-button type="text" @click="editItem(row)">编辑</el-button>
            <el-popconfirm title="删除你是认真的吗？" iconColor="red" @confirm="deleteItem(row)">
              <template #reference>
                <el-button type="text" class="danger">删除</el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </basic-table>
      <edit-template ref="editTemplateRef" v-model="dialog"/>
    </el-card>
  </page-wrapper>
</template>

<script>
import {PageWrapper} from "@/components/Page/index.js"
import {BasicTable, BasicQuery} from "@/components/Table/index.js"
import EditTemplate from "./EditTemplate.vue";
import {defineComponent, toRefs, provide, shallowReactive} from "vue";
import {useFetchResource} from "@/api/users.js";

export default defineComponent({
  name: "index",
  components: {BasicQuery, BasicTable, EditTemplate, PageWrapper},
  setup() {
    const state = shallowReactive({
      columns: [
        {prop: 'id', label: 'ID', width: 100},
        {prop: 'username', label: '用户名', minWidth: 100},
        {prop: 'nickname', label: '昵称', minWidth: 100},
        {prop: 'roles', label: '角色', minWidth: 100, slot: 'roles'},
        {prop: 'status_label', label: '状态', minWidth: 100},
        {prop: 'created_at', label: '创建时间', minWidth: 100},
      ],
      schemas: [
        {field: 'id', placeholder: '用户ID', component: 'Input'},
        {field: 'username', placeholder: '用户名', component: 'Input'},
        {field: 'nickname', placeholder: '昵称', component: 'Input'},
      ],
    })

    const fetchResource = useFetchResource();
    provide('fetchResource', fetchResource);

    return {
      ...toRefs(state),
      ...toRefs(fetchResource),
    }
  },
})
</script>

