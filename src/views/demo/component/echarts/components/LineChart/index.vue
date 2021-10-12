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
import {useLineChart} from "./useLineChart.js";
import {toRefs} from "vue";
export default {
  name: "lineChart",
  components: {Echarts},
  setup() {
    const lineChart = useLineChart();
    return {
      ...toRefs(lineChart),
    }
  }
}
</script>

<style scoped>

</style>