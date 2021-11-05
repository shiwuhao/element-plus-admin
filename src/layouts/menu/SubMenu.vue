<template>
  <el-sub-menu :index="menu.path" v-if="menu.children && menu.children.length >= 1" popper-append-to-body>
    <template #title>
      <icon v-if="menu.icon" :name="menu.icon" :size="18" class="mr-1" />
      <span>{{ menu.title }}</span>
    </template>
    <template v-for="child in menu.children">
      <sub-menu v-if="child.children && child.children.length > 1" :menu="child" :key="child.path"/>
      <item-menu v-else :menu="child" :key="child.path"/>
    </template>
  </el-sub-menu>
  <item-menu v-else :menu="menu.children && menu.children.length === 1 ? menu.children[0] : menu"/>
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
      logo: import.meta.env.VITE_LOGO
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
<style lang="scss" scoped>
//.el-sub-menu__title i{
//  vertical-align: middle;
//  margin-right: 5px;
//  width: 24px;
//  text-align: center;
//  font-size: 18px;
//}
</style>