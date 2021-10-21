<template>
  <page-wrapper :title="$route.meta['title']">
    <template #extra>
      <el-button type="primary" size="mini" @click="addItem">新增</el-button>
    </template>
    <el-card shadow="none">
      <BasicQuery v-model="query" :schemas="schemas" :col-props="{span:6}" @submit="getQuery"></BasicQuery>
    </el-card>
    <el-card shadow="none" class="mt-2">
      <BasicTable :columns="columns"
                  :data="lists"
                  :paginate="paginate"
                  :loading="listLoading"
                  @change-page="changePage">
        <el-table-column label="操作" width="120">
          <template #default="scope">
            <el-button type="text" size="small" :disabled="scope.row.name === 'Administrator'"
                       @click="editItem(scope.row)">编辑
            </el-button>
            <el-popconfirm title="删除你是认真的吗？" iconColor="red" @confirm="deleteItem(scope.row)">
              <template #reference>
                <el-button type="text" size="small" :disabled="scope.row.name === 'Administrator'">删除</el-button>
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
import {PageWrapper} from "@/components/Page"
import {BasicTable, BasicQuery} from "@/components/Table"
import EditTemplate from "./EditTemplate";
import {listApi, itemApi, updateApi, storeApi, deleteApi} from "@/api/roles";
import {useResourceApi} from "@/composables/useResourceApi";
import {defineComponent, toRefs, provide, shallowReactive} from "vue";

export default defineComponent({
  name: "index",
  components: {BasicQuery, BasicTable, EditTemplate, PageWrapper},
  setup() {
    const state = shallowReactive({
      columns: [
        {prop: 'id', label: 'ID', width: 100},
        {prop: 'title', label: '角色名称', minWidth: 100},
        {prop: 'name', label: '角色标识', minWidth: 100},
        {prop: 'status_label', label: '状态', minWidth: 100},
        {prop: 'created_at', label: '创建时间', minWidth: 100},
      ],
      schemas: [
        {field: 'id', placeholder: '角色ID', component: 'Input'},
        {field: 'title', placeholder: '角色名称', component: 'Input'},
        {field: 'name', placeholder: '角色标识', component: 'Input'},
      ],
    })

    const resourceApi = useResourceApi({
      listApi,
      itemApi,
      updateApi,
      storeApi,
      deleteApi,
    });

    provide('resourceApi', resourceApi);

    return {
      ...toRefs(state),
      ...toRefs(resourceApi),
    }
  },
})
</script>

