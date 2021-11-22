<template>
  <el-image :src="getAssetsSrc('cover2.jpg')" style="width: 100%;"></el-image>
</template>
<script>
import {getAssetsSrc} from "@/utils/index.js";

export default {
  name: 'Carousel',
  setup() {

    return {
      getAssetsSrc,
    }
  },
}
</script>