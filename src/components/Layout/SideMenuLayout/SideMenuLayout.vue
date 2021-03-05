<template>
  <el-container class="app-container" :class="containerClass">
    <div v-if="device==='mobile' && !isCollapse" class="drawer-bg" @click="handleClickOutside"/>
    <el-aside width="auto" class="sidebar-container">
      <logo v-if="setting.sidebarLogo" :collapse="isCollapse"/>
      <nav-menu/>
    </el-aside>
    <el-container class="main-container" :class="mainContainerClass">
      <el-scrollbar style="width: 100%;">
        <div class="header-container">
          <el-header height="50" v-if="setting.navBar">
            <NavBar/>
          </el-header>
          <el-header height="30" v-if="setting.tagView">
            <tag-view/>
          </el-header>
        </div>
        <el-main class="main-wrapper">
          <RouteView/>
        </el-main>
      </el-scrollbar>
    </el-container>
  </el-container>
</template>
<script>
import Logo from "@/components/Logo/Logo";
import NavBar from "@/components/Layout/SideMenuLayout/NavBar";
import NavMenu from "@/components/NavMenu/NavMenu";
import TagView from "@/components/TagView/TagView";
import RouteView from "@/components/Layout/RouteView";
import ResizeMixin from '../mixin/ResizeHandler'
import {mapGetters} from 'vuex';

export default {
  name: 'SideMenuLayout',
  components: {
    NavBar, TagView, RouteView, NavMenu, Logo
  },
  mixins: [ResizeMixin],
  computed: {
    ...mapGetters([
      'device',
      'sidebar',
      'setting'
    ]),
    containerClass() {
      return {
        'mobile': this.device === 'mobile',
        'hide-sidebar': this.sidebar.collapse,
        'open-sidebar': !this.sidebar.collapse,
      }
    },
    mainContainerClass() {
      return {
        'has-tag-view': this.setting.tagView,
        'fixed-header': this.setting.fixedHeader,
      }
    },
    // 是否水平折叠收起菜单
    isCollapse() {
      return !!this.sidebar.collapse;
    }
  },
  date() {
    return {
      tagView: false,
      drawer: false,
    }
  },
  methods: {
    // 点击遮罩区域关闭sidebar
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar')
    },
    toggleSetting() {
      this.$refs['setting'].toggleDrawer();
    },
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
  }
};
</script>
<style lang="scss" scoped>
@import "~@/styles/variables.scss";

.app-container {
  height: 100vh;

  .el-header {
    width: 100%;
    padding: 0;
  }

  .el-main {
    padding: 0 10px;
  }

  &.mobile {
    .sidebar-container {
      position: absolute;
      height: 100vh;
      z-index: 101;
    }

    &.hide-sidebar {
      .sidebar-container {
        display: none;
      }
    }
  }

  .main-container.fixed-header {
    .header-container {
      padding: 0;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 9;
      width: 100%;
      transition: width 0.28s;
    }

    .el-main {
      padding-top: $navBarHeight;
    }

    &.has-tag-view .el-main {
      padding-top: $navBarTagViewHeight;
    }

    .main-wrapper {
      margin-top: 5px;
    }
  }
}

</style>