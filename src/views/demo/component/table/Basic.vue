<template>
  <PageWrapper
    :title="$route['meta']['title']"
    :sub-title="$route['meta']['title']"
    content-background>
    <el-card shadow="none">
      <BasicTable :data="tableData" :columns="tableColumns" border size="small">
        <el-table-column label="操作" width="100">
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
import {BasicTable} from "@/components/Table";
import {PageWrapper} from '@/components/Page';

import {getBasicColumns, getBasicData} from './tableData.js';
import {reactive, toRefs} from "vue";
import {ElMessage} from "element-plus";

export default {
  name: 'Basic',
  components: {BasicTable, PageWrapper},
  setup() {
    const state = reactive({
      tableColumns: getBasicColumns(),
      tableData: getBasicData(),
    });

    const handleEdit = (index, row) => console.log(index, row);
    const handleDelete = (index, row) => {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        state.tableData.splice(index, 1);
        ElMessage.success('删除成功!')
      }).catch(() => {
        ElMessage.info('已取消删除!')
      });
    }

    return {
      ...toRefs(state),
      handleEdit,
      handleDelete
    }
  }
}
</script>
