<template>
  <page-wrapper :title="$route.meta['title']">
    <template #extra>
      <el-button type="primary" size="mini" @click="addItem">新增</el-button>
    </template>
    <el-card shadow="none">
      <BasicQuery v-model="query" :schemas="schemas" @submit="getQuery"></BasicQuery>
    </el-card>
    <el-card shadow="none" class="mt-2">
      <BasicTable :columns="columns"
                  :data="lists"
                  :paginate="paginate"
                  :loading="listLoading"
                  @change-page="changePage">

          <template #roles="scope">
            <el-tag class="mr-2" v-for="(item,index) in scope.row.roles" :key="index" size="mini">{{item.title}}</el-tag>
          </template>
        <el-table-column label="操作" width="120">
          <template #default="scope">
            <el-button type="text" size="small" @click="editItem(scope.row)">编辑</el-button>
            <el-popconfirm title="删除你是认真的吗？" iconColor="red" @confirm="deleteItem(scope.row)">
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
import {listApi, itemApi, updateApi, storeApi, deleteApi} from "@/api/users.js";
import {useResourceApi} from "@/composables/useResourceApi.js";
import {defineComponent, toRefs, provide, shallowReactive} from "vue";

export default defineComponent({
  name: "index",
  components: {BasicQuery, BasicTable, EditTemplate, PageWrapper},
  setup() {
    const state = shallowReactive({
      columns: [
        {prop: 'id', label: 'ID', width: 100},
        {prop: 'username', label: '用户名', minWidth: 100},
        {prop: 'nickname', label: '昵称', minWidth: 100},
        {prop: 'roles', label: '角色', minWidth: 100,slot:'roles'},
        {prop: 'status_label', label: '状态', minWidth: 100},
        {prop: 'created_at', label: '创建时间', minWidth: 100},
      ],
      schemas: [
        {field: 'id', placeholder: '用户ID', component: 'Input'},
        {field: 'username', placeholder: '用户名', component: 'Input'},
        {field: 'nickname', placeholder: '昵称', component: 'Input'},
      ],
    })

    const resourceApi = useResourceApi({
      listApi,
      itemApi,
      updateApi,
      storeApi,
      deleteApi
    });

    provide('resourceApi', resourceApi);

    return {
      ...toRefs(state),
      ...toRefs(resourceApi),
    }
  },
})
</script>

