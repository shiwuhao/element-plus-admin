<template>
  <div class="m10">
    <el-row :gutter="20">
      <el-col :span="16">
        <Card card-name="多个饼图">
          <template #text-custom>
            <PieChart/>
          </template>
        </Card>
      </el-col>
      <el-col :span="8">
        <Card card-name="曲线图">
          <template #text-custom>
            <CurveChart/>
          </template>
        </Card>
        <Card card-name="仪表盘">
          <template #text-custom>
            <GaugeChart/>
          </template>
        </Card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6">
        <Card card-name="柱状图">
          <template #text-custom>
            <BarChart/>
          </template>
        </Card>
      </el-col>
      <el-col :span="8">
        <Card card-name="折线图">
          <template #text-custom>
              <LineChart/>
          </template>
        </Card>
      </el-col>
      <el-col :span="10">
        <Card card-name="散点图">
          <template #text-custom>
            <BubbleChart/>
          </template>
        </Card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import {defineComponent} from 'vue';
import BubbleChart from '@/views/demo/component/echarts/components/BubbleChart/index.vue';
import CurveChart from '@/views/demo/component/echarts/components/CurveChart/index.vue';
import GaugeChart from '@/views/demo/component/echarts/components/GaugeChart/index.vue';
import PieChart from '@/views/demo/component/echarts/components/MorePieChart/index.vue';
import BarChart from '@/views/demo/component/echarts/components/BarChart/index.vue';
import LineChart from '@/views/demo/component/echarts/components/LineChart/index.vue';
import {Card} from '@/components/Card';

export default defineComponent({
  components: {Card, BubbleChart, CurveChart, GaugeChart, PieChart,BarChart,LineChart},
  setup() {

    return {

    }
  }
})
</script>
<style lang="scss" scoped>
:deep(.el-card__header) {
  padding: 16px 20px !important;

  .card-header {
    span {
      font-size: 16px;
      font-weight: 500;
    }
  }
}

</style>