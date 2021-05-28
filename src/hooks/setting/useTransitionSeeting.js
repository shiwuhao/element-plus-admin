import {computed, unref} from 'vue'
import store from "@/store";

/**
 * 动画设置
 * @returns {{getOpenNProgress: ComputedRef<boolean|*>, toggleEnableTransition: (function(): Promise<void>), toggleOpenNProgress: (function(): Promise<void>), setBasicTransition: (function(*=): Promise<void>), toggleOpenPageLoading: (function(): Promise<void>), getEnableTransition: ComputedRef<*>, getBasicTransition: ComputedRef<string|string|*>}}
 */
export function useTransitionSetting() {

  const {dispatch, getters} = store;
  const getTransitionSetting = computed(() => getters.getTransitionSetting);
  const getEnableTransition = computed(() => unref(getTransitionSetting).enable);
  const getOpenNProgress = computed(() => unref(getTransitionSetting).openNProgress);
  const getOpenPageLoading = computed(() => unref(getTransitionSetting).openPageLoading);
  const getBasicTransition = computed(() => unref(getTransitionSetting).basicTransition);

  async function setTransitionSetting(options) {
    const transitionSetting = {...unref(getTransitionSetting), ...options};
    await dispatch('app/setProjectConfig', {transitionSetting});
  }

  async function setBasicTransition(name) {
    await setTransitionSetting({basicTransition: name});
  }

  async function toggleEnableTransition() {
    await setTransitionSetting({enable: !unref(getEnableTransition)});
  }

  async function toggleOpenNProgress() {
    await setTransitionSetting({openNProgress: !unref(getOpenNProgress)});
  }

  async function toggleOpenPageLoading() {
    await setTransitionSetting({openPageLoading: !unref(getOpenPageLoading)});
  }


  return {
    setBasicTransition,
    toggleEnableTransition,
    toggleOpenNProgress,
    toggleOpenPageLoading,
    getEnableTransition,
    getOpenNProgress,
    getOpenPageLoading,
    getBasicTransition,
  };
}