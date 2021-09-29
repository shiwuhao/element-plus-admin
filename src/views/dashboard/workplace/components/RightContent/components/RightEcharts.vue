<template>
  <Card
    :cardName="cardName"
  >
    <template #text-custom>
      <Echarts
        :chartData="chartData"
        :height="height"
        ref="echarts"
        :id="id"
        :title="title"/>
    </template>
  </Card>
</template>
<script>
import {defineComponent, nextTick, onMounted, reactive, ref} from 'vue';
import {Card} from '@/components/Card';
import {Echarts} from '@/components/Echarts';
export default defineComponent({
  components: {Card,Echarts},
  setup() {
    const echarts = ref(null);
    const chartData = reactive({
      legend: {
        data: ['Allocated Budget', 'Actual Spending']
      },
      radar: {
        indicator: [
          { name: 'Sales', max: 6500 },
          { name: 'Administration', max: 16000 },
          { name: 'Information Technology', max: 30000 },
          { name: 'Customer Support', max: 38000 },
          { name: 'Development', max: 52000 },
          { name: 'Marketing', max: 25000 }
        ]
      },
      series: [{
        type: 'radar',
        data: [
          {
            value: [4200, 3000, 20000, 35000, 50000, 18000],
            name: 'Allocated Budget'
          },
          {
            value: [5000, 14000, 28000, 26000, 42000, 21000],
            name: 'Actual Spending'
          }
        ]
      }]
    })
    onMounted(() => {
      echarts.value.initChart()
    })
    return {
      echarts,
      chartData,
      cardName: ref('雷达图指数'),
      id: ref('workplace-echarts'),
      height: ref('500px')
    }
  }
})
</script>