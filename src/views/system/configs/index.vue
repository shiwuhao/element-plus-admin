<template>
  <page-wrapper :title="$route.meta.title">
    <template #sub-title>
      <el-switch class="sub-title" v-model="mode" size="mini" active-text="配置模式" inactive-text="管理模式"></el-switch>
    </template>
    <template #extra>
      <el-button type="primary" size="mini" @click="handleAdd">新增</el-button>
    </template>
    <table-list v-if="mode" ref="tableListRef"></table-list>
    <group-list v-if="!mode"></group-list>
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
    const mode = ref(false);
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
.sub-title{
  margin-left: 30px;
  color: ;
}
</style>