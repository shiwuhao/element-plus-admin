<template>
  <TopTrade/>
  <el-row :gutter="20">
    <el-col :span="14">
      <BottomCategory/>
    </el-col>
    <el-col :span="10">
      <BottomHotSearch/>
    </el-col>
  </el-row>
</template>
<script>
import {defineComponent} from 'vue';
import BottomCategory from './component/BottomCategory';
import BottomHotSearch from './component/BottomHotSearch';
import TopTrade from './component/TopTrade';
export default defineComponent({
  components: {BottomCategory,BottomHotSearch,TopTrade}
})
</script>