<template>
  <Card
    :imageCard="imageCard"
    :title="item.title"
    :description="item.content"
    :time="item.time"
    :imageUrl="item.image"
    :header="header"
    shadow="hover"
    v-for="(item,index) in projectList" :key="index"
  >
    <template #image-custom>
      <el-avatar :src="item.url"></el-avatar>
    </template>
  </Card>
</template>
<script>
import {defineComponent, ref} from 'vue';
import {Card} from '@/components/Card';
import {projectList} from './data';

export default defineComponent({
  components: {Card},
  setup() {
    return {
      imageCard: ref(true),
      projectList,
      header: ref(false)
    }
  }
})
</script>