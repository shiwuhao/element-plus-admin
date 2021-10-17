<template>
  <el-carousel height="300px">
    <el-carousel-item>
      <el-image :src="getAssetsSrc('cover1.jpg')"></el-image>
    </el-carousel-item>
    <el-carousel-item>
      <el-image :src="getAssetsSrc('cover2.jpg')"></el-image>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
import {getAssetsSrc} from "@/utils/utils";

export default {
  name: 'Carousel',
  setup() {

    return {
      getAssetsSrc,
    }
  },
}
</script>