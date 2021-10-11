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
import {usePieChart} from "./usePieChart.js";
import {toRefs} from "vue";
export default {
  name: "pieChart",
  components: {Echarts},
  setup() {
    const pieChart = usePieChart();
    return {
      ...toRefs(pieChart),
    }
  }
}
</script>

<style scoped>

</style>