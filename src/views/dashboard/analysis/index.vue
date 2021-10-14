<template>
  <div class="m10">
    <el-row class="mb10">
      <el-col>
        <GrowCard/>
      </el-col>
    </el-row>
    <el-row class="mb10">
      <el-col>
        <VisitCard/>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="8">
        <AreaStackGradientChart/>
      </el-col>
      <el-col :span="8">
        <BarPolarStackChart/>
      </el-col>
      <el-col :span="8">
        <FunnelChart/>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import GrowCard from './components/GrowCard'
import VisitCard from "./components/VisitCard";
import AreaStackGradientChart from "./components/AreaStackGradientChart";
import BarPolarStackChart from "./components/BarPolarStackChart";
import FunnelChart from "./components/FunnelChart";

export default {
  name: "index2",
  components: {GrowCard, VisitCard, AreaStackGradientChart, BarPolarStackChart, FunnelChart},
  setup() {


    return {}
  }
}
</script>

<style scoped>

</style>