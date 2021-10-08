<template>
  <Card :cardName="cardName">
    <template #text-custom>
      <Echarts :id="id" :chartData="chartData" ref="echarts" :height="height"/>
    </template>
  </Card>
</template>
<script>
import {defineComponent, onMounted, reactive, ref} from 'vue';
import {Card} from '@/components/Card';
import {Echarts} from '@/components/Echarts';
import {monitorCategory} from '@/views/dashboard/monitor/data';
import "echarts/lib/component/polar";
export default defineComponent({
  components: {Card, Echarts},
  setup() {
    const echarts = ref(null);
    const Pie = () => {
      let dataArr = [];

    }
    const chartData = reactive({
      title: [{
        text: '75.0%',
        x: '50%',
        y: '43%',
        textAlign: 'center',
        textStyle: {
          fontSize: '40',
          fontWeight: '500',
          color: '#98b5d2',
          textAlign: 'center',
        },
      }, {
        text: 'DESIGN ELEMENTS',
        left: '50%',
        top: '52%',
        textAlign: 'center',
        textStyle: {
          fontSize: '18',
          fontWeight: '400',
          color: '#5c5a68',
          textAlign: 'center',
        },
      }, ],
      angleAxis: {
        max: 100,
        clockwise: false,
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
        splitLine: {
          show: false
        }
      },
      radiusAxis: {
        type: 'category',
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
        splitLine: {
          show: false
        }
      },
      series: [
        {
          type: 'bar',
          startAngle: 100,
          clockwise: false,
          data: [{
            name: 'Total Downloads',
            value: 65,
            itemStyle: {
              normal: {
                color: 'rgba(251, 46, 99, 1)',
              }
            },
          }],
          coordinateSystem: 'polar',
          roundCap: true,
          barWidth: 15,
          barGap: '-100%',
          z: 20,
        },
        {
          type: 'bar',
          data: [{
            value: 100,
            itemStyle: {
              color: '#223042',
              shadowColor: 'rgba(251, 46, 99, 0.1)',
              shadowBlur: 10,
            }
          }],
          coordinateSystem: 'polar',
          roundCap: true,
          barWidth: 15,
          barGap: '0%',
          z: 1
        },
        {
          name: '',
          z: 1,
          type: 'pie',
          cursor: 'default',
          radius: ['59.3%', '60%'],
          startAngle: 225,
          hoverAnimation: false,
          legendHoverLink: false,
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [{
            value: 100,
            itemStyle: {
              color: '#405b7f',
            }
          }, ]
        },
        {
          name: '',
          z: 100,
          type: 'pie',
          cursor: 'default',
          radius: ['51.5%', '53%'],
          startAngle: 225,
          hoverAnimation: false,
          legendHoverLink: false,
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [{
            value: 100,
            itemStyle: {
              color: 'rgba(121,157,209,.85)',
            }
          }, ]
        },
        {
          type: 'pie',
          zlevel: 0,
          silent: true,
          startAngle: -100,
          radius: ['60%', '61.5%'],
          z: 1,
          label: {
            normal: {
              show: false
            },
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          // data: Pie()
        },
      ]
    })
    onMounted(() => {
      echarts.value.initChart()
     // formatData(monitorCategory)
    })
    return {
      cardName: '各品类占比',
      id: 'monitor-category-echarts',
      chartData,
      echarts,
      monitorCategory,
     //formatData,
      //data,
      //color,
      height: ref('300px'),
      Pie
    }
  }
})
</script>