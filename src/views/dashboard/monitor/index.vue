<template>
    <div class="m10">
      <el-row :gutter="20">
        <el-col :span="16">
          <LeftContent/>
        </el-col>
        <el-col :span="8">
          <RightContent/>
        </el-col>
      </el-row>
    </div>
</template>
<script>
import {defineComponent} from 'vue';
import LeftContent from "./components/LeftContent/LeftContent";
import RightContent from "./components/RightContent/RightContent";
export default defineComponent({
  components: {LeftContent,RightContent},
  setup(){
    return {

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