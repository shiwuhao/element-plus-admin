<template>
  <div class="flex-col center" @click="openSettingDrawer">
    <icon-svg name="setting" size="18"/>
    <SettingDrawer/>
  </div>
</template>
<script>
import SettingDrawer from "@/layouts/setting/components/SettingDrawer";
import {useRootSetting} from "@/composables/setting/useRootSeeting";

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