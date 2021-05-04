<template>
  <div class="navbar">
    <div class="left" v-if="setting.layout === 'sideMenu'">
      <i class="collapse" :class="[sidebar.collapse ? 'el-icon-s-unfold' : 'el-icon-s-fold']" @click="toggleSideBar"/>
      <breadcrumb/>
    </div>
    <div class="right flex-row-justify" :class="[setting.layout === 'sideMenu' ? 'light' : 'dart']">
      <personal-avatar class="right-item"/>
      <setting-drawer class="right-item" ref="Setting"/>
    </div>
  </div>
</template>
<script>

import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import PersonalAvatar from "@/components/PersonalAvatar/PersonalAvatar";
import SettingDrawer from "@/components/SettingDrawer/SettingDrawer";

import {mapGetters} from 'vuex';

export default {
  name: 'NavBar',
  components: {SettingDrawer, Breadcrumb, PersonalAvatar},
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

  .right {
    &.light ::v-deep .right-item {
      :hover {
        background: #EBEEF5;
      }
    }

    &.dart ::v-deep .right-item {
      :hover {
        background: #606266;
      }
    }
  }
}
</style>