<template>
  <component :is="componentId"></component>
</template>
<script>

import Layout1 from "@/layouts/Layout1";
import Layout2 from "@/layouts/Layout2";
import Layout3 from "@/layouts/Layout3";

export default {
  name: 'Layout',
  computed: {
    componentId() {
      return Layout3;
    }
  }
};
</script>
