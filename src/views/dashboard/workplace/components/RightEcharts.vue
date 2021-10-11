<template>
  <Card
    :cardName="cardName"
  >
    <template #text-custom>
      <RadarChart :height="height"/>
    </template>
  </Card>
</template>
<script>
import {defineComponent} from 'vue';
import {Card} from '@/components/Card';;
import RadarChart from '@/views/component/echarts/components/RadarChart';
export default defineComponent({
  components: {Card,RadarChart},
  setup() {
    return {
      cardName: '雷达图指数',
      height: '500px'
    }
  }
})
</script>