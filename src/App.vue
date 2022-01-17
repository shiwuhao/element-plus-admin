<template>
  <el-config-provider :size="getGlobalSize" :zIndex="3000">
    <router-view/>
  </el-config-provider>
</template>
<script>
import {configItemsApi} from '@/api/configs'
import store from "@/store";
import {useRootSetting} from '@/composables/setting/useRootSeeting.js'

export default {
  setup() {
    configItemsApi().then((response) => {
      store.commit('config/setConfig', response.data.data);
    });
    const {getGlobalSize} = useRootSetting();
    return {
      getGlobalSize,
    }
  }
}
</script>
<style lang="scss">
@import "@/styles/index.scss";
</style>
