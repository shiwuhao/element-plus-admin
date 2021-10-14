<template>
  <el-row>
    <el-col :xl="16" :lg="16" :md="16" :sm="24" :xs="24">
      <div ref="elRef" style="height: 380px;width: 100%;"></div>
    </el-col>
    <el-col :xl="8" :lg="8" :md="8" :sm="24" :xs="24">
      <BasicTable :columns="rankColumn" :data="rankData" size="small"></BasicTable>
    </el-col>
  </el-row>
</template>
<script>
import {onMounted, shallowReactive, toRefs} from 'vue';
import {getVisitData, rankColumn, rankData} from '../data.js';
import {BasicCard} from "@/components/Card";
import {BasicTable} from "@/components/Table";
import {useECharts} from "@/composables/useECharts";

export default {
  name: "Sale",
  components: {BasicCard, BasicTable,},
  setup() {
    const state = shallowReactive({
      rankData: rankData(),
      rankColumn: rankColumn()
    })

    const {elRef, setOptions} = useECharts();

    onMounted(() => {
      setOptions(getVisitData())
    })

    return {
      elRef,
      ...toRefs(state),
    }
  }
}
</script>