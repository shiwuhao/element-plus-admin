<template>
 <el-row :gutter="5">
   <el-col :span="12">
     <ConversionRate />
   </el-col>
   <el-col :span="12">
     <SaleCategory />
   </el-col>
 </el-row>
</template>
<script>
import {defineComponent} from 'vue';
import ConversionRate from './components/TopSearch';
import SaleCategory from "./components/SaleCategory";
export default defineComponent({
  components: {ConversionRate,SaleCategory},
  setup(){

  }
})
</script>
<style lang="scss" scoped>
::v-deep .card-header {
  span {
    font-size: 16px;
    color: $color-text-black;
    font-weight: 500;
  }
}
</style>