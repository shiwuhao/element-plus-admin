<template>
  <div class="flex-col center align-center">
    <icon-svg name="github" size="18" @click="openGitHub"/>
  </div>
</template>
<script>
import {defineComponent, computed, unref} from 'vue';
import {openWindow} from "@/utils";

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