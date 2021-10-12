<template>
  <PageWrapper :title="$route['meta']['title']">
    <el-row>
      <el-col :span="8">
        <div ref="chartElRef1" style="width: 500px;height: 500px;"></div>
      </el-col>
      <el-col :span="8">
        <div ref="chartElRef2" style="width: 500px;height: 500px;"></div>
      </el-col>
      <el-col :span="8">
        <div ref="chartElRef3" style="width: 500px;height: 500px;"></div>
      </el-col>
    </el-row>
  </PageWrapper>
</template>

<script>
import {PageWrapper} from '@/components/Page'
import {useECharts} from "@/composables/useECharts";
import {onMounted} from "vue";
import {getBar1Option, getBar2Option, getBarAnimationDelayOption} from "@/views/demo/component/echarts/chartData";

export default {
  name: "bar",
  components: {PageWrapper},
  setup() {
    const {elRef: chartElRef1, setOptions: setOptions1} = useECharts();
    const {elRef: chartElRef2, setOptions: setOptions2} = useECharts();
    const {elRef: chartElRef3, setOptions: setOptions3} = useECharts();

    onMounted(() => {
      setOptions1(getBar1Option());
      setOptions2(getBarAnimationDelayOption());
      setOptions3(getBar2Option());
    })

    return {
      chartElRef1,
      chartElRef2,
      chartElRef3,
    }
  }
}
</script>

<style scoped>

</style>