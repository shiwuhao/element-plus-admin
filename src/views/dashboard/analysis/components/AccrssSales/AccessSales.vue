<template>
  <el-card shadow="always" class="m10">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane :label="item.label" :name="item.name" v-for="item in accessSaleData" :key="item.id">
        <component :is="item.component" ref="accessSales"></component>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>
<script>
import {defineComponent, nextTick, reactive, ref} from 'vue';
import Access from './components/Access';
import Sale from './components/Sale';

export default defineComponent({
  components: {Access, Sale},
  setup() {
    const activeName = ref('first');
    const accessSales = ref(null);
    const accessSaleData = reactive([
      {
        id: 1,
        label: '访问量',
        name: 'first',
        component: 'Access'
      },
      {
        id: 2,
        label: '销售量',
        name: 'second',
        component: 'Sale'
      }
    ])
    const handleClick = () => {
      //切换tab销毁echarts实例，新生成的echarts无法自适应宽度，销毁之后再次初始化
      accessSales.value.echarts.myChart.dispose()
      accessSales.value.echarts.initChart()
    }
    return {
      accessSaleData,
      activeName,
      handleClick,
      accessSales
    }
  }
})
</script>