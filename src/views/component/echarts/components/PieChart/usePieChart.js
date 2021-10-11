import {onMounted, ref, shallowReactive, toRefs} from "vue";


export function usePieChart() {
  const echarts = ref(null);
  const state = shallowReactive(
    {
      id: 'id_' + new Date().getTime(),
      height: '300px',
      chartData: {
        series: [{
          type: 'pie',
          data: [
            {value: 1048, name: '搜索引擎'},
            {value: 735, name: '直接访问'},
            {value: 580, name: '邮件营销'},
            {value: 484, name: '联盟广告'},
            {value: 300, name: '视频广告'}
          ]
        }]
      }
    })

  onMounted(() => {
    echarts.value.initChart();
  })
  return {
    echarts,
    ...toRefs(state),
  }
}