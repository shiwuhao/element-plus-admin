<template>
  <component :is="componentId"></component>
</template>
<script>

import LayoutMix from "@/layouts/LayoutMix.vue";
import LayoutAside from "@/layouts/LayoutAside.vue";
import LayoutTopMenu from "@/layouts/LayoutTopMenu.vue";
import {useRootSetting} from "@/composables/setting/useRootSeeting.js";
import {computed} from "vue";

export default {
  name: 'Layout',
  setup() {
    const {getNavbarMode} = useRootSetting();
    const componentId = computed(() => {
      let layout;
      switch (getNavbarMode.value) {
        case 'mix':
          layout = LayoutMix;
          break;
        case 'sidebar':
          layout = LayoutAside;
          break;
        case 'top-menu':
          layout = LayoutTopMenu;
          break;
        default:
          layout = LayoutAside;
      }
      return layout;
    });
    return {getNavbarMode, componentId}
  }
};
</script>
