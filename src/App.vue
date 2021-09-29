<template>
  <router-view/>
</template>
<script>
import {configItemsApi} from '@/api/configs'
import store from "@/store";

export default {
  setup() {
    configItemsApi().then((response) => {
      store.commit('config/setConfig', response.data.data);
    })
  }
}
</script>
<style lang="scss">
@import "@/styles/index.scss";
</style>
