<template>
  <el-container class="top-menu-layout" :class="mainContainerClass" style="height: 100vh;">
    <el-main class="container">
      <div class="header-container">
        <el-header class="header flex-row-justify" height="50px">
          <div class="flex-row-justify" style="width: 100%;padding: 0 0;">
            <div class="flex-row-left">
              <nav-menu mode="horizontal"/>
            </div>
            <div class="flex-row-right">
              <navbar/>
            </div>
          </div>
        </el-header>
        <el-header height="30px" style="padding: 0;" v-if="setting.tagView">
          <tag-view/>
        </el-header>
      </div>
      <el-main class="main-container">
        <route-view style="margin-top: 5px;"/>
      </el-main>
    </el-main>
  </el-container>
</template>
<script>
import PersonalAvatar from "@/components/PersonalAvatar/PersonalAvatar";
import SettingDrawer from "@/components/SettingDrawer/SettingDrawer";
import NavMenu from "@/components/NavMenu/NavMenu";
import Navbar from "@/components/Layout/Navbar";
import TagView from "@/components/TagView/TagView";
import RouteView from "@/components/Layout/RouteView";
import ResizeMixin from '@/components/Layout/mixin/ResizeHandler'
import {mapGetters} from 'vuex';

export default {
  name: 'TopMenuLayout',
  components: {
    NavMenu, TagView, RouteView, PersonalAvatar, SettingDrawer, Navbar
  },
  mixins: [ResizeMixin],
  computed: {
    ...mapGetters(['setting']),
    mainContainerClass() {
      return {
        'has-tag-view': this.setting.tagView,
        'fixed-header': this.setting.fixedHeader,
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@/styles/variables.scss";

.top-menu-layout {
  & .container {
    padding: 0;
  }

  & .main-container {
    padding: 0;
  }

  &.fixed-header {
    .header-container {
      background: white;
      padding: 0;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 9;
      width: 100%;
    }

    .main-container {
      padding: $navBarHeight 0 0 0;
    }

    &.has-tag-view .main-container {
      padding-top: $navBarTagViewHeight;
    }
  }

  .header {
    padding: 0;
    background: #2b2f3a;

    .logo {
      margin-left: 10px;
    }
  }
}
</style>