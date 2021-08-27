import {computed, unref} from 'vue'
import store from "@/store";

/**
 * headerSetting
 * @returns {any}
 */
export function useHeaderSetting() {

  const {dispatch, getters} = store;
  const getHeaderSetting = computed(() => getters.getHeaderSetting);
  const getHeaderFixed = computed(() => unref(getHeaderSetting).fixed);

  async function setHeaderSetting(options) {
    const headerSetting = {...getHeaderSetting.value, ...options};
    await dispatch('app/setProjectConfig', {headerSetting});
  }

  async function toggleHeaderFixed() {
    await setHeaderSetting({fixed: !unref(getHeaderFixed)});
  }

  return {
    getHeaderSetting,
    getHeaderFixed,
    toggleHeaderFixed,
  };
}