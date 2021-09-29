<template>
  <Card :cardName="cardName"></Card>
</template>
<script>
import {defineComponent} from 'vue';
import {Card} from '@/components/Card';
export default defineComponent({
  components: {Card},
  setup(){
    return {
      cardName: '活动情况预测'
    }
  }
})
</script>