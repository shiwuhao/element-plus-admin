<template>
  <el-card class="m10" :header="cardTitle">
    <BasicTable :data="tableData" :columns="tableColumns" border>
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

import {getBasicColumns, getBasicData} from './tableData';

export default {
  name: 'Basic',
  components: {BasicTable},
  data() {
    return {
      cardTitle: this.$route.meta.title,
      tableColumns: getBasicColumns(),
      tableData: getBasicData(),
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.tableData.splice(index, 1);
        this.$message.success('删除成功!');
      }).catch(() => {
        this.$message.info('已取消删除');
      });
    },
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>
