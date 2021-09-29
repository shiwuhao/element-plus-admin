<template>
  <page-wrapper>
    <template #title>
      <el-radio-group v-model="mode" size="mini">
        <el-radio-button label="config">配置模式</el-radio-button>
        <el-radio-button label="manage">管理模式</el-radio-button>
      </el-radio-group>
    </template>
    <template #extra>
      <el-button type="primary" size="mini" :disabled="mode === 'config'" @click="handleAdd">新增</el-button>
    </template>
    <table-list v-if="mode === 'manage'" ref="tableListRef"></table-list>
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
    const mode = ref('config');
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