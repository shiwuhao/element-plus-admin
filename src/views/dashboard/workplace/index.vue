<template>
  <HeaderContent/>
  <el-row>
    <el-col :span="16">
      <LeftContent/>
    </el-col>
    <el-col :span="8">
      <RightContent/>
    </el-col>
  </el-row>
</template>
<script>
import {defineComponent} from 'vue';
import HeaderContent from './components/HeaderContent/HeaderContent';
import LeftContent from './components/LeftContent/LeftContent';
import RightContent from './components/RightContent/RightContent';

export default defineComponent({
  components: {HeaderContent, LeftContent, RightContent},
  setup() {

    return {}
  }
})
</script>