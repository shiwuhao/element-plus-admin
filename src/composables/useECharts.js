import echarts from "@/utils/lib/echarts";
import {nextTick, ref} from "vue";
import {tryOnUnmounted, useDebounceFn, useTimeoutFn} from "@vueuse/core";
import {useEventListener} from '@vueuse/core';


export function useECharts(chartRef = null, theme = 'light') {
  const elRef = chartRef ? chartRef : ref(null);
  let chartInstance = null;
  let resizeFn = useDebounceFn(() => {
    resize();
  }, 200);

  // 初始化
  const initCharts = (theme) => {
    const el = elRef.value;
    chartInstance = echarts.init(el, theme);
    useEventListener(window, 'resize', resizeFn);
  }

  // 获取实例
  const getInstance = () => {
    if (!chartInstance) {
      initCharts(theme);
    }
    return chartInstance;
  }

  // 设置配置项
  const setOptions = async (options) => {
    const el = elRef.value;
    if (el && el.offsetHeight === 0) {
      useTimeoutFn(() => {
        setOptions(options);
      }, 100);
      return;
    }

    await nextTick(() => {
      useTimeoutFn(() => {
        if (!chartInstance) {
          initCharts(theme);
        }
        chartInstance.setOption(options);
      }, 100)
    })
  }

  // 调整大小
  const resize = () => {
    chartInstance.resize();
  }

  tryOnUnmounted(() => {
    window.removeEventListener('resize', resizeFn, true);
    if (!chartInstance) return;
    chartInstance.dispose();
    chartInstance = null;
  })

  return {
    elRef,
    echarts,
    getInstance,
    setOptions,
    resize,
  }
}