<template>
  <page-wrapper :title="$route.meta['title']">
    <template #extra>
      <el-button type="primary" size="mini" @click="addItem">新增</el-button>
    </template>
    <el-card shadow="none">
      <BasicQuery v-model="query" :schemas="schemas" :col-props="{span:6}" @submit="getQuery"></BasicQuery>
    </el-card>
    <el-card shadow="none" class="mt10">
      <BasicTable :columns="columns"
                  :data="lists"
                  :paginate="paginate"
                  :loading="listLoading"
                  @change-page="changePage">
        <el-table-column label="操作" width="120">
          <template #default="scope">
            <el-button type="text" size="small" @click="editItem(scope.$index)">编辑</el-button>
            <el-popconfirm title="删除你是认真的吗？" iconColor="red" @confirm="deleteItem(scope.$index)">
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
import {PageWrapper} from "@/components/Page"
import {BasicTable, BasicQuery} from "@/components/Table"
import EditTemplate from "./EditTemplate";
import {listApi, itemApi, updateApi, storeApi, deleteApi} from "@/api/users";
import {useResourceApi} from "@/composables/useResourceApi";
import {defineComponent, reactive, toRefs, provide} from "vue";

export default defineComponent({
  name: "index",
  components: {BasicQuery, BasicTable, EditTemplate, PageWrapper},
  setup() {
    const state = reactive({
      columns: [
        {prop: 'id', label: 'ID', width: 100},
        {prop: 'username', label: '用户名', minWidth: 100},
        {prop: 'nickname', label: '昵称', minWidth: 100},
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

