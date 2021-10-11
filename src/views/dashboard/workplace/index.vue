<template>
  <HeaderContent/>
  <div class="m10">
    <el-row :gutter="20">
      <el-col :span="getIsMobile?24:16">
         <el-row>
           <el-col>
             <LeftProject/>
           </el-col>
           <el-col>
             <LeftDynamic/>
           </el-col>
         </el-row>
      </el-col>
      <el-col :span="getIsMobile?24:8">
         <el-row>
           <el-col>
             <RightNavigation/>
           </el-col>
           <el-col>
             <RightEcharts/>
           </el-col>
           <el-col>
             <RightTeam/>
           </el-col>
         </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import {defineComponent} from 'vue';
import HeaderContent from './components/HeaderContent.vue';
import LeftDynamic from "@/views/dashboard/workplace/components/LeftDynamic.vue";
import LeftProject from "@/views/dashboard/workplace/components/LeftProject.vue";
import RightEcharts from "@/views/dashboard/workplace/components/RightEcharts.vue";
import RightNavigation from "@/views/dashboard/workplace/components/RightNavigation.vue";
import RightTeam from "@/views/dashboard/workplace/components/RightTeam.vue";
import {useRootSetting} from "@/composables/setting/useRootSeeting";
export default defineComponent({
  components: {HeaderContent, LeftDynamic, LeftProject,RightEcharts,RightNavigation,RightTeam},
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