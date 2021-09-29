<template>
  <Card :cardName="cardName">
      <template #text-custom>
        <Echarts ref="echarts" :id="id" :height="height" :chartData="chartData"/>
      </template>
  </Card>
</template>
<script>
import {defineComponent, reactive, ref} from 'vue';
import {Echarts} from '@/components/Echarts';
import {Card} from '@/components/Card';
export default defineComponent({
  components: {Card,Echarts},
  setup(){
    const echarts = ref(null);
    const chartData = reactive({
      
    })
    return {
      cardName: '券核效率',
      echarts,
      id: 'monitor-efficiency-echarts',
      height: '300px',
      chartData
    }
  }
})
</script>