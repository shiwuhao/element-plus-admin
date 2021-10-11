import {onMounted, ref, shallowReactive, toRefs} from "vue";
import {monitorTrade} from "@/views/dashboard/monitor/data.js";
export function useBubbleChart(){
  const echarts = ref(null);
  const state = shallowReactive(
    {
      id: 'id_' + new Date().getTime(),
      height: '300px',
      chartData: {
        xAxis: {
          show: false,
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          }
        },
        yAxis: {
          show: false,
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          },
          scale: true
        },
        series: [
          {
            name: '1990',
            data: monitorTrade[0],
            type: 'scatter',
            symbolSize: function (data) {
              return Math.sqrt(data[2]) / 5e2;
            },
            emphasis: {
              focus: 'series',
              label: {
                show: true,
                formatter: function (param) {
                  return param.data[3];
                },
                position: 'top'
              }
            },
            itemStyle: {
              shadowBlur: 10,
              shadowColor: 'rgba(120, 36, 50, 0.5)',
              shadowOffsetY: 5,
              color: 'rgb(251, 118, 123)'
            }
          },
          {
            name: '2015',
            data: monitorTrade[1],
            type: 'scatter',
            symbolSize: function (data) {
              return Math.sqrt(data[2]) / 5e2;
            },
            emphasis: {
              focus: 'series',
              label: {
                show: true,
                formatter: function (param) {
                  return param.data[3];
                },
                position: 'top'
              }
            },
            itemStyle: {
              shadowBlur: 10,
              shadowColor: 'rgba(25, 100, 150, 0.5)',
              shadowOffsetY: 5,
              color: 'rgb(129, 227, 238)'
            }
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