<template>
  <el-menu-item class="container" index="/">
    <img :src="logo" class="sidebar-logo">
    <template #title>
      <span class="sidebar-title">{{ title }} </span>
    </template>
  </el-menu-item>
</template>

<script>
import {useGlobalSetting} from "@/hooks/setting/useGlobalSeeting";

export default {
  name: 'sidebarLogo',
  setup() {
    const {title, logo} = useGlobalSetting();
    return {
      title,
      logo
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  height: 50px;
  line-height: 50px;
  padding-left: 10px !important;

  ::v-deep div {
    padding: 0 10px !important;
  }

  .sidebar-logo {
    width: 30px;
    height: 30px;
  }

  .sidebar-title {
    font-size: 15px;
    font-weight: bold;
    color: white;
    padding-left: 10px;
    margin: 0;
  }
}
</style>
