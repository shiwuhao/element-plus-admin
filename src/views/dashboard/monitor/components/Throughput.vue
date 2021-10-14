<template>
  <BasicCard title="Throughput">
    <el-row>
      <el-col :xs="24" class="mb10">
        <div ref="elRef" style="height: 310px;width: 100%;"></div>
      </el-col>
      <el-col :xs="24">
        <div ref="elRef2" style="height: 310px;width: 100%;"></div>
      </el-col>
    </el-row>
  </BasicCard>
</template>

<script>
import {BasicCard} from '@/components/Card'
import {useECharts} from "@/composables/useECharts";
import {getThroughputData} from "../data";
import {onMounted} from "vue";

export default {
  name: "ServerStatus",
  components: {BasicCard},
  setup() {
    const {elRef, setOptions} = useECharts();
    const {elRef: elRef2, setOptions: setOptions2} = useECharts();

    onMounted(() => {
      setOptions(getThroughputData());
      setOptions2(getThroughputData());
    })

    return {
      elRef,
      elRef2,
    }
  }
}
</script>

<style scoped>

</style>