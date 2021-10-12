<template>
  <page-wrapper :title="$route.meta['title']">
    <template #content>
      使用VueUse useDrauu
      <el-link type="primary" href="https://vueuse.org/integrations/useDrauu/" target="_blank">查看</el-link>
    </template>
      <svg ref="target" style="width:500px;height: 500px;background: white;"></svg>
  </page-wrapper>
</template>
<script>
import {PageWrapper} from '@/components/Page'
import {useDrauu} from '@vueuse/integrations/useDrauu'
import {ref,toRefs} from "vue";

export default {
  name: "index",
  components: {PageWrapper},
  setup() {
    const target = ref()
    const { undo, redo, canUndo, canRedo, brush } = useDrauu(target)
    const { color, size } = toRefs(brush)

    return {
      target,
      undo, redo, canUndo, canRedo, brush,color, size
    }
  }
}
</script>