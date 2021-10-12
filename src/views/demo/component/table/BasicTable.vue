<template>
  <PageWrapper
    :title="$route['meta']['title']"
    :sub-title="$route['meta']['title']"
    content-background>
    <template #content>
      el-table的所有属性都可以直接使用
    </template>
    <template #extra>
      <el-button type="primary" size="mini">操作1</el-button>
      <el-button type="primary" size="mini">操作2</el-button>
    </template>
    <el-card shadow="none">
      <BasicTable :data="tableData" :columns="tableColumns" border size="small">
        <template #action>
          <el-button type="text" size="mini">编辑</el-button>
          <el-button type="text" size="mini" style="color: red">删除</el-button>
        </template>
      </BasicTable>
    </el-card>
  </PageWrapper>
</template>

<script>
import {BasicTable} from "@/components/Table";
import {PageWrapper} from '@/components/Page';

import {getBasicColumns, getBasicData} from './tableData.js';
import {reactive, toRefs} from "vue";

export default {
  name: 'Basic',
  components: {BasicTable, PageWrapper},
  setup() {
    const state = reactive({
      tableColumns: getBasicColumns(),
      tableData: getBasicData(),
    });

    return {
      ...toRefs(state),
    }
  }
}
</script>
