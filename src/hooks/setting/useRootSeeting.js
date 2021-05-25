import {computed, ref, unref, watchEffect} from 'vue'
import {useStore} from 'vuex';
import {useMenuSetting} from "@/hooks/setting/useMenuSeeting";
import {useWindowSize} from "@vueuse/core";


export function useRootSetting() {

  const {dispatch, getters} = useStore();
  const getProjectConfig = computed(() => getters.getProjectConfig);

  const getIsMobile = computed(() => {
    const {width} = useWindowSize();
    return width.value <= 992;
  });

  const getDarkMode = computed(() => getters.getProjectConfig.darkMode);
  const getShowLogo = computed(() => getters.getProjectConfig.showLogo);
  const getShowBreadcrumb = computed(() => getters.getProjectConfig.showBreadcrumb);
  const getShowSettingDrawer = computed(() => getters.getProjectConfig.showSettingDrawer);
  const getNavbarMode = computed(() => getters.getProjectConfig.navbarMode);
  const getIsSidebarMode = computed(() => getNavbarMode.value === 'sidebar');
  const getIsMixMode = computed(() => getNavbarMode.value === 'mix');
  const getIsTopMenuMode = computed(() => getNavbarMode.value === 'top-menu');
  const getShowHeaderLogo = computed(() => !getIsSidebarMode.value && getShowLogo.value);
  const getShowSidebarLogo = computed(() => getIsSidebarMode.value && getShowLogo.value);


  /**
   * 项目设置
   * @param rootSetting
   */
  async function setRootSetting(rootSetting) {
    await dispatch('app/setProjectConfig', rootSetting);
  }

  async function toggleHeaderFixed() {
    await setRootSetting({showLogo: !unref(getShowLogo)});
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
  async function toggleNavbarMode(mode) {
    const menuMode = mode === 'top-menu' ? 'horizontal' : 'vertical';
    await setRootSetting({navbarMode: mode});

    const {setMenuSetting} = useMenuSetting();
    await setMenuSetting({mode: menuMode});
  }


  return {
    setRootSetting,
    toggleLogo,
    toggleBreadcrumb,
    openSettingDrawer,
    closedSettingDrawer,
    toggleNavbarMode,
    getDarkMode,
    getNavbarMode,
    getShowLogo,
    getShowBreadcrumb,
    getShowSettingDrawer,
    getShowHeaderLogo,
    getShowSidebarLogo,
    getIsSidebarMode,
    getIsMixMode,
    getIsTopMenuMode,
    getIsMobile,
  };
}