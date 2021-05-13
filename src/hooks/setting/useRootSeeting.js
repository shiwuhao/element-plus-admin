import {computed, unref} from 'vue'
import {useStore} from 'vuex';

/**
 * 菜单设置
 * @returns {{toggleCollapsed: toggleCollapsed, getCollapsed}}
 */
export function useRootSetting() {

  const {dispatch, getters} = useStore();
  const getMenuSetting = computed(() => getters.getMenuSetting);
  const getCollapsed = computed(() => unref(getMenuSetting).collapse);
  const getDarkMode = computed(() => getters.getDarkMode);

  /**
   * 菜单设置
   * @param menuSetting
   */
  async function setMenuSetting(menuSetting) {
    await dispatch('app/setProjectConfig', {menuSetting});
  }

  /**
   * 菜单水平折叠收起
   */
  async function toggleCollapsed() {
    await setMenuSetting({collapse: !unref(getCollapsed)});
  }

  return {
    setMenuSetting,
    toggleCollapsed,
    getMenuSetting,
    getCollapsed,
    getDarkMode,
  };
}