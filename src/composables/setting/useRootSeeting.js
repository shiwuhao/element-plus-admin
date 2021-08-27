import {computed, unref} from 'vue'
import store from "@/store";
import {useMenuSetting} from "@/composables/setting/useMenuSeeting";
import {useWindowSize} from "@vueuse/core";
import {useTagViewSetting} from "@/composables/setting/useTagViewSeeting";


export function useRootSetting() {

  const {dispatch, getters} = store;
  const getProjectConfig = computed(() => getters.getProjectConfig);
  const {getEnableTagView} = useTagViewSetting();

  const getIsMobile = computed(() => {
    const {width} = useWindowSize();
    return width.value <= 992;
  });

  // 主题模式
  const getDarkMode = computed(() => unref(getProjectConfig).darkMode);

  // 导航模式
  const getIsMixMode = computed(() => getNavbarMode.value === 'mix');
  const getIsSidebarMode = computed(() => getNavbarMode.value === 'sidebar');
  const getIsTopMenuMode = computed(() => getNavbarMode.value === 'top-menu');

  // 内容显示
  const getShowLogo = computed(() => unref(getProjectConfig).showLogo);
  const getShowBreadcrumb = computed(() => unref(getProjectConfig).showBreadcrumb && !unref(getIsMobile) && !unref(getIsTopMenuMode));
  const getShowSettingDrawer = computed(() => unref(getProjectConfig).showSettingDrawer);
  const getShowHeaderLogo = computed(() => !unref(getIsSidebarMode) && unref(getShowLogo) && !unref(getIsMobile));
  const getShowSidebarLogo = computed(() => getIsSidebarMode.value && getShowLogo.value);
  const getShowTagView = computed(() => unref(getEnableTagView) && (unref(getIsTopMenuMode) || unref(getIsSidebarMode)) && !unref(getIsMobile));
  const getShowHeaderTrigger = computed(() => !unref(getIsTopMenuMode));

  // 动画
  const getNavbarMode = computed(() => unref(getProjectConfig).navbarMode);
  const getPageLoading = computed(() => getters.getPageLoading);
  const getOpenKeepAlive = computed(() => unref(getProjectConfig).openKeepAlive);


  /**
   * 项目设置
   * @param rootSetting
   */
  async function setRootSetting(rootSetting) {
    await dispatch('app/setProjectConfig', rootSetting);
  }

  /**
   * toggle logo
   * @returns {Promise<void>}
   */
  async function toggleLogo() {
    await setRootSetting({showLogo: !unref(getShowLogo)});
  }

  /**
   * toggle breadcrumb
   * @returns {Promise<void>}
   */
  async function toggleBreadcrumb() {
    await setRootSetting({showBreadcrumb: !unref(getShowBreadcrumb)});
  }

  /**
   * open settingDrawer
   * @returns {Promise<void>}
   */
  async function openSettingDrawer() {
    await setRootSetting({showSettingDrawer: true});
  }

  /**
   * close settingDrawer
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
    toggleLogo,
    toggleBreadcrumb,
    toggleNavbarMode,
    openSettingDrawer,
    closedSettingDrawer,
    getDarkMode,
    getNavbarMode,
    getShowLogo,
    getShowBreadcrumb,
    getShowSettingDrawer,
    getShowHeaderLogo,
    getShowSidebarLogo,
    getShowTagView,
    getShowHeaderTrigger,
    getIsSidebarMode,
    getIsMixMode,
    getIsTopMenuMode,
    getIsMobile,
    getPageLoading,
    getOpenKeepAlive,
  };
}