<template>
  <div class="m10">
    <el-row :gutter="10">
      <el-col :span="6" v-for="item in growCardData" :key="item.id">
        <Card :card-name="item.title">
          <template #text-custom>
            <component :is="item.component"/>
          </template>
        </Card>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <AccessSales/>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <BottomContain/>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import {defineComponent} from 'vue';
import {Card} from '@/components/Card';
import {growCardData} from './data.js';
import LineChart from '@/views/component/echarts/components/LineChart';
import BarChart from '@/views/component/echarts/components/BarChart';
import ScatterChart from '@/views/component/echarts/components/ScatterChart';
import PieChart from '@/views/component/echarts/components/PieChart';
import AccessSales from "@/views/dashboard/analysis/components/AccessSales.vue";
import BottomContain from "@/views/dashboard/analysis/components/BottomContain.vue";
export default defineComponent({
  components: {Card,LineChart,BarChart,ScatterChart,PieChart,AccessSales,BottomContain},
  setup(){
    return {
      growCardData
    }
  }
})
</script>