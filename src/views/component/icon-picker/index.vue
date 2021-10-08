<template>
  <page-wrapper :title="$route.meta['title']">
    <e-icon-picker v-model="icon" size="small"/>
  </page-wrapper>
</template>

<script>
import {PageWrapper} from "@/components/Page"

import {ref} from "vue";

export default {
  name: "icon-picker",
  components: {PageWrapper},
  setup() {
    return {
      icon: ref(),
    }
  }
}
</script>

<style scoped>

</style>