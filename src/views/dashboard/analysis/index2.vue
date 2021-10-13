<template>
  <div class="m10">
    <el-row>
      <el-col><GrowCard /></el-col>
    </el-row>
    <el-row>
      <el-col>
        <VisitCard />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <ServerCard />
      </el-col>
      <el-col :span="12">
        <ServerCard />
      </el-col>
    </el-row>
  </div>
</template>

<script>

import GrowCard from './components/GrowCard'
import ServerCard from "./components/ServerCard";
import VisitCard from "./components/VisitCard";

export default {
  name: "index2",
  components: {GrowCard,VisitCard,ServerCard},
  setup() {


    return {

    }
  }
}
</script>

<style scoped>

</style>