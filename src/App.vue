<template>
  <router-view/>
</template>
<script>
import {useConfigRequest} from '@/api/useConfigRequest'

export default {
  setup() {
    const {fetchItemList} = useConfigRequest();
    fetchItemList();
  }
}
</script>
<style lang="scss">
@import "~@/styles/index.scss";
</style>
