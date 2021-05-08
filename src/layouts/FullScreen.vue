<template>
  <el-tooltip effect="dark" :content="getTitle" placement="bottom">
    <span @click="toggle">
      <i class="iconfont" :class="[!isFullscreen ? 'icon-fullscreen' : 'icon-fullscreen-exit']"></i>
    </span>
  </el-tooltip>
</template>
<script lang="ts">
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
