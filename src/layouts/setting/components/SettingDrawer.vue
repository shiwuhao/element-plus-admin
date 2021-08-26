<template>
  <div class="container">
    <el-drawer
      :model-value="getShowSettingDrawer"
      direction="rtl"
      :size="260"
      :with-header="false"
      :show-close="false"
      :append-to-body="true"
      @closed="closedSettingDrawer"
    >
      <el-scrollbar height="100vh">
        <div class="drawer-container">
          <div class="setting-group">
            <h3 class="setting-title">导航栏模式</h3>
            <div class="flex-row-left">
              <template v-for="(item,index) in navbarModes" :key="index">
                <el-tooltip effect="dark" :content="item.title" placement="top-start">
                  <div class="setting-item" @click="toggleNavbarMode(item.type)">
                    <img :src="item.img"/>
                    <i class="el-icon-check" v-if="item.type === getNavbarMode"/>
                  </div>
                </el-tooltip>
              </template>
            </div>
          </div>
          <el-divider/>

          <div class="setting-group">
            <h3 class="setting-title">内容区域</h3>
            <div>
              <div class="drawer-item flex-row-center">
                <span>dark</span>
                <el-switch :model-value="dark" class="drawer-switch" @change="toggleDark"/>
              </div>
              <div class="drawer-item flex-row-center">
                <span>Tag视图</span>
                <el-switch :model-value="getEnableTagView" class="drawer-switch" @change="toggleEnableTagView"/>
              </div>

              <div class="drawer-item">
                <span>固定Header</span>
                <el-switch :model-value="getHeaderFixed" class="drawer-switch" @change="toggleHeaderFixed"/>
              </div>

              <div class="drawer-item">
                <span>侧边栏Logo</span>
                <el-switch :model-value="getShowLogo" class="drawer-switch" @change="toggleLogo"/>
              </div>
              <div class="drawer-item">
                <span>面包屑导航</span>
                <el-switch :model-value="getShowBreadcrumb" class="drawer-switch" @change="toggleBreadcrumb"/>
              </div>
            </div>
          </div>
          <div class="setting-group">
            <h3 class="setting-title">动画</h3>
            <div>
              <div class="drawer-item">
                <span>顶部进度条</span>
                <el-switch :model-value="getOpenNProgress" class="drawer-switch" @change="toggleOpenNProgress"/>
              </div>
              <div class="drawer-item">
                <span>切换Loading</span>
                <el-switch :model-value="getOpenPageLoading" class="drawer-switch" @change="toggleOpenPageLoading"/>
              </div>
              <div class="drawer-item">
                <span>切换动画</span>
                <el-switch :model-value="getEnableTransition" class="drawer-switch" @change="toggleEnableTransition"/>
              </div>
              <div class="drawer-item">
                <span>动画类型</span>
                <el-select :model-value="getBasicTransition" size="mini" style="width: 120px"
                           @change="setBasicTransition($event)">
                  <el-option v-for="item in getRouterTransitionOptions"
                             :key="item.value"
                             :label="item.label"
                             :value="item.value"></el-option>
                </el-select>
              </div>
            </div>
          </div>
        </div>
      </el-scrollbar>
    </el-drawer>
  </div>
</template>
<script>
import {useRootSetting} from "@/composables/setting/useRootSeeting";
import {useHeaderSetting} from "@/composables/setting/useHeaderSeeting";
import {useTransitionSetting} from "@/composables/setting/useTransitionSeeting";
import {useTagViewSetting} from "@/composables/setting/useTagViewSeeting";
import {useDark, useToggle} from '@vueuse/core'
import {routerTransitionOptions} from '@/enums/appEnum'
import {ref} from "vue";

export default {
  name: 'setting',
  props: ['theme'],
  data() {
    return {
      color1: '',
      selectedMenuTheme: 'dark',
      dark: '',
      navbarModes: [
        {
          mode: 'light',
          type: 'sidebar',
          title: '左侧菜单模式',
          img: 'https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg',
        },
        {
          mode: 'dark',
          type: 'mix',
          title: '顶部菜单混合模式',
          img: 'https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg',
        },
        {
          mode: 'other',
          type: 'top-menu',
          title: '顶部菜单模式',
          img: 'https://gw.alipayobjects.com/zos/antfincdn/hmKaLQvmY2/LCkqqYNmvBEbokSDscrm.svg',
        }
      ],

    }
  },
  setup() {
    const isDark = useDark()
    const toggleDark = useToggle(isDark)
    const {
      getShowLogo,
      getShowBreadcrumb,
      getShowSettingDrawer,
      getDarkMode,
      getNavbarMode,
      closedSettingDrawer,
      toggleLogo,
      toggleBreadcrumb,
      toggleNavbarMode,
    } = useRootSetting();

    const {getHeaderFixed, toggleHeaderFixed} = useHeaderSetting();
    const {
      getOpenNProgress,
      toggleOpenNProgress,
      getOpenPageLoading,
      toggleOpenPageLoading,
      getEnableTransition,
      toggleEnableTransition,
      setBasicTransition,
      getBasicTransition,
    } = useTransitionSetting();

    const {getEnableTagView, toggleEnableTagView} = useTagViewSetting();
    const getRouterTransitionOptions = ref(routerTransitionOptions);

    return {
      getShowLogo,
      getShowBreadcrumb,
      getShowSettingDrawer,
      getDarkMode,
      getNavbarMode,
      closedSettingDrawer,
      toggleLogo,
      toggleBreadcrumb,
      toggleNavbarMode,
      toggleDark,
      getHeaderFixed,
      toggleHeaderFixed,
      getOpenNProgress,
      toggleOpenNProgress,
      getOpenPageLoading,
      toggleOpenPageLoading,
      getEnableTransition,
      toggleEnableTransition,
      getEnableTagView,
      toggleEnableTagView,
      getRouterTransitionOptions,
      setBasicTransition,
      getBasicTransition
    }
  },
};
</script>
<style lang="scss" scoped>
.drawer-container {
  padding: 0 24px 24px 24px;
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;

  .setting-group {
    .setting-title {
      font-size: 14px;
      color: rgba(0, 0, 0, .85);
    }

    .setting-item {
      position: relative;
      margin-right: 16px;
      cursor: pointer;

      img {
        width: 48px;
      }

      i.el-icon-check {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -8px;
        margin-top: -8px;
        color: #1890ff;
        font-size: 16px;
        font-weight: bolder;
      }
    }

    .color-block {
      width: 20px;
      height: 20px;
      border-radius: 2px;
      float: left;
      cursor: pointer;
      margin-right: 8px;
      padding-left: 0px;
      padding-right: 0px;
      text-align: center;
      color: #fff;
      font-weight: 700;

      i.el-icon-check {
        font-size: 14px;
      }
    }
  }

  .drawer-item {
    color: rgba(0, 0, 0, .65);
    font-size: 14px;
    padding: 12px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

</style>