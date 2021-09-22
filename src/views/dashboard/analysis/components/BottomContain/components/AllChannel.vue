<template>
    <Echarts :chartData="chartData"  ref="echarts" :id="id" :height="height" :title="title"/>
</template>
<script>
import {defineComponent, onMounted, reactive, ref,nextTick} from 'vue';
import {Echarts} from '@/components/Echarts';
export default defineComponent({
  components: {Echarts},
  setup(){
    const echarts = ref(null);
    onMounted(()=>{
      nextTick(()=>{
        echarts.value.initChart()
      })
    })
    const chartData = reactive({
      series: [{
        type: 'pie',
        radius: ['40%', '70%'],
        data: [
          {value: 1048, name: '搜索引擎'},
          {value: 735, name: '直接访问'},
          {value: 580, name: '邮件营销'},
          {value: 484, name: '联盟广告'},
          {value: 300, name: '视频广告'}
        ]
      }]
    })
    return {
      chartData,
      echarts,
      id: ref('allChannel-echarts'),
      height: ref('200px'),
      title: ref('销售额')
    }
  }
})
</script>