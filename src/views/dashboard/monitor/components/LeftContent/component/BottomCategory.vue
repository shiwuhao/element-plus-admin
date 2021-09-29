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

export default defineComponent({
  components: {Card, Echarts},
  setup() {
    const echarts = ref(null);
    const color = reactive({
      color: ['#2ca1ff', '#0adbfa', '#febe13', '#65e5dd', '#7b2cff', '#fd5151', '#f071ff', '#85f67a']
    })
    const data = reactive({
      data: []
    })
    const seriesOption = reactive({
      seriesOption: [{
        name: '',
        type: 'pie',
        clockWise: false,
        radius: [105, 109],
        width: 280,
        height: 252,
        hoverAnimation: false,
        center: ['50%', '55%'],
        left: "20%",
        top: "center",
        itemStyle: {
          normal: {
            label: {
              show: false
            }
          }
        },
        data: data.data
      }]
    })
    onMounted(() => {
      echarts.value.initChart()
      formatData(monitorCategory)
    })
    const formatData = (monitorCategory) => {
      monitorCategory.map((item, index) => {
        data.data.push({
            value: item.value,
            name: item.name,
            itemStyle: {
              normal: {
                borderWidth: 8,
                shadowBlur: 20,
                borderRadius: 20,
                borderColor: color[index],
                shadowColor: color[index]
              }
            }
          },
          {
            value: 8,
            name: '',
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                },
                color: 'rgba(0, 0, 0, 0)',
                borderColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 0
              }
            }
          }
        )
      })
    }
    const chartData = reactive({
      color: color.color,
      graphic: {
        elements: [{
          type: "image",
          z: 3,
          style: {
            width: 280,
            height: 252
          },
          left: '20%',
          top: 'center',
        }]
      },
      series: seriesOption.seriesOption
    })
    return {
      cardName: '各品类占比',
      id: 'monitor-category-echarts',
      chartData,
      echarts,
      monitorCategory,
      formatData,
      data,
      color,
      height: ref('300px')
    }
  }
})
</script>