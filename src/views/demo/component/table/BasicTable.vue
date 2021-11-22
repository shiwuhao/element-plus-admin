<template>
  <page-wrapper
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
      <basic-table :data="tableData" :columns="tableColumns" border>
        <template #action>
          <el-button type="text">编辑</el-button>
          <el-button type="text" style="color: red">删除</el-button>
        </template>
      </basic-table>
    </el-card>
  </page-wrapper>
</template>

<script>
import {BasicTable} from "@/components/Table/index.js";
import {PageWrapper} from '@/components/Page/index.js';

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
