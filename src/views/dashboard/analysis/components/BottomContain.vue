<template>
  <el-row>
    <el-col :span="getIsMobile ? 24: 12">
      <ConversionRate />
    </el-col>
    <el-col :span="getIsMobile ? 24: 12">
      <SaleCategory />
    </el-col>
  </el-row>
</template>
<script>
import {defineComponent} from 'vue';
import ConversionRate from './TopSearch';
import SaleCategory from "./SaleCategory";
import {useRootSetting} from "@/composables/setting/useRootSeeting";
export default defineComponent({
  components: {ConversionRate,SaleCategory},
  setup(){
    const {getIsMobile} = useRootSetting()
    return {
      getIsMobile
    }
  }
})
</script>
<style lang="scss" scoped>
.el-card {
  //height: 100%;
}
:deep(.card-header) {
  span {
    font-size: 16px;
    color: $color-text-black;
    font-weight: 500;
  }
}
</style>