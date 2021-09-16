<template>
  折线图
  <Echarts :chartData="chartData"  ref="echarts" :id="id"/>
</template>
<script>
import {defineComponent, onMounted, reactive, ref, nextTick, watch} from 'vue';
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
    const echarts = ref(null);
    onMounted(()=>{
      getRequest('/js/echarts.json').then(res => {
        formatEcharts(res.data.data)
      })
    })
    const chartData = reactive({
      xAxis: {
        type: 'category',
        show: false
      },
      yAxis: {
        show: false,
        type: 'value'
      },
      series: [{
        type: 'line'
      }]
    })
    const formatEcharts = (data) => {
      chartData.xAxis.data = [];
      chartData.series[0].data = [];
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
    watch(
      // ([chartData]), ([val, oldVal]) => {
      //   nextTick(()=> {
      //     echarts.value.dispose()
      //   })
      // },
      // {
      //   immediate: true,
      //   deep: true
      // }
    );
    return {
      chartData,
      formatEcharts,
      echarts,
      id: ref('line-echarts')
    }
  }
})
</script>