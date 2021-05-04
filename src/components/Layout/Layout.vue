<template>
  <component :is="componentId"></component>
</template>
<script>

import LayoutSideMenu from "@/components/Layout/LayoutSideMenu";
import LayoutTopMenu from "@/components/Layout/LayoutTopMenu";
import {mapGetters} from 'vuex'
import ResizeMixin from "@/components/Layout/mixin/ResizeHandler";

export default {
  name: 'Layout',
  mixins: [ResizeMixin],
  computed: {
    ...mapGetters(['setting']),
    componentId() {
      return this.setting.layout === 'sideMenu' ? LayoutSideMenu : LayoutTopMenu;
    }
  }
};
</script>
