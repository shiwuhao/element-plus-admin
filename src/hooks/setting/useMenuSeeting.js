import {computed, unref} from 'vue'
import {useStore} from 'vuex';

/**
 * 菜单设置
 * @returns {{toggleCollapsed: toggleCollapsed, getCollapsed}}
 */
export function useMenuSetting() {

  const {dispatch, getters} = useStore();
  const getMenuSetting = computed(() => getters.getMenuSetting);
  const getCollapsed = computed(() => getters.getMenuSetting.collapse);
  const getDarkMode = computed(() => getters.getDarkMode);
  const getMenuMode = computed(() => getters.getMenuSetting.mode);

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
    await setMenuSetting({...unref(getMenuSetting), collapse: !unref(getCollapsed)});
  }

  return {
    setMenuSetting,
    toggleCollapsed,
    getMenuSetting,
    getCollapsed,
    getDarkMode,
    getMenuMode,
  };
}