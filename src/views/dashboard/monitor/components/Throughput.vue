<template>
  <BasicCard title="Throughput">
    <el-row>
      <el-col :xs="24" class="mb-2">
        <div ref="elRef" style="height: 310px;width: 100%;"></div>
      </el-col>
    </el-row>
  </BasicCard>
</template>

<script>
import {BasicCard} from '@/components/Card/index.js'
import {useECharts} from "@/composables/useECharts.js";
import {getThroughputData} from "../data.js";
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