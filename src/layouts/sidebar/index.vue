<template>
  <el-drawer
    v-if="getIsMobile"
    :model-value="!getCollapsed"
    :size="200"
    :with-header="false"
    :destroy-on-close="true"
    direction="ltr"
    @closed="handleClose">
    <LayoutMenu/>
  </el-drawer>
  <LayoutMenu v-else/>
</template>

<script>
import LayoutMenu from '@/layouts/menu/index'
import {useRootSetting} from "@/composables/setting/useRootSeeting";
import {useMenuSetting} from "@/composables/setting/useMenuSeeting";

export default {
  name: "LayoutSidebar",
  components: {LayoutMenu},
  setup() {
    const {getIsMobile} = useRootSetting();
    const {getCollapsed, setMenuSetting} = useMenuSetting();

    function handleClose() {
      setMenuSetting({collapse: true})
    }

    return {
      getIsMobile,
      getCollapsed,
      handleClose,
    }
  },
}
</script>

<style scoped>

</style>