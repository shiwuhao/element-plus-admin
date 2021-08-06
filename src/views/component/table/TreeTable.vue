<template>
  <PageWrapper
    :title="cardTitle"
    :sub-title="cardTitle"
    content-background>
    <el-card shadow="none">
      <BasicTable :data="tableData" :columns="tableColumns" row-key="id" size="small">
        <el-table-column label="操作">
          <template #default="scope">
            <el-button type="text" size="mini" @click="handleEdit(scope)">编辑</el-button>
            <el-button type="text" size="mini" style="color: red" @click="handleDelete(scope)">删除</el-button>
          </template>
        </el-table-column>
      </BasicTable>
    </el-card>
  </PageWrapper>
</template>

<script>
import BasicTable from "@/components/Table/BasicTable";
import PageWrapper from "@/components/Page/src/PageWrapper";

import {getBasicColumns, getTreeData} from './tableData';

export default {
  name: 'TreeTable',
  components: {BasicTable, PageWrapper},
  data() {
    return {
      cardTitle: this.$route.meta.title,
      tableColumns: getBasicColumns(),
      tableData: getTreeData(),
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>
