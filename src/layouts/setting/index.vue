<template>
  <div class="flex-col center" @click="openSettingDrawer">
    <icon name="el-setting" size="18"/>
    <SettingDrawer/>
  </div>
</template>
<script>
import SettingDrawer from "@/layouts/setting/components/SettingDrawer.vue";
import {useRootSetting} from "@/composables/setting/useRootSeeting.js";

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