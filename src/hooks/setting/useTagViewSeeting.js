import {computed, unref} from 'vue'
import store from "@/store";

/**
 * 标签视图
 * @returns {{setTagViewSetting: (function(*): Promise<void>), getEnable: ComputedRef<*>}}
 */
export function useTagViewSetting() {

  const {dispatch, getters} = store;
  const getTagViewSetting = computed(() => getters.getTagViewSetting);
  const getEnableTagView = computed(() => unref(getTagViewSetting).enable);

  async function setTagViewSetting(options) {
    const tagViewSetting = {...unref(getTagViewSetting), ...options};
    await dispatch('app/setProjectConfig', {tagViewSetting});
  }

  async function toggleEnableTagView() {
    await setTagViewSetting({enable: !unref(getEnableTagView)})
  }

  return {
    getEnableTagView,
    toggleEnableTagView,
  };
}