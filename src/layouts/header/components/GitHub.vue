<template>
  <div class="flex-col center align-center">
    <icon name="el-github" size="18" @click="openGitHub"/>
  </div>
</template>
<script>
import {defineComponent, computed, unref} from 'vue';
import {openWindow} from "@/utils/index.js";

export default defineComponent({
  name: 'GitHub',
  setup() {
    const openGitHub = () => {
      openWindow('https://github.com/shiwuhao/element-plus-admin')
    }
    return {
      openGitHub
    };
  },
});
</script>