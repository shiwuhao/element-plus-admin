<template>
  <div class="navBar">
    <div class="left">
      <i class="collapse" :class="[sidebar.collapse ? 'el-icon-s-unfold' : 'el-icon-s-fold']" @click="toggleSideBar"/>
      <Breadcrumb/>
    </div>
    <div class="right">
      <PersonalAvatar/>
      <SettingDrawer ref="setting"/>
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
      ...mapGetters(['sidebar']),
    },
    methods: {
      toggleSideBar() {
        this.$store.dispatch('app/toggleSideBar')
      },
    }
  };
</script>
<style lang="scss">
  .navBar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    overflow: hidden;
    position: relative;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, .08);

    .left {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      .collapse {
        padding: 0 15px;

        i {
          cursor: pointer;
          font-size: 20px;
        }
      }

      .breadcrumb {
      }
    }

    .right {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .setting {
        padding: 0 10px;
        cursor: pointer;
      }
    }
  }
</style>