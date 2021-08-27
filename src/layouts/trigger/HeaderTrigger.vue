<template>
  <div class="container flex-col-center" @click="toggleCollapsed">
    <span :class="getDarkMode">
    <i :class="[getCollapsed ? 'el-icon-s-unfold' : 'el-icon-s-fold']"></i>
  </span>
  </div>
</template>

<script>
import {useMenuSetting} from '@/composables/setting/useMenuSeeting'

export default {
  name: "HeaderTrigger",
  setup() {
    const {getDarkMode, getCollapsed, toggleCollapsed} = useMenuSetting();
    return {
      getDarkMode,
      getCollapsed,
      toggleCollapsed
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  height: 49px;
  padding: 0 10px;
}
</style>
