<template>
  <div>
    <side-menu-layout v-if="setting.layout === 'sideMenu'"/>
<!--    <top-menu-layout v-else/>-->
<!--    <SettingDrawer/>-->
  </div>
</template>
<script>

  import SideMenuLayout from "@/components/Layout/SideMenuLayout/SideMenuLayout";
  import TopMenuLayout from "@/components/Layout/TopMenuLayout/TopMenuLayout";
  // import SettingDrawer from "@/components/SettingDrawer/SettingDrawer";
  import {mapGetters} from 'vuex'

  export default {
    name: 'Layout',
    components: {
      SideMenuLayout,
      TopMenuLayout,
      // SettingDrawer

    },
    computed: {
      ...mapGetters(['setting']),
    }
  };
</script>
