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
import {useScatterChart} from "./useScatterChart.js";
import {toRefs} from "vue";
export default {
  name: "scatterChart",
  components: {Echarts},
  setup() {
    const scatterChart = useScatterChart();
    return {
      ...toRefs(scatterChart),
    }
  }
}
</script>

<style scoped>

</style>