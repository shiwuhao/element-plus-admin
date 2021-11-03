<template>
  <el-menu-item class="container" index="/" :route="{path:'/',title:'首页'}">
    <img :src="logo ? logo : '/src/assets/logo.png'" class="sidebar-logo">
    <template #title>
      <span class="sidebar-title">{{ title }} </span>
    </template>
  </el-menu-item>
</template>

<script>
import {useGlobalSetting} from "@/composables/setting/useGlobalSeeting";

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
  .el-menu-item *{
    vertical-align: middle;
  }

  .sidebar-logo {
    width: 30px;
    height: 30px;
    position: relative;
    left: -3px;
  }

  .sidebar-title {
    font-size: 15px;
    font-weight: bold;
    color: white;
    padding-left: 5px;
    margin: 0;
  }
}
</style>
