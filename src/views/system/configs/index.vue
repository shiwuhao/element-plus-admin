<template>
  <page-wrapper
    :title="$route.meta.title"
    background-color
  >
    <template #extra>
      <el-button type="primary" size="mini" @click="dialog = true">新增</el-button>
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
  <EditTemplate v-model="dialog"/>
</template>

<script>
import {PageWrapper} from "@/components/Page";
import TableList from "@/views/system/configs/TableList";
import TabList from "@/views/system/configs/TabList";
import EditTemplate from "@/views/system/configs/EditTemplate";
import {reactive} from "vue";
import {toRefs} from "@vueuse/core";

export default {
  name: "index",
  components: {PageWrapper, TableList, TabList, EditTemplate},
  setup(){
    const state = reactive({
      dialog: false,
      activeName: 'second',
      configMode: 'editor',
    });
    return {
      ...toRefs(state)
    }
  },
}
</script>

<style scoped>

</style>