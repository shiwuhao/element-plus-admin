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
import {useLiquidFillChart} from "./useLiquidFillChart.js";
import {toRefs} from "vue";
export default {
  name: "liquidFillChart",
  components: {Echarts},
  setup() {
    const liquidFillChart = useLiquidFillChart();
    return {
      ...toRefs(liquidFillChart),
    }
  }
}
</script>

<style scoped>

</style>