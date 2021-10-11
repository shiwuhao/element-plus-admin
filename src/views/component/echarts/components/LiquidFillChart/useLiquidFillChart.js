import {onMounted, ref, shallowReactive, toRefs} from "vue";
import 'echarts-liquidfill';
export function useLiquidFillChart(){
  const echarts = ref(null);
  const state = shallowReactive(
    {
      id: 'id_' + new Date().getTime(),
      height: '300px',
      chartData: {
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