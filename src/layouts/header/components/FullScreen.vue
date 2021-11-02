<template>
  <div class="flex-col center align-center" @click="toggle">
    <icon-svg :name="!isFullscreen ? 'expend' : 'compress'" size="18"/>
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
  //height: 49px;
  //padding: 0 10px;
}
</style>
