<template>
  <BasicCard title="Throughput">
    <el-row>
      <el-col :xs="24" class="mb10">
        <div ref="elRef" style="height: 310px;width: 100%;"></div>
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

    onMounted(() => {
      setOptions(getThroughputData());
    })

    return {
      elRef,
    }
  }
}
</script>

<style scoped>

</style>