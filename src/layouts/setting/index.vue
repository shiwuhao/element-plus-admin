<template>
  <div class="container" @click="openSettingDrawer">
    <div class="icon-setting-wrap flex-col-center">
      <i class="el-icon-setting"></i>
    </div>
    <SettingDrawer/>
  </div>
</template>
<script>
import SettingDrawer from "@/layouts/setting/components/SettingDrawer";
import {useRootSetting} from "@/hooks/setting/useRootSeeting";

export default {
  name: 'setting',
  components: {
    SettingDrawer
  },
  setup() {
    const {openSettingDrawer} = useRootSetting();
    return {
      openSettingDrawer,
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  .icon-setting-wrap {
    height: 49px;
    padding: 0 10px;

    &.dart i {
      font-weight: bold;
    }
  }
}

</style>