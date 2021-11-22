<template>
  <el-card header="项目统计" shadow="none">
    <div ref="elRef" style="height: 380px;width: 100%;"></div>
  </el-card>
</template>

<script>
import {BasicCard} from '@/components/Card/index.js'
import {useECharts} from "@/composables/useECharts.js";
import {getFunnelData} from '../data.js'
import {onMounted} from "vue";

export default {
  name: "BarPolarStack",
  components: {BasicCard},
  setup() {
    const {elRef, setOptions} = useECharts();

    onMounted(() => {
      setOptions(getFunnelData())
    })

    return {
      elRef,
    }
  }
}
</script>

<style scoped>

</style>