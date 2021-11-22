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
    <el-scrollbar>
      <LayoutMenu/>
    </el-scrollbar>
  </el-drawer>
  <el-scrollbar v-else>
    <LayoutMenu/>
  </el-scrollbar>
</template>

<script>
import LayoutMenu from '@/layouts/menu/index.vue'
import {useRootSetting} from "@/composables/setting/useRootSeeting.js";
import {useMenuSetting} from "@/composables/setting/useMenuSeeting.js";
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

<style lang="scss" scoped>
:deep(.el-scrollbar__view) {
  height: 100%;
}

.drawer-menu .el-drawer__body {
  padding: 0 !important;
}
</style>