<template>
  <page-wrapper
    :title="$route.meta.title"
    background-color
  >
    <template #extra>
      <el-button type="primary" size="mini" @click="drawerToggle">新增</el-button>
    </template>
    <template #content>
      <el-radio-group v-model="mode" size="mini">
        <el-radio-button label="editor">配置模式</el-radio-button>
        <el-radio-button label="config">编辑模式</el-radio-button>
      </el-radio-group>
    </template>
    <el-card shadow="none">
      <table-list v-if="mode === 'editor'"></table-list>
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
    const mode = ref('editor');
    const dialog = ref(false);

    const drawerToggle = () => dialog.value = !dialog.value;

    provide('dialog', dialog);
    provide('drawerToggle', drawerToggle);

    return {
      mode,
      drawerToggle,
    }
  },
}
</script>

<style scoped>

</style>