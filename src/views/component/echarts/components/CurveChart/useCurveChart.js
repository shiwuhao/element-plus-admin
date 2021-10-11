import {onMounted, ref, shallowReactive, toRefs} from "vue";
export function useCurveChart(){
  const echarts = ref(null);
  const date = ['2000 - 10 - 4', '2000 - 10 - 5', '2000 - 10 - 6', '20000 - 10 - 7', '2000 - 10 - 8'];
  const data1 = [20, 10, 30, 20, 40];
  const data2 = [10, 20, 30, 40, 50];
  const data3 = [20, 30, 40, 10, 20];
  const colorList = ['#9E87FF', '#73DDFF', '#fe9a8b', '#F56948', '#9E87FF'];
  const state = shallowReactive(
    {
      id: 'id_' + new Date().getTime(),
      height: '300px',
      chartData: {
        xAxis: [
          {
            type: 'category',
            data: date,
            show: false,
            axisLine: {
              show: true,
              lineStyle: {
                color: '#DCE2E8',
              },
            },
            axisTick: {
              show: true,
            },
            axisLabel: {
              interval: 0,
              textStyle: {
                color: '#556677',
              },
              fontSize: 12,
              margin: 15,
            },
            axisPointer: {
              label: {
                padding: [0, 0, 10, 0],
                margin: 15,
                fontSize: 12,
                backgroundColor: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: '#fff', // 0% 处的颜色
                    },
                    {
                      // offset: 0.9,
                      offset: 0.86,
                      color: '#fff', // 0% 处的颜色
                    },
                    {
                      offset: 0.86,
                      color: '#33c0cd', // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#33c0cd', // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
              },
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: 'dashed',
              },
            },
            boundaryGap: false,
          },
        ],
        yAxis: [
          {
            type: 'value',
            name: '单位：元',
            show: false,
            axisTick: {
              show: false,
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#DCE2E8',
              },
            },
            axisLabel: {
              textStyle: {
                color: '#556677',
              },
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: 'dashed',
              },
            },
          },
        ],
        series: [
          {
            name: '预估净利润',
            type: 'line',
            data: data1,
            symbolSize: 1,
            symbol: 'circle',
            smooth: true,
            yAxisIndex: 0,
            showSymbol: false,
            emphasis: {
              focus: 'series',
            },
            lineStyle: {
              width: 5,
              shadowColor: 'rgba(158,135,255, 0.3)',
              shadowBlur: 10,
              shadowOffsetY: 20,
            },
            itemStyle: {
              normal: {
                color: colorList[0],
                borderColor: colorList[0],
              },
            },
            markPoint: {
              symbol: 'pin', //标记(气泡)的图形
              symbolSize: 50, //标记(气泡)的大小
              itemStyle: {
                // color: '#4587E7', //图形的颜色。
                borderColor: '#000', //图形的描边颜色。支持的颜色格式同 color，不支持回调函数。
                borderWidth: 0, //描边线宽。为 0 时无描边。
                borderType: 'solid', //柱条的描边类型，默认为实线，支持 ‘solid’, ‘dashed’, ‘dotted’。
              },
              data: [
                {type: 'max', name: '最大值'},
                {type: 'min', name: '最小值'},
              ],
            },
            markLine: {
              data: [{type: 'average', name: '平均值'}],
            },
          },
          {
            name: '实时均价',
            type: 'line',
            data: data2,
            symbolSize: 1,
            symbol: 'circle',
            smooth: true,
            yAxisIndex: 0,
            showSymbol: false,
            emphasis: {
              focus: 'series',
            },
            lineStyle: {
              width: 5,
              color: '#73DD39',
              shadowColor: 'rgba(115,221,255, 0.3)',
              shadowBlur: 10,
              shadowOffsetY: 20,
            },
            itemStyle: {
              normal: {
                color: colorList[1],
                borderColor: colorList[1],
              },
            },
            markPoint: {
              symbol: 'pin', //标记(气泡)的图形
              symbolSize: 50, //标记(气泡)的大小
              itemStyle: {
                color: '#4587E7', //图形的颜色。
                borderColor: '#000', //图形的描边颜色。支持的颜色格式同 color，不支持回调函数。
                borderWidth: 0, //描边线宽。为 0 时无描边。
                borderType: 'solid', //柱条的描边类型，默认为实线，支持 ‘solid’, ‘dashed’, ‘dotted’。
              },
              data: [
                {type: 'max', name: '最大值'},
                {type: 'min', name: '最小值'},
              ],
            },
            markLine: {
              data: [{type: 'average', name: '平均值'}],
            },
          },
          {
            name: '目标成本',
            type: 'line',
            data: data3,
            symbolSize: 1,
            yAxisIndex: 0,
            symbol: 'circle',
            smooth: true,
            showSymbol: false,
            emphasis: {
              focus: 'series',
            },
            lineStyle: {
              width: 5,
              color: 'fe9a',
              shadowColor: 'rgba(254,154,139, 0.3)',
              shadowBlur: 10,
              shadowOffsetY: 20,
            },
            itemStyle: {
              normal: {
                color: colorList[2],
                borderColor: colorList[2],
              },
            },
            markPoint: {
              symbol: 'pin', //标记(气泡)的图形
              symbolSize: 50, //标记(气泡)的大小
              itemStyle: {
                // color: '#4587E7', //图形的颜色。
                borderColor: '#000', //图形的描边颜色。支持的颜色格式同 color，不支持回调函数。
                borderWidth: 0, //描边线宽。为 0 时无描边。
                borderType: 'solid', //柱条的描边类型，默认为实线，支持 ‘solid’, ‘dashed’, ‘dotted’。
              },
              data: [
                {type: 'max', name: '最大值'},
                {type: 'min', name: '最小值'},
              ],
            },
            markLine: {
              data: [{type: 'average', name: '平均值'}],
            },
          },
        ],
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