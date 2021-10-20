<template>
  <div class="container flex-col center" @click="toggle">
    <el-tooltip effect="dark" :content="getTitle" placement="bottom">
      <i class="iconfont" :class="[!isFullscreen ? 'icon-fullscreen' : 'icon-fullscreen-exit']"></i>
    </el-tooltip>
  </div>
</template>
<script>
import {defineComponent, computed, unref} from 'vue';
import {useFullscreen} from '@vueuse/core';

export default defineComponent({
  name: 'FullScreen',
  setup() {
    const {toggle, isFullscreen} = useFullscreen();

    const getTitle = computed(() => {
      return unref(isFullscreen) ? '退出全屏' : '全屏';
    });

    return {
      getTitle,
      isFullscreen,
      toggle,
    };
  },
});
</script>
<style lang="scss" scoped>
.container {
  height: 49px;
  padding: 0 10px;
}
</style>
