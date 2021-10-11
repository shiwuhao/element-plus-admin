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
import {useGaugeChart} from "./useGaugeChart.js";
import {toRefs} from "vue";
export default {
  name: "gaugeChart",
  components: {Echarts},
  setup() {
    const gaugeChart = useGaugeChart();
    return {
      ...toRefs(gaugeChart),
    }
  }
}
</script>

<style scoped>

</style>