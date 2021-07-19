<template>
  <el-card class="mt10" :header="cardTitle">
    <el-radio-group v-model="editorMode" size="small" @change="handleChangeTheme">
      <el-radio-button label="dark">dark</el-radio-button>
      <el-radio-button label="classic">classic</el-radio-button>
    </el-radio-group>
    <div class="mt10">
      <Markdown ref="markdownRef" v-model="codeData" :options="options"></Markdown>
    </div>
  </el-card>
</template>

<script>
import {Markdown} from '@/components/Markdown'
import {markdownData} from "./codeData";

export default {
  name: "json",
  components: {Markdown},
  data() {
    return {
      cardTitle: this.$route.meta.title,
      editorMode: 'classic',
      codeData: markdownData,
      options: {
        height: 600,
        upload: {
          url: 'https://security-company.runhub.cn/backend/uploads',
          format: (files, responseText) => {
            const response = JSON.parse(responseText)
            const returnData = {code: 0, msg: '', data: {errFiles: [], succMap: {url: response.files[0]['url']}}}
            return JSON.stringify(returnData);
          },
        }
      }
    }
  },
  methods: {
    handleChangeTheme(v) {
      const instance = this.$refs['markdownRef'].getInstance();
      instance.setTheme(v)
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