<template>
  <page-wrapper
    :title="$route.meta.title"
    background-color
  >
    <template #extra>
      <el-button type="primary" size="mini">新增</el-button>
    </template>
    <template #content>
      <el-radio-group v-model="configMode" size="mini">
        <el-radio-button label="editor">配置模式</el-radio-button>
        <el-radio-button label="config">编辑模式</el-radio-button>
      </el-radio-group>
    </template>
    <el-card shadow="none">
      <table-list v-if="configMode === 'editor'"></table-list>
      <tab-list v-if="configMode === 'config'"></tab-list>
    </el-card>
  </page-wrapper>

</template>

<script>
import PageWrapper from "@/components/Page/src/PageWrapper";
import TableList from "@/views/system/configs/TableList";
import TabList from "@/views/system/configs/TabList";

export default {
  name: "index",
  components: {PageWrapper, TableList, TabList},
  data() {
    return {
      activeName: 'second',
      configMode:'editor',
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style scoped>

</style>