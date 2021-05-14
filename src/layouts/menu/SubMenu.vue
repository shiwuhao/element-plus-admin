<template>
  <div class="sub-menu-wrapper">
    <el-submenu :index="menu.path" v-if="menu.children && menu.children.length > 1" popper-append-to-body>
      <template #title>
        <i :class="menu.meta.icon"/>
        <span>{{ menu.meta.title }}</span>
      </template>
      <template v-for="child in menu.children">
        <sub-menu v-if="child.children && child.children.length > 1" :menu="child" :key="child.path"/>
        <item-menu v-else :menu="child" :key="child.path"/>
      </template>
    </el-submenu>
    <item-menu v-else :menu="menu.children && menu.children.length === 1 ? menu.children[0] : menu"/>
  </div>
</template>
<script>

import ItemMenu from "@/layouts/menu/ItemMenu";

export default {
  name: 'SubMenu',
  components: {
    ItemMenu
  },
  data() {
    return {
      logo: process.env.VUE_APP_LOGO
    }
  },
  props: {
    menu: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: '',
    }
  },
};
</script>