<template>
  <el-card header="项目统计" shadow="none">
    <div ref="elRef" style="height: 380px;width: 100%;"></div>
  </el-card>
</template>

<script>
import {BasicCard} from '@/components/Card'
import {useECharts} from "@/composables/useECharts";
import {getFunnelData} from '../data'
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