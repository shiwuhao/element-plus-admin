<template>
  <el-card class="m10" :header="cardTitle">
    <BasicTable :data="tableData" :columns="tableColumns" row-key="id">
      <el-table-column label="操作">
        <template #default="scope">
          <el-button type="text" size="mini" @click="handleEdit(scope)">编辑</el-button>
          <el-button type="text" size="mini" style="color: red" @click="handleDelete(scope)">删除</el-button>
        </template>
      </el-table-column>
    </BasicTable>
  </el-card>
</template>

<script>
import BasicTable from "@/components/Table/BasicTable";

import {getBasicColumns, getTreeData} from './tableData';

export default {
  name: 'TreeTable',
  components: {BasicTable},
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
