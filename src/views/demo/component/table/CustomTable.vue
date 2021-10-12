<template>
  <PageWrapper
    :title="$route['meta']['title']"
    :sub-title="$route['meta']['title']"
    content-background>
    <el-card shadow="none">
      <BasicTable :data="tableData" :columns="tableColumns" border size="small">
        <template #name="{row:{name}}">
          <el-button type="text" size="mini">{{ name }}</el-button>
        </template>
        <template #action="{row,$index}">
          <el-button type="text" size="mini" @click="handleEdit(row,$index)">编辑</el-button>
          <el-popconfirm title="确定要删除吗?">
            <template #reference>
              <el-button type="text" size="mini" style="color: red" @click="handleDelete(row,$index)">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </BasicTable>
    </el-card>
  </PageWrapper>
</template>

<script>
import {BasicTable} from "@/components/Table";
import {PageWrapper} from '@/components/Page';

import {getCustomColumns, getBasicData} from './tableData.js';
import {reactive, toRefs} from "vue";

export default {
  name: 'Basic',
  components: {BasicTable, PageWrapper},
  setup() {
    const state = reactive({
      tableColumns: getCustomColumns(),
      tableData: getBasicData(),
    });

    const handleEdit = (index, row) => console.log(index, row);
    const handleDelete = (index, row) => console.log(index, row);

    return {
      ...toRefs(state),
      handleEdit,
      handleDelete
    }
  }
}
</script>
