<template>
  <PageWrapper :title="$route.meta.title">
    <el-radio-group v-model="codeMode" size="small" @change="handleChange">
      <el-radio-button label="json">Json数据</el-radio-button>
      <el-radio-button label="html">Html代码</el-radio-button>
      <el-radio-button label="javascript">Javascript代码</el-radio-button>
    </el-radio-group>
    <CodeEditor v-model="codeData" class="mt10" style="height:100%;min-height: 750px"></CodeEditor>
  </PageWrapper>
</template>

<script>
import {PageWrapper} from "@/components/Page";
import {CodeEditor} from '@/components/CodeEditor'
import {jsonData, htmlData, javascriptData} from "./codeData.js";

export default {
  name: "json",
  components: {CodeEditor, PageWrapper},
  data() {
    return {
      codeMode: 'json',
      codeData: jsonData,
    }
  },
  methods: {
    handleChange(v) {
      switch (v) {
        case 'json':
          this.codeData = jsonData;
          break;
        case 'html':
          this.codeData = htmlData;
          break;
        case 'javascript':
          this.codeData = javascriptData;
          break;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
:deep(.CodeMirror) {
  height: 100%;

  .CodeMirror-scroll {
    min-height: 750px;
  }
}
</style>