<template>
  <el-row>
    <el-col>
      <BasicCard title="漏斗图">
        <div ref="elRef" style="height: 380px;width: 100%;"></div>
      </BasicCard>
    </el-col>
  </el-row>
</template>

<script>
import {BasicCard} from '@/components/Card'
import {useECharts} from "@/composables/useECharts";
import {getFunnelData} from '../data'
import {onMounted} from "vue";

export default {
  name: "BarPolarStack",
  components: {BasicCard},
  setup() {
    const {elRef, setOptions} = useECharts();

    onMounted(() => {
      setOptions(getFunnelData())
    })

    return {
      elRef,
    }
  }
}
</script>

<style scoped>

</style>