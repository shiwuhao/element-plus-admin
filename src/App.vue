<template>
  <router-view/>
</template>
<script>
import {configItemsApi} from '@/api/configs'
import store from "@/store";
import axios from "axios";

export default {
  setup() {
    configItemsApi().then((response) => {
      store.commit('config/setConfig', response.data.data);
    })

    axios.get('/backend/mode2/DataOne')
  }
}
</script>
<style lang="scss">
@import "~@/styles/index.scss";
</style>
