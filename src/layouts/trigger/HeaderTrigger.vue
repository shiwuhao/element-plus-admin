<template>
  <span @click="toggleCollapsed">
    <i :class="[getMenuSetting.collapse ? 'el-icon-s-unfold' : 'el-icon-s-fold']"></i>
  </span>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "HeaderTrigger",
  props: ['theme'],
  computed: {
    ...mapGetters(['getMenuSetting'])
  },
  methods: {
    toggleCollapsed() {
      const menuSetting = {...this.getMenuSetting, ...{collapse: !this.getMenuSetting.collapse}}
      this.$store.dispatch('app/setProjectConfig', {menuSetting})
    }
  }
}
</script>

<style scoped>

</style>