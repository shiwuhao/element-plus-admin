<template>
  <div class="navbar">
    <div class="left" v-if="setting.layout === 'sideMenu'">
      <i class="collapse" :class="[sidebar.collapse ? 'el-icon-s-unfold' : 'el-icon-s-fold']" @click="toggleSideBar"/>
      <breadcrumb/>
    </div>
    <div class="action flex-row-justify" :class="[setting.layout === 'sideMenu' ? 'light' : 'dart']">
      <Notify class="action-item" />
      <FullScreen class="action-item"/>
      <PersonalAvatar class="action-item"/>
      <SettingDrawer class="action-item" ref="Setting"/>
    </div>
  </div>
</template>
<script>

import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import PersonalAvatar from "@/components/PersonalAvatar/PersonalAvatar";
import SettingDrawer from "@/components/SettingDrawer/SettingDrawer";
import FullScreen from "@/components/Layout/FullScreen";
import Notify from "@/components/Layout/Notify";

import {mapGetters} from 'vuex';

export default {
  name: 'NavBar',
  components: {SettingDrawer, Breadcrumb, PersonalAvatar, FullScreen, Notify},
  computed: {
    ...mapGetters(['setting', 'sidebar']),
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    toggleSetting() {
      this.$refs['Setting'].toggleDrawer();
    }
  }
};
</script>
<style lang="scss" scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 1px 4px rgba(0, 21, 41, .08);

  .left {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .collapse {
      padding: 0 15px;
      cursor: pointer;
      font-size: 20px;
    }
  }

  .action {
    ::v-deep .action-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 1.2em;
      height: 50px;
      padding: 0 10px;
      cursor: pointer;

      &.fullscreen-action {
        //background: red;
      }
    }

    &.light ::v-deep .action-item:hover {
      background: #EBEEF5;
    }

    &.dart ::v-deep .action-item:hover {
      background: #606266;
    }
  }
}
</style>