import {onMounted, ref, shallowReactive, toRefs} from "vue";
export function useGaugeChart(){
  const echarts = ref(null);
  const state = shallowReactive(
    {
      id: 'id_' + new Date().getTime(),
      height: '300px',
      chartData: {
        series: [
          {
            name: "Pressure",
            type: "gauge",
            progress: {
              show: true
            },
            detail: {
              valueAnimation: true,
              formatter: "{value}"
            },
            data: [
              {
                value: 50,
                name: "SCORE"
              }
            ]
          }
        ]
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