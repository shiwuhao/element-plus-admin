<template>
  <Card :cardName="cardName" class="monitor-trade">
    <template #text-custom>
      <el-row>
        <el-col :span="3" v-for="(item,index) in tradeData" :key="index">
          <p class="monitor-trade-title">{{ item.title }}</p>
          <p class="monitor-trade-content">{{ item.value }}</p>
        </el-col>
        <el-col>
          <Echarts :chartData="chartData" :id="id" ref="echarts" :height="height"/>
        </el-col>
      </el-row>
    </template>
  </Card>
</template>
<script>
import {defineComponent, onMounted, reactive, ref} from 'vue';
import {Card} from '@/components/Card';
import {tradeData} from '@/views/dashboard/monitor/data';
import {Echarts} from '@/components/Echarts';
import {monitorTrade} from "@/views/dashboard/monitor/data";
export default defineComponent({
  components: {Card, Echarts},
  setup() {
    const echarts = ref(null);
    const data = ref([]);
    onMounted(() => {
      echarts.value.initChart()
    })
    const chartData = reactive({
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
    })
    return {
      cardName: '活动实时交易情况',
      tradeData,
      echarts,
      chartData,
      id: 'monitor-trade-echarts',
      monitorTrade,
      height: '450px'
    }
  }
})
</script>
<style lang="scss" scoped>
.monitor-trade {
  ::v-deep .el-row {
    justify-content: space-around;
    text-align: center;
    .monitor-trade-title {
      font-size: $font-size-small;
      color: $color-text-gray;
    }
    .monitor-trade-content {
      font-size: $font-size-middle;
      color: $color-text-black;
    }
  }
}
</style>