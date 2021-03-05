<template>
  <el-container class="top-menu-layout" style="min-height: 100vh;">
    <el-header class="header flex-row-justify" height="56px;">
      <div class="flex-row-justify" style="width: 100%;padding: 0 0px;">
        <div class="flex-row-left">
          <Logo class="logo" v-if="setting.sidebarLogo" :collapse="false"></Logo>
          <NavMenu mode="horizontal"/>
        </div>
        <div class="flex-row-right">
          <PersonalAvatar/>
          <div class="icon-setting-wrap flex-col-center" @click="toggleSetting">
            <i class="iconfont icon-more-vertical"/>
          </div>
        </div>
      </div>
    </el-header>
    <el-header height="30px" style="padding: 0;" v-if="setting.tagView">
      <TagView></TagView>
    </el-header>
    <el-main class="main">
      <RouteView/>
    </el-main>
  </el-container>
</template>
<script>
  import Logo from "@/components/Logo/Logo";
  import PersonalAvatar from "@/components/PersonalAvatar/PersonalAvatar";
  import SettingDrawer from "@/components/SettingDrawer/SettingDrawer";
  import NavMenu from "@/components/NavMenu/NavMenu";
  import TagView from "@/components/TagView/TagView";
  import RouteView from "@/components/Layout/RouteView";
  import ResizeMixin from '../mixin/ResizeHandler'
  import {mapGetters} from 'vuex';

  export default {
    name: 'TopMenuLayout',
    components: {
      NavMenu, TagView, RouteView, PersonalAvatar, SettingDrawer, Logo
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
          'hide-sidebar': this.sidebar.collapse,
          'open-sidebar': !this.sidebar.collapse,
          'mobile': this.device === 'mobile'
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
        this.$Setting.toggleDrawer();
      }
    }
  };
</script>
<style lang="scss" scoped>
  .header {
    padding: 0;
    background: #2b2f3a;

    .logo {
      margin-left: 10px;
    }
  }

  .main {
    padding: 5px 10px;
  }

  .fluid {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }
</style>