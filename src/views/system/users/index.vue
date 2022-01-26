<template>
  <page-wrapper :title="$route.meta['title']">
    <template #extra>
      <el-button type="primary" size="mini" @click="addItem">新增</el-button>
    </template>
    <el-card shadow="none">
      <basic-query v-model="query" :schemas="schemas" @submit="getQuery"></basic-query>
    </el-card>
    {{ data }}
    <el-card shadow="none" class="mt-2">
      <basic-table :columns="columns"
                   :data="data?.data"
                   :paginate="data?.meta"
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
      <!--      <edit-template ref="editTemplateRef" v-model="dialog"/>-->
    </el-card>
  </page-wrapper>
</template>

<script>
import {PageWrapper} from "@/components/Page/index.js"
import {BasicTable, BasicQuery} from "@/components/Table/index.js"
import EditTemplate from "./EditTemplate.vue";
import {defineComponent, toRefs, provide, shallowReactive, computed, onMounted, reactive} from "vue";
import {useFetchItem, useFetchList} from "@/api/useUsers.js";
import { useFetch } from '@vueuse/core'
import {useAxios} from '@vueuse/integrations'

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

    const url = 'http://element-plus-admin.local/backend/users';
    const headers = {Authorization: 'Bearer 3|cxtQL5IoHano3ItEKBF2TnPIoNo01mw7OKKIkBHb'};
    const body = new URLSearchParams('aa=bb');

    const payload = reactive({aa:11})
    const {data} = useFetch(url,{headers}).get().json();

    useAxios()
    return {
      ...toRefs(state),
      data,
    }
  },
})
</script>

