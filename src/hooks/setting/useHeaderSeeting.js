import {computed, unref} from 'vue'
import {useStore} from 'vuex';

/**
 * headerSetting
 * @returns {any}
 */
export function useHeaderSetting() {

  const {dispatch, getters} = useStore();
  const getHeaderSetting = computed(() => getters.getHeaderSetting);
  const getHeaderFixed = computed(() => getters.getHeaderSetting.fixed);

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
    setHeaderSetting,
    toggleHeaderFixed,
  };
}