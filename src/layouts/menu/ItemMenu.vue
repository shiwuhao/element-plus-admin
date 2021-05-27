<template>
  <div class="menu-item">
    <el-menu-item :index="menu.path" :route="menu">
      <i :class="menu.meta.icon"/>
      <template #title>{{ menu.meta.title }}</template>
    </el-menu-item>
  </div>
</template>

<script>
export default {
  name: 'ItemMenu',
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