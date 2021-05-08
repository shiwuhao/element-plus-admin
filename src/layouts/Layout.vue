<template>
  <component :is="componentId"></component>
</template>
<script>

import LayoutSideMenu from "@/layouts/LayoutSideMenu";
import LayoutTopMenu from "@/layouts/LayoutTopMenu";
import {mapGetters} from 'vuex'
import ResizeMixin from "@/layouts/mixin/ResizeHandler";

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
