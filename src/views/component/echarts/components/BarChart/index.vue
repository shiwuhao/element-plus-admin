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
import {useBarChart} from "./useBarChart.js";
import {toRefs} from "vue";
export default {
  name: "barChart",
  components: {Echarts},
  setup() {
    const barChart = useBarChart();
    return {
      ...toRefs(barChart),
    }
  }
}
</script>

<style scoped>

</style>