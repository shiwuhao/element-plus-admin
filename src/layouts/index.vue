<template>
  <component :is="componentId"></component>
</template>
<script>

import Layout1 from "@/layouts/Layout1";
import Layout2 from "@/layouts/Layout2";
import Layout3 from "@/layouts/Layout3";
import {useRootSetting} from "@/hooks/setting/useRootSeeting";
import {computed} from "vue";

export default {
  name: 'Layout',
  setup() {
    const {getNavbarMode} = useRootSetting();
    const componentId = computed(() => {
      let layout;
      switch (getNavbarMode.value) {
        case 'mix':
          layout = Layout1;
          break;
        case 'sidebar':
          layout = Layout2;
          break;
        case 'top-menu':
          layout = Layout3;
          break;
        default:
          layout = Layout1;
      }
      return layout;
    });
    return {getNavbarMode, componentId}
  }
};
</script>
