<template>
  <el-affix :offset="0" :position="getHeaderFixed ? 'top' : 'bottom' ">
    <div class="header-container flex-row-justify">
      <!-- left start-->
      <div class="header-left flex-row-left">
        <Logo v-if="getShowHeaderLogo && !getIsMobile" class="action-item"/>
        <HeaderTrigger v-if="!getIsTopMenuMode" class="action-item"/>
        <Breadcrumb v-if="!getIsTopMenuMode && getShowBreadcrumb && !getIsMobile"/>
      </div>
      <!-- left end-->

      <!--  menu start  -->
      <div class="header-menu" v-if="getIsTopMenuMode">
        <LayoutMenu/>
      </div>
      <!--  menu end  -->

      <!--  right start  -->
      <div class="header-right flex-row-right">
        <Notify class="action-item"/>
        <FullScreen class="action-item"/>
        <UserDropdown class="action-item"/>
        <Setting class="action-item"/>
      </div>
      <!--  right end  -->

    </div>
  </el-affix>
</template>

<script>
import Logo from "@/layouts/header/components/Logo";
import Notify from "@/layouts/header/components/Notify";
import FullScreen from "@/layouts/header/components/FullScreen";
import UserDropdown from "@/layouts/header/components/UserDropdown";
import Breadcrumb from "@/layouts/header/components/Breadcrumb";
import Setting from "@/layouts/setting/index";
import LayoutMenu from '@/layouts/menu/index';
import HeaderTrigger from "@/layouts/trigger/HeaderTrigger";
import {useRootSetting} from "@/hooks/setting/useRootSeeting";
import {useMenuSetting} from "@/hooks/setting/useMenuSeeting";
import {useHeaderSetting} from "@/hooks/setting/useHeaderSeeting";

export default {
  name: "header",
  components: {Logo, Notify, FullScreen, UserDropdown, Breadcrumb, LayoutMenu, Setting, HeaderTrigger},
  setup() {
    const {
      getDarkMode,
      getShowLogo,
      getShowBreadcrumb,
      getShowHeaderLogo,
      getIsTopMenuMode,
      getIsMobile
    } = useRootSetting();
    const {getMenuMode} = useMenuSetting();
    const {getHeaderFixed} = useHeaderSetting();
    return {
      getIsMobile,
      getDarkMode,
      getShowLogo,
      getShowBreadcrumb,
      getMenuMode,
      getShowHeaderLogo,
      getIsTopMenuMode,
      getHeaderFixed,
    }
  },
}
</script>

<style lang="scss" scoped>
.header-container {
  background: white;
  width: 100%;
  height: 49px;
  padding: 0 0;
  border-bottom: 1px solid #E4E7ED;
  color: #303133;

  .action-item:hover {
    background: #F2F6FC;
  }

  .header-menu {
    width: 100%;
  }

  .action-item {
    cursor: pointer;
  }
}
</style>