<template>
  <div class="dashboard-analysis-growCard m10">
    <el-row :gutter="20">
      <el-col  v-for="(item,index) in growCardData" :key="index" :span="getIsMobile?24:6">
        <Card
          :header="header"
          :cardName="item.title"
          :btnName="btnName"
          :headerType="headerType"
          :iconName="iconName"
          >
          <template #text-custom>
            <h2>{{ item.value }}</h2>
            <div>
              <component :is="item.component"/>
              <Echarts :chartData="echartsData.order" :height="height"/>
            </div>
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
import {Echarts} from '@/components/Echarts';
export default defineComponent({
  components: {Card,Echarts},
  setup() {
    const {getIsMobile} = useRootSetting();
     const echartsData = reactive({
       order: {
         xAxis: [
           {
             "show" : false,
             type: 'category',
             boundaryGap: false,
             // data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
           }
         ],
         yAxis: [
           {
             type: 'value',
             "show" : false,
           }
         ],
         series: [
           {
             type: 'bar',
             showSymbol: false,
             data: [140, 232, 101, 264, 90, 340, 250]
           },
         ]
       },
     })
    return {
      header: ref(true),
      btnName: ref('操作'),
      headerType: ref('icon'),
      iconName: ref('el-icon-warning-outline'),
      height: ref('200px'),
      growCardData,
      getIsMobile,
      echartsData,
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