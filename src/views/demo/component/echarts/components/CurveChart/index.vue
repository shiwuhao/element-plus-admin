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
import {useCurveChart} from "./useCurveChart.js";
import {toRefs} from "vue";
export default {
  name: "curveChart",
  components: {Echarts},
  setup() {
    const curveChart = useCurveChart();
    return {
      ...toRefs(curveChart),
    }
  }
}
</script>

<style scoped>

</style>