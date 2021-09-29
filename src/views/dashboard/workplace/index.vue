<template>
  <HeaderContent/>
  <div class="m10">
    <el-row :gutter="20">
      <el-col :span="getIsMobile?24:16">
        <LeftContent/>
      </el-col>
      <el-col :span="getIsMobile?24:8">
        <RightContent/>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import {defineComponent} from 'vue';
import HeaderContent from './components/HeaderContent/HeaderContent';
import LeftContent from './components/LeftContent/LeftContent';
import RightContent from './components/RightContent/RightContent';
import {useRootSetting} from "@/composables/setting/useRootSeeting";

export default defineComponent({
  components: {HeaderContent, LeftContent, RightContent},
  setup() {
    const {getIsMobile} = useRootSetting()
    return {
      getIsMobile
    }
  }
})
</script>
<style lang="scss" scoped>
::v-deep .el-card__header {
  padding: 16px 20px !important;

  .card-header {
    span {
      font-size: 16px;
      font-weight: 500;
    }
  }
}
</style>