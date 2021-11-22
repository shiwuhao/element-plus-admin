<template>
  <el-row>
    <el-col>
      <BasicCard title="极坐标系下的堆叠柱状图">
        <div ref="elRef" style="height: 380px;width: 100%;"></div>
      </BasicCard>
    </el-col>
  </el-row>
</template>

<script>
import {BasicCard} from '@/components/Card/index.js'
import {useECharts} from "@/composables/useECharts.js";
import {getBarPolarStack} from '../data.js'
import {onMounted} from "vue";

export default {
  name: "BarPolarStackChart",
  components: {BasicCard},
  setup() {
    const {elRef, setOptions} = useECharts();

    onMounted(() => {
      setOptions(getBarPolarStack())
    })

    return {
      elRef,
    }
  }
}
</script>

<style scoped>

</style>