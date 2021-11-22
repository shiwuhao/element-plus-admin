<template>
  <page-wrapper
    :title="$route['meta']['title']"
    :sub-title="$route['meta']['title']"
    content-background>
    <el-card shadow="none">
      <basic-table :data="tableData" :columns="tableColumns" border size="small">
        <template #name="{row:{name}}">
          <el-button type="text">{{ name }}</el-button>
        </template>
        <template #action="{row,$index}">
          <el-button type="text" @click="handleEdit(row,$index)">编辑</el-button>
          <el-popconfirm title="确定要删除吗?">
            <template #reference>
              <el-button type="text" style="color: red" @click="handleDelete(row,$index)">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </basic-table>
    </el-card>
  </page-wrapper>
</template>

<script>
import {BasicTable} from "@/components/Table/index.js";
import {PageWrapper} from '@/components/Page/index.js';

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
