<template>
  <el-row :gutter="20">
    <el-col v-for="(item,index) in projectList" :key="index" :span="getIsMobile?24:6">
      <Card
        :imageCard="imageCard"
        :title="item.title"
        :description="item.content"
        :time="item.time"
        :imageUrl="item.image"
        shadow="hover"
        class="personal-center-right-project"
      >
        <template #image-custom>
          <el-avatar :src="item.url"></el-avatar>
        </template>
      </Card>
    </el-col>
  </el-row>
</template>
<script>
import {defineComponent, ref} from 'vue';
import {Card} from '@/components/Card';
import {projectList} from './data';
import {useRootSetting} from "@/composables/setting/useRootSeeting";
export default defineComponent({
  components: {Card},
  setup() {
    const {getIsMobile} = useRootSetting();
    return {
      imageCard: ref(true),
      projectList,
      getIsMobile
    }
  }
})
</script>