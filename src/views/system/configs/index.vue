<template>
  <page-wrapper :title="$route.meta.title">
    <template #extra>
      <el-button type="primary" size="mini" @click="handleAdd">新增</el-button>
    </template>
    <template #content>
      <el-radio-group v-model="mode" size="mini">
        <el-radio-button label="config">配置模式</el-radio-button>
        <el-radio-button label="manager">管理模式</el-radio-button>
      </el-radio-group>
    </template>
    <table-list v-if="mode === 'manager'" ref="tableListRef"></table-list>
    <group-list v-if="mode === 'config'"></group-list>
  </page-wrapper>

</template>

<script>
import {PageWrapper} from "@/components/Page";
import TableList from "@/views/system/configs/TableList";
import GroupList from "@/views/system/configs/GroupList";
import {ref} from "vue";

export default {
  name: "index",
  components: {PageWrapper, TableList, GroupList},
  setup() {
    const mode = ref('manager');
    const tableListRef = ref(null);

    const handleAdd = () => tableListRef.value.addItem();

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