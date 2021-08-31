<template>
  <router-view/>
</template>
<script>
import {configItemsApi} from '@/api/configs'
import store from "@/store";
import {watch} from "vue";

export default {
  setup() {
    configItemsApi().then((response) => {
      store.commit('config/setConfig', response.data);
    })
  }
}
</script>
<style lang="scss">
@import "~@/styles/index.scss";
</style>
