<template>
  <Card
    :cardName="cardName"
  >
    <template #text-custom>
      <Tag :dynamicTags="tags.data" :addTagVisible='addTagVisible'/>
    </template>
  </Card>
</template>
<script>
import {defineComponent, reactive, ref} from 'vue';
import {Card} from '@/components/Card';
import {Tag} from '@/components/Tag';

export default defineComponent({
  components: {Card, Tag},
  setup() {
    const tags = reactive({
      data: ['操作一', '操作一', '操作一', '操作一', '操作一', '操作一']
    })
    return {
      cardName: ref('快速开始/便捷导航'),
      addTagVisible: ref(true),
      tags
    }
  }
})
</script>