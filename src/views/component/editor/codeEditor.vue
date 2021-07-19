<template>
  <el-card class="mt10" :header="cardTitle">
    <el-radio-group v-model="codeMode" size="small" @change="handleChange">
      <el-radio-button label="json">Json数据</el-radio-button>
      <el-radio-button label="html">Html代码</el-radio-button>
      <el-radio-button label="javascript">Javascript代码</el-radio-button>
    </el-radio-group>
    <CodeEditor v-model="codeData" class="mt10" style="height:100%;min-height: 750px"></CodeEditor>
  </el-card>
</template>

<script>
import {CodeEditor} from '@/components/CodeEditor'
import {jsonData, htmlData, javascriptData} from "./codeData";

export default {
  name: "json",
  components: {CodeEditor},
  data() {
    return {
      cardTitle: this.$route.meta.title,
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
::v-deep .CodeMirror {
  height: 100%;

  .CodeMirror-scroll {
    min-height: 750px;
  }
}
</style>