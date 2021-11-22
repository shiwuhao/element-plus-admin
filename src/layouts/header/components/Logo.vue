<template>
  <div class="container flex-row">
    <div class="flex-row align-center">
      <img class="logo" :src="logo">
      <span class="title">{{ title }} </span>
    </div>
  </div>
</template>
<script>
import {useGlobalSetting} from "@/composables/setting/useGlobalSeeting.js";

export default {
  setup() {
    const {title, logo} = useGlobalSetting();
    return {
      title,
      logo
    }
  },
}
</script>
<style lang="scss" scoped>
.container {
  width: 200px;
  height: 49px;

  .logo {
    padding-left: 10px;
    height: 35px;
  }

  .title {
    font-size: 15px;
    font-weight: bold;
    padding-left: 10px;
    margin: 0;
  }
}
</style>