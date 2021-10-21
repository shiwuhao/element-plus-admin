<template>
  <PageWrapper :title="$route.meta.title">
    <el-radio-group v-model="editorMode" size="small" @change="handleChangeTheme">
      <el-radio-button label="dark">dark</el-radio-button>
      <el-radio-button label="classic">classic</el-radio-button>
    </el-radio-group>
    <div class="mt-2">
      <Markdown ref="markdownRef" v-model="codeData" :options="options"></Markdown>
    </div>
  </PageWrapper>
</template>

<script>
import {PageWrapper} from "@/components/Page";
import {Markdown} from '@/components/Markdown'
import {markdownData} from "./codeData.js";

export default {
  name: "json",
  components: {Markdown, PageWrapper},
  data() {
    return {
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
:deep(.CodeMirror) {
  height: 100%;

  .CodeMirror-scroll {
    min-height: 750px;
  }
}
</style>