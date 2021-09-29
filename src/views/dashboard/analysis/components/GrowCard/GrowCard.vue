<template>
  <div class="dashboard-analysis-growCard m10">
    <el-row :gutter="20">
      <el-col  v-for="(item,index) in growCardData" :key="index" :span="getIsMobile?24:6">
        <Card
          :cardName="item.title"
          :btnName="btnName"
          :headerType="headerType"
          :iconName="iconName"
          >
          <template #text-custom>
            <h2>{{ item.value }}</h2>
            <component :is="item.component"/>
            <el-divider></el-divider>
            <p><span class="subTitle">{{ item.subTitle }}</span><span>{{ item.total }}</span></p>
          </template>
        </Card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import {defineComponent, reactive, ref} from 'vue';
import {Card} from '@/components/Card';
import {growCardData} from "@/views/dashboard/analysis/data";
import {useRootSetting} from "@/composables/setting/useRootSeeting";
import ScatterChart from './components/ScatterChart';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
export default defineComponent({
  components: {Card,ScatterChart,LineChart,BarChart,PieChart},
  setup() {
    const {getIsMobile} = useRootSetting();
    return {
      btnName: ref('操作'),
      headerType: ref('icon'),
      iconName: ref('el-icon-warning-outline'),
      height: ref('200px'),
      growCardData,
      getIsMobile
    }
  }
})
</script>
<style lang="scss" scoped>
.dashboard-analysis-growCard {
  ::v-deep .card-header {
    span {
      color: $color-text-gray;
    }
  }
  h3,p {
    color: $color-text-black;
    font-size: $font-size-middle;
  }
  p {
    font-size: $font-size-small;
  }
 ::v-deep .text {
    margin-top: -28px;
   .subTitle {
     margin-right: 5px;
   }
  }
}
</style>