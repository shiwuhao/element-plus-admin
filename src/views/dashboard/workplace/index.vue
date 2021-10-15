<template>
  <PageWrapper>
    <template #content>
      <UserInfo/>
    </template>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="18" :xl="16">
        <Project/>
        <LeftDynamic/>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="6" :xl="8">
        <RightNavigation/>
        <RightEcharts/>
        <RightTeam/>
      </el-col>
    </el-row>
  </PageWrapper>
</template>
<script>
import {PageWrapper} from '@/components/Page'
import UserInfo from "@/views/dashboard/workplace/components/UserInfo";
import Project from "@/views/dashboard/workplace/components/Project";

import {defineComponent} from 'vue';
import HeaderContent from './components/HeaderContent.vue';
import LeftDynamic from "@/views/dashboard/workplace/components/LeftDynamic.vue";
import LeftProject from "@/views/dashboard/workplace/components/LeftProject.vue";
import RightEcharts from "@/views/dashboard/workplace/components/RightEcharts.vue";
import RightNavigation from "@/views/dashboard/workplace/components/RightNavigation.vue";
import RightTeam from "@/views/dashboard/workplace/components/RightTeam.vue";
import {useRootSetting} from "@/composables/setting/useRootSeeting";

export default defineComponent({
  components: {
    PageWrapper,
    UserInfo,
    Project,

    HeaderContent, LeftDynamic, LeftProject, RightEcharts, RightNavigation, RightTeam
  },
  setup() {
    const {getIsMobile} = useRootSetting()
    return {
      getIsMobile
    }
  }
})
</script>
<style lang="scss" scoped>
:deep(.el-card__header) {
  padding: 16px 20px !important;

  .card-header {
    span {
      font-size: 16px;
      font-weight: 500;
    }
  }
}
</style>