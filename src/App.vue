<template>
  <router-view/>
</template>
<script>
import {useFetchItemList} from '@/api/useConfigRequest'
import store from "@/store";
import {watch} from "vue";

export default {
  setup() {
    const {data} = useFetchItemList();
    watch(data, () => {
      store.commit('config/setConfig', data.value.data);
    })
  }
}
</script>
<style lang="scss">
@import "~@/styles/index.scss";
</style>
