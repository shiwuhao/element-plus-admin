<template>
  <Card :cardName="cardName">
    <template #text-custom>
      <Echarts ref="echarts" :id="id" :height="height" :chartData="chartData"/>
    </template>
  </Card>
</template>
<script>
import {defineComponent, ref, reactive, onMounted} from 'vue';
import {Card} from '@/components/Card';
import {Echarts} from '@/components/Echarts';
import 'echarts-liquidfill';
export default defineComponent({
  components: {Card, Echarts},
  setup() {
    const echarts = ref(null);
    const value = ref(0.54);
    const chartData = reactive({
      series: [{
        type: 'liquidFill',
        data: [0.4],
        outline: {
          show: false
        },
        backgroundStyle: {
          borderColor: '#409eff',
          borderWidth: 1,
          shadowColor: 'rgba(0, 0, 0, 0.4)',
          shadowBlur: 20
        },
        label: {
          position: ['50%', '30%'],
          fontSize: 40,
          color: '#409eff'
        }
      }]

    })
    onMounted(() => {
      echarts.value.initChart();
    })
    return {
      cardName: '资源剩余',
      id: 'monitor-resource-echarts',
      height: '260px',
      chartData,
      echarts,
      value
    }
  }
})
</script>