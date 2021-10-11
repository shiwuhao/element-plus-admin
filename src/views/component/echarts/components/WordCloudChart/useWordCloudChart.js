import {onMounted, ref, shallowReactive, toRefs} from "vue";
import 'echarts-wordcloud';

export function useWordCloudChart() {
  const echarts = ref(null);
  const state = shallowReactive(
    {
      id: 'id_' + new Date().getTime(),
      height: '300px',
      chartData: {
        series: [{
          type: 'wordCloud',
          gridSize: 2,
          sizeRange: [12, 50],
          rotationRange: [-90, 90],
          shape: 'pentagon',
          width: 600,
          height: 400,
          drawOutOfBound: true,
          textStyle: {
            color: function () {
              return 'rgb(' + [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160)
              ].join(',') + ')';
            }
          },
          emphasis: {
            textStyle: {
              shadowBlur: 10,
              shadowColor: '#333'
            }
          },
          data: [
            {
              name: '疫情',
              value: 10000,
              textStyle: {
                color: 'black'
              },
              emphasis: {
                textStyle: {
                  color: 'red'
                }
              }
            },
            {
              name: '洪水',
              value: 6181
            },
            {
              name: '求援',
              value: 4386
            },
            {
              name: '抗美援朝',
              value: 4055
            },
            {
              name: '长津湖',
              value: 2467
            },
            {
              name: '我和我的父辈',
              value: 2244
            },
            {
              name: '我和我的家乡',
              value: 1898
            },
            {
              name: '我和我的祖国',
              value: 1484
            },
            {
              name: 'Express',
              value: 1112
            },
            {
              name: 'Home',
              value: 965
            },
            {
              name: 'Johnny Depp',
              value: 847
            },
            {
              name: 'Lena Dunham',
              value: 582
            },
            {
              name: 'Lewis Hamilton',
              value: 555
            },
            {
              name: 'KXAN',
              value: 550
            },
            {
              name: 'Mary Ellen Mark',
              value: 462
            },
            {
              name: 'Farrah Abraham',
              value: 366
            },
            {
              name: 'Rita Ora',
              value: 360
            },
            {
              name: 'Serena Williams',
              value: 282
            },
            {
              name: 'NCAA baseball tournament',
              value: 273
            },
            {
              name: 'Point Break',
              value: 265
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