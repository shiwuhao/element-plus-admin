<template>
  <Echarts
    ref="echarts"
    :id="id"
    :height="height"
    :chart-data="chartData"
  />
</template>
<script>
import {Echarts} from "@/components/Echarts";
import {useRadarChart} from "./useRadarChart.js";
import {toRefs} from "vue";
export default {
  name: "radarChart",
  components: {Echarts},
  setup() {
    const radarChart = useRadarChart();
    return {
      ...toRefs(radarChart),
    }
  }
}
</script>

<style scoped>

</style>