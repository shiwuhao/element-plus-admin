import {computed, unref} from 'vue'
import store from "@/store";

/**
 * 菜单设置
 * @returns {{toggleCollapsed: toggleCollapsed, getCollapsed}}
 */
export function useMenuSetting() {

  const {dispatch, getters} = store;
  const getMenuSetting = computed(() => getters.getMenuSetting);
  const getCollapsed = computed(() => unref(getMenuSetting).collapse);
  const getMenuMode = computed(() => unref(getMenuSetting).mode);
  const getDarkMode = computed(() => getters.getDarkMode);

  /**
   * 菜单设置
   * @param options
   */
  async function setMenuSetting(options) {
    const menuSetting = {...getMenuSetting.value, ...options};
    await dispatch('app/setProjectConfig', {menuSetting});
  }

  /**
   * 菜单水平折叠收起
   */
  async function toggleCollapsed() {
    await setMenuSetting({collapse: !unref(getCollapsed)});
  }

  return {
    toggleCollapsed,
    setMenuSetting,
    getMenuSetting,
    getCollapsed,
    getDarkMode,
    getMenuMode,
  };
}