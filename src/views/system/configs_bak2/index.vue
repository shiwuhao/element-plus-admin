<template>
  <page-wrapper
    :title="$route.meta.title"
    background-color
  >
    <template #extra>
      <el-button type="primary" size="mini" @click="handleAdd">新增</el-button>
    </template>
    <template #content>
      <el-radio-group v-model="mode" size="mini">
        <el-radio-button label="config">配置模式</el-radio-button>
        <el-radio-button label="manager">管理模式</el-radio-button>
      </el-radio-group>
    </template>
    <el-card shadow="none">
      <table-list v-if="mode === 'manager'" ref="tableListRef"></table-list>
      <tab-list v-if="mode === 'config'"></tab-list>
    </el-card>
  </page-wrapper>

</template>

<script>
import {PageWrapper} from "@/components/Page";
import TableList from "@/views/system/configs/TableList";
import TabList from "@/views/system/configs/TabList";
import {provide, ref} from "vue";

export default {
  name: "index",
  components: {PageWrapper, TableList, TabList},
  setup() {
    const mode = ref('manager');
    const tableListRef = ref(null);

    const handleAdd = () => tableListRef.value.handleAdd();

    return {
      mode,
      tableListRef,
      handleAdd,
    }
  },
}
</script>

<style scoped>

</style>