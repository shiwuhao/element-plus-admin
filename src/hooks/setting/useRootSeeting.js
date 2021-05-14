import {computed, unref} from 'vue'
import {useStore} from 'vuex';


export function useRootSetting() {

  const {dispatch, getters} = useStore();
  const getProjectConfig = computed(() => getters.getProjectConfig);

  const getDarkMode = computed(() => getters.getProjectConfig.darkMode);
  const getShowLogo = computed(() => getters.getProjectConfig.showLogo);
  const getShowBreadcrumb = computed(() => getters.getProjectConfig.showBreadcrumb);
  const getShowSettingDrawer = computed(() => getters.getProjectConfig.showSettingDrawer);


  /**
   * 项目设置
   * @param rootSetting
   */
  async function setRootSetting(rootSetting) {
    await dispatch('app/setProjectConfig', rootSetting);
  }

  /**
   * 开关logo
   * @returns {Promise<void>}
   */
  async function toggleLogo() {
    await setRootSetting({showLogo: !unref(getShowLogo)});
  }

  /**
   * 开关面包屑导航
   * @returns {Promise<void>}
   */
  async function toggleBreadcrumb() {
    await setRootSetting({showBreadcrumb: !unref(getShowBreadcrumb)});
  }

  /**
   * 开启设置抽屉
   * @returns {Promise<void>}
   */
  async function openSettingDrawer() {
    await setRootSetting({showSettingDrawer: true});
  }

  /**
   * 关闭设置抽屉
   * @returns {Promise<void>}
   */
  async function closedSettingDrawer() {
    await setRootSetting({showSettingDrawer: false});
  }

  /**
   * 切换导航栏模式
   * @param mode top-menu,side-menu,mix-menu
   * @returns {Promise<void>}
   */
  async function toggleNavMode(mode) {
    await setRootSetting({showSettingDrawer: false});
  }


  return {
    setRootSetting,
    toggleLogo,
    toggleBreadcrumb,
    openSettingDrawer,
    closedSettingDrawer,
    toggleNavMode,
    getDarkMode,
    getShowLogo,
    getShowBreadcrumb,
    getShowSettingDrawer,
  };
}