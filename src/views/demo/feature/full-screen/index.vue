<template>
  <page-wrapper :title="$route.meta['title']">
    <template #content>
      使用VueUse useFullscreen
      <el-link type="primary" href="https://vueuse.org/core/useFullscreen/" target="_blank">查看文档</el-link>
    </template>
    <el-card header="Window" shadow="none">
      <p>state：{{ isFullscreen }}</p>
      <el-button type="primary" @click="enter">进入全屏</el-button>
      <el-button type="danger" @click="exit">退出全屏</el-button>
      <el-button type="success" @click="toggle">toggle全屏</el-button>
    </el-card>
    <div class="mt-2"></div>
    <el-card header="Dom" shadow="none">
      <div class="flex-col center align-center" ref="elDom" style="background: white;">
        <el-button type="success" @click="toggleElement">toggleElement</el-button>
      </div>
    </el-card>
  </page-wrapper>
</template>

<script>
import {PageWrapper} from '@/components/Page'
import {useFullscreen} from '@vueuse/core'
import {ref} from "vue";

export default {
  name: "index",
  components: {PageWrapper},
  setup() {
    const {isFullscreen, enter, exit, toggle} = useFullscreen();

    const elDom = ref(null);
    const {toggle: toggleElement} = useFullscreen(elDom);

    return {
      isFullscreen,
      enter,
      exit,
      toggle,
      elDom,
      toggleElement
    }
  }
}
</script>

<style scoped>

</style>