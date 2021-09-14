<template>
  <Echarts :chartData="chartData" :height="height"/>
</template>
<script>
import {defineComponent, onMounted, reactive, ref} from 'vue';
import {Echarts} from '@/components/Echarts';
import {getRequest} from '@/libs/api';
export default defineComponent({
  components: {Echarts},
  setup(){
    //reactive包裹数组无法响应式解决办法3种
    //第一
    // const data = reactive({
    //   echartsData: {}
    // })
    //第二
    // const data = ref([])
    //第三
    // const arr = reactive([])
    // arr.push(...[1, 2, 3])
    const chartData = reactive({
      xAxis: {
        type: 'category',
      },
      yAxis: {
        type: 'value'
      },
      series: [{
          type: 'bar',
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          }
        }]
    })
    onMounted(()=>{
      getRequest('/js/echarts.json').then(res => {
         formatEcharts(res.data.data)
      })
    })
    const formatEcharts = (data) => {
      const lists = data.reduce((acc,value)=> {
        return {...acc, ...value}
      })
     const xAxisData = Object.keys(lists).filter(item => item !== 'id')
     const seriesData = Object.values(lists).slice(1)
      chartData.xAxis.data = xAxisData
      chartData.series[0].data = seriesData
    }
    console.log(chartData)
    return {
      chartData,
      formatEcharts,
      height: ref('300px')
    }
  }
})
</script>