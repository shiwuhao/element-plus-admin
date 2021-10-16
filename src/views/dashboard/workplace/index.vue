<template>
  <PageWrapper>
    <template #content>
      <UserInfo/>
    </template>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="18" :xl="16">
        <Project class="mb-2"/>
        <Dynamic class="mb-2"/>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="6" :xl="8">
        <QuickNav class="mb-2"/>
        <Carousel class="mb-2"/>
        <ProjectStatistic class="mb-2"/>
      </el-col>
    </el-row>
  </PageWrapper>
</template>
<script>
import {PageWrapper} from '@/components/Page'
import UserInfo from "@/views/dashboard/workplace/components/UserInfo";
import Project from "@/views/dashboard/workplace/components/Project";
import Dynamic from "@/views/dashboard/workplace/components/Dynamic";
import QuickNav from "@/views/dashboard/workplace/components/QuickNav";
import Carousel from "@/views/dashboard/workplace/components/Carousel";
import ProjectStatistic from "@/views/dashboard/workplace/components/ProjectStatistic";

import {defineComponent} from 'vue';
import {useRootSetting} from "@/composables/setting/useRootSeeting";

export default defineComponent({
  components: {PageWrapper, UserInfo, Project, Dynamic, QuickNav, Carousel, ProjectStatistic},
  setup() {
    const {getIsMobile} = useRootSetting();

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