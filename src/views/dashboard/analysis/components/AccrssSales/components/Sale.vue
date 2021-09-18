<template>
  <el-row :gutter="20">
    <el-col :span="18">
      <Echarts
        :chartData="chartData"
        :height="height"
        ref="echarts"
        :id="id"
        :title="title"
      />
    </el-col>
    <el-col :span="6" class="right-access">
      <h3>门店{{title.text}}排名</h3>
      <ul>
        <li v-for="(item,index) in shopData" :key="index">
          <span><i>{{ index + 1 }}</i>{{ item.title }}</span>
          <span>{{ item.num }}</span>
        </li>
      </ul>
    </el-col>
  </el-row>
</template>
<script>
import {defineComponent, onMounted, reactive, ref,nextTick} from 'vue';
import {Echarts} from '@/components/Echarts';
import {getRequest} from '@/libs/api';
import {shopData} from '../../../data';
export default defineComponent({
  components: {Echarts},
  setup(){
    const echarts = ref(null);
    onMounted(()=>{
      getRequest('/js/echarts.json').then(res => {
        formatEcharts(res.data.data)
      })
    })
    const chartData = reactive({
      xAxis: {
        type: 'category',
      },
      yAxis: {
        type: 'value',
      },
      series: [{
        type: 'bar',
        backgroundStyle: {
          color: '#1890ff'
        }
      }]
    })
    const formatEcharts = (data) => {
      const lists = data.reduce((acc,value)=> {
        return {...acc, ...value}
      })
      const xAxisData = Object.keys(lists).filter(item=>item !== 'id')
      const seriesData = Object.values(lists).slice(1)
      chartData.xAxis.data = xAxisData
      chartData.series[0].data = seriesData
      nextTick(()=>{
        echarts.value.initChart()
      })
    }
    return {
      shopData,
      chartData,
      formatEcharts,
      height: ref('300px'),
      echarts,
      id: ref('sale-echarts'),
      title: reactive({
        text: '销售量'
      })
    }
  }
})
</script>
<style lang="scss" scoped>
.right-access {
  ul {
    padding: 0;

    li {
      list-style: none;
      line-height: 42px;

      span {
        &:first-child {
          i {
            width: 20px;
            height: 20px;
            line-height: 20px;
            display: inline-block;
            background-color: #314659;
            border-radius: 50%;
            color: #fff;
            text-align: center;
            margin-right: 5px;
          }
        }

        &:last-child {
          float: right;
        }
      }
    }
  }
}
</style>