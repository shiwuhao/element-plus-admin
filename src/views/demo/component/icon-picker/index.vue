<template>
  <page-wrapper :title="$route.meta['title']">
    <el-card shadow="none" header="雪碧图">
      <IconSvg name="peoplelist" :size="16" style="color: red"/>
    </el-card>
    <!--    <e-icon-picker v-model="icon" size="small"/>-->

  </page-wrapper>
</template>

<script>
import {PageWrapper} from '@/components/Page/index'
import {IconSvg} from '@/components/Icon'


import {ref} from "vue";

export default {
  name: "icon-picker",
  components: {PageWrapper, IconSvg},
  setup() {
    return {
      icon: ref(),
    }
  }
}
</script>