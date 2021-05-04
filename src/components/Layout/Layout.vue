<template>
  <component :is="componentId"></component>
</template>
<script>

import LayoutSideMenu from "@/components/Layout/LayoutSideMenu";
import LayoutTopMenu from "@/components/Layout/LayoutTopMenu";
import {mapGetters} from 'vuex'

export default {
  name: 'Layout',
  computed: {
    ...mapGetters(['setting']),
    componentId() {
      return this.setting.layout === 'sideMenu' ? LayoutSideMenu : LayoutTopMenu;
    }
  }
};
</script>
