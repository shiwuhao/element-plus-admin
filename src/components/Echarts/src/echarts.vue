<template>
  <div :id="id" ref="echarts" :style="{width: '100%', height: '100%'}"></div>
</template>
<script>
import {defineComponent, computed, toRefs, watch, ref, reactive, onMounted, onUnmounted, nextTick} from 'vue';
import * as Echarts from 'echarts'
export default defineComponent({
  props: {
    id: {
      type: String
    },
    title: {
      type: Object  //标题
    },
    theme: {
      type: String // dom参数属性，传入theme字符串，theme暂时支持dark和light两种，默认light
    },
    width: String, // dom的宽度，默认600
    height: String, // dom的高度，默认400
    //图表必传参数
    chartData: {
      type: Object,
      required: true
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
    const {chartData, height, id, title} = toRefs(props);
    const echartsId = ref(null);
    const myChart = ref(null);
    const propTitle = ref('');
    switch (typeof title.value) {
      case 'string':
        propTitle.value = title.value;
        break;
      case 'object':
        propTitle.value  = title.value && title.value.text;
        break;
    }
    const option = reactive({
      title: {
        text:  propTitle.value,
      },
      tooltip: {
        // trigger: 'axis'
      },
      toolbox: {},
      legend: {
        show: false
      }
    });
    // 默认dom属性
    const baseDom = reactive({
      theme: 'light',
      renderer: 'canvas',
      opts: {
        width: 'auto',
        height: 'auto'
      }
    })

    const initChart = () => {
      nextTick(() => {
        echartsId.value = document.getElementById(id.value);
        myChart.value = Echarts.init(echartsId.value, baseDom.opts.theme, {
          width: baseDom.opts.width,
          height: baseDom.opts.height
        })
        Object.assign(option, chartData.value)
       // console.log(option)
        setTimeout(() => {
          myChart.value.setOption(option)
        }, 500)
      })
    }
    //watch里调用方法，需要把watch写在方法的下面
    watch(
      [() => height,],
      ([newHeight], [oldHeight]) => {
        baseDom.opts.height = newHeight;
      },
      {
        immediate: true,
        deep: true
      }
    );
    // const resizeChart = () => {
    //   myChart.value && myChart.value.resize()
    // }
    // onMounted(() => {
    //   //resize 改变图表尺寸，在容器大小发生改变时需要手动调用（因为侧边栏是可以收缩的，所以这里图表根据是否收缩来改变图表尺寸）
    // //  window.addEventListener('resize', resizeChart)
    // })
    // onUnmounted(() => {
    //   window.removeEventListener('resize', resizeChart)
    // })
    window.onresize = ()=> {
      myChart.value.resize()
    }
    return {
      initChart,
      //resizeChart,
      echartsId,
      baseDom,
      option,
      myChart,
      propTitle
    }
  }
})
</script>
