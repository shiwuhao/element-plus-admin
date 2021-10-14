<template>
  <el-row>
    <el-col :span="16">
      <div ref="elRef" style="height: 380px;width: 100%;"></div>
    </el-col>
    <el-col :span="8">
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