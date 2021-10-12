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
import {useBubbleChart} from "./useBubbleChart.js";
import {toRefs} from "vue";
export default {
  name: "bubbleChart",
  components: {Echarts},
  setup() {
    const bubbleChart = useBubbleChart();
    return {
      ...toRefs(bubbleChart),
    }
  }
}
</script>

<style scoped>

</style>