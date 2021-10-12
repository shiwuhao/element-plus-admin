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
import {useWordCloudChart} from "./useWordCloudChart.js";
import {toRefs} from "vue";
export default {
  name: "wordCloudChart",
  components: {Echarts},
  setup() {
    const wordCloudChart = useWordCloudChart();
    return {
      ...toRefs(wordCloudChart),
    }
  }
}
</script>

<style scoped>

</style>