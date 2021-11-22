<template>
  <page-wrapper :title="$route.meta['title']" content-full-height content-background>
    <div class="mt-2">
      <Markdown ref="markdownRef" v-model="codeData" :options="options"></Markdown>
    </div>
  </page-wrapper>
</template>

<script>
import {PageWrapper} from "@/components/Page/index.js";
import {Markdown} from '@/components/Markdown/index.js'
import {markdownData} from "./codeData.js";
import {reactive, toRefs} from "vue";

export default {
  name: "json",
  components: {Markdown, PageWrapper},
  setup() {
    const state = reactive({
      editorMode: 'classic',
      codeData: markdownData,
      options: {
        height: '100%',
        upload: {
          url: 'https://security-company.runhub.cn/backend/uploads',
          format: (files, responseText) => {
            const response = JSON.parse(responseText)
            const returnData = {code: 0, msg: '', data: {errFiles: [], succMap: {url: response.files[0]['url']}}}
            return JSON.stringify(returnData);
          },
        }
      }
    })

    return {
      ...toRefs(state)
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