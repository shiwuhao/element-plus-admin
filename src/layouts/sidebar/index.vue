<template>
  <el-drawer
    custom-class="drawer-menu"
    v-if="getIsMobile"
    :model-value="!getCollapsed"
    :size="219"
    :with-header="false"
    :destroy-on-close="true"
    direction="ltr"
    @closed="setMenuSetting({collapse: true})">
    <LayoutMenu/>
  </el-drawer>
  <LayoutMenu v-else/>
</template>

<script>
import LayoutMenu from '@/layouts/menu/index'
import {useRootSetting} from "@/composables/setting/useRootSeeting";
import {useMenuSetting} from "@/composables/setting/useMenuSeeting";
import {watch} from "vue";

export default {
  name: "LayoutSidebar",
  components: {LayoutMenu},
  setup() {
    const {getIsMobile} = useRootSetting();
    const {getCollapsed, setMenuSetting} = useMenuSetting();

    watch(getIsMobile, (val) => {
      setMenuSetting({collapse: val})
    })

    return {
      getIsMobile,
      getCollapsed,
      setMenuSetting,
    }
  },
}
</script>

<style>
.drawer-menu .el-drawer__body {
  padding: 0 !important;
}
</style>