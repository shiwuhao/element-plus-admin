<template>
  <Card :cardName="cardName"  class="m10" :headerType="headerType">
    <template #header-custom>
      <el-button
        v-for="item in saleCategory"
        :key="item.name"
        @click="changeChannel(item.component,item.name)"
        plain
        :class="{active: activeName == item.name}"
      >
        {{ item.label }}
      </el-button>
    </template>
    <template #text-custom>
      <component :is="currentTabComponent"></component>
    </template>
  </Card>
</template>
<script>
import {defineComponent, ref} from 'vue'
import {Card} from '@/components/Card';
import {saleCategory} from "../data.js";
import LiquidFillChart from '@/views/component/echarts/components/LiquidFillChart';
import RadarChart from '@/views/component/echarts/components/RadarChart';
import PieChart from '@/views/component/echarts/components/PieChart';
export default defineComponent({
  components: {Card, LiquidFillChart, RadarChart, PieChart},
  setup() {
    const currentTabComponent = ref('LiquidFillChart');
    const activeName = ref('first');
    const changeChannel = (component,name) => {
      currentTabComponent.value = component;
      activeName.value = name
    }
    return {
      cardName: ref('销售额类别占比'),
      headerType: ref('custom'),
      saleCategory,
      changeChannel,
      currentTabComponent,
      activeName
    }
  }
})
</script>
<style lang="scss" scoped>
::v-deep .card-header-custom {
  .el-button {
    margin-left: 0;
    margin-right: 5px;
    span {
      font-size: 14px;
      font-weight: 400;
      color: inherit;
    }
  }
  .active {
    border-color: $btn-color-blue;
    span {
      color: $btn-color-blue;
    }
  }
}

</style>