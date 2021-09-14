<template>
  <div class="echarts-wrap" style="width: 100%;height: 100%">
    <div id="echarts" ref="echarts" :style="{width: '100%', height: '100%'}"></div>
  </div>
</template>
<script>
import {defineComponent, computed, toRefs, watch, ref, reactive, onMounted, onUnmounted} from 'vue';

let Echarts = require('echarts')
export default defineComponent({
  //接收父类两个数据 1、chartData (series数据 + x坐标系数据）2、isAxisChart （是否有x坐标系，如果false，那么上面的xData就为空）
  props: {
    title: {
      type: Object  //标题，可以只传入标题，其他属性使用默认值，也可自定义title属性，默认无标题
    },
    theme: {
      type: String // dom参数属性，传入theme字符串，theme暂时支持dark和light两种，默认light
    },
    width: String, // dom的宽度，默认600
    height: String, // dom的高度，默认400
    //图表必传参数
    chartData: {
      type: Object,
      default() {
        return {
          xAxis: [],
          yAxis: [],
          series: []
        }
      }
    },
    //图例
    legend: {
      type: Array,
    },
    //图表位置
    grid: {
      type: Object,
    },
    //滑过图表显示
    tooltip: {
      type: Object,
    }
  },
  setup(props, {emit}) {
    const {chartData, height} = toRefs(props);
    console.log(chartData.value)
    const echarts = ref(null);
    const dynamicData = reactive({});
    const baseTitle = reactive({
      text: '', // 主标题
      left: '', // 标题位置：left,center,right
      textStyle: {
        // 文字颜色
        color: '#000000',
        // 字体大小
        fontSize: 18
      }
    })
    const baseDom = reactive({
      theme: 'light',
      renderer: 'canvas',
      opts: {
        width: 'auto',
        height: 'auto'
      }
    })
    const options = computed(() => {
      dynamicData.value = chartData;
      return dynamicData.value
    })
    watch(
      ([height]), ([val, oldVal]) => {
        baseDom.opts.height = val;
      },
      {
        immediate: true,
        deep: true
      }
    );
    const initChart = () => {
      //获取echarts对象
      const myChart = Echarts.init(document.getElementById('echarts'), baseDom.theme, {
        width: baseDom.opts.width,
        height: baseDom.opts.height
      });
       myChart.setOption(options.value)
    }
    const resizeChart = () => {
      echarts.value ? echarts.value.resize() : ''
    }
    onMounted(() => {
      initChart()
      //resize 改变图表尺寸，在容器大小发生改变时需要手动调用（因为侧边栏是可以收缩的，所以这里图表根据是否收缩来改变图表尺寸）
      window.addEventListener('resize', resizeChart)
    })
    onUnmounted(() => {
      window.removeEventListener('resize', resizeChart)
    })
    return {
      initChart,
      resizeChart,
      options,
      baseTitle,
      baseDom,
      dynamicData
    }
  }
})
</script>
