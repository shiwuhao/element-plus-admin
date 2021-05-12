<template>
  <div :class="theme" class="header-container flex-row-justify">
    <!-- left start-->
    <div class="header-left flex-row-left">
      <Logo :theme="theme"/>
      <HeaderTrigger :theme="theme"/>
      <Breadcrumb :theme="theme"/>
    </div>
    <!-- left end-->

    <!--  menu start  -->
    <div class="header-menu">
      <!--      <LayoutMenu />-->
    </div>
    <!--  menu end  -->

    <!--  right start  -->
    <div class="header-right flex-row-right">
      <Notify :theme="theme" class="action-item"/>
      <FullScreen :theme="theme" class="action-item"/>
      <UserDropdown :theme="theme" class="action-item"/>
      <SettingDrawer :theme="theme" class="action-item "/>
    </div>
    <!--  right end  -->

  </div>
</template>

<script>
import Logo from "@/layouts/header/components/Logo";
import Notify from "@/layouts/header/components/Notify";
import FullScreen from "@/layouts/header/components/FullScreen";
import UserDropdown from "@/layouts/header/components/UserDropdown";
import Breadcrumb from "@/layouts/header/components/Breadcrumb";
import SettingDrawer from "@/layouts/header/components/SettingDrawer";
import LayoutMenu from '@/layouts/menu/index';
import HeaderTrigger from "@/layouts/trigger/HeaderTrigger";

export default {
  name: "LayoutHeader",
  components: {Logo, Notify, FullScreen, UserDropdown, Breadcrumb, LayoutMenu, SettingDrawer, HeaderTrigger},
  data() {
    return {
      theme: 'light',
    };
  },
}
</script>

<style lang="scss" scoped>
.header-container {
  width: 100%;
  height: 49px;
  padding: 0 0;
  border-bottom: 1px solid #E4E7ED;

  .header-right .action-item {
    cursor: pointer;
  }

  &.dart ::v-deep {
    color: white !important;
    font-weight: bold;
    background: #000000;

    .header-right .action-item:hover {
      background: #606266;
    }
  }

  &.light {
    color: #303133;
    background: white;

    .header-right .action-item:hover {
      background: #F2F6FC;
    }
  }
}
</style>