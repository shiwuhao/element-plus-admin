<template>
  销售量
  <Echarts :chartData="chartData" :height="height" ref="echarts" :id="id"/>
</template>
<script>
import {defineComponent, onMounted, reactive, ref,nextTick} from 'vue';
import {Echarts} from '@/components/Echarts';
import {getRequest} from '@/libs/api';
export default defineComponent({
  components: {Echarts},
  setup(){
    const echarts = ref(null);
    onMounted(()=>{
      getRequest('/js/echarts.json').then(res => {
        formatEcharts(res.data.data)
      })
    })
    const chartData = reactive({
      xAxis: {
        type: 'category',
      },
      yAxis: {
        type: 'value',
      },
      series: [{
        type: 'bar',
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }]
    })
    const formatEcharts = (data) => {
      const lists = data.reduce((acc,value)=> {
        return {...acc, ...value}
      })
      const xAxisData = Object.keys(lists).filter(item=>item !== 'id')
      const seriesData = Object.values(lists).slice(1)
      chartData.xAxis.data = xAxisData
      chartData.series[0].data = seriesData
      nextTick(()=>{
        echarts.value.initChart()
      })
    }
    return {
      chartData,
      formatEcharts,
      height: ref('300px'),
      echarts,
      id: ref('access-echarts')
    }
  }
})
</script>