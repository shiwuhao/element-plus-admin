<template>
  <div>{{echartsData}}</div>
</template>
<script>
import {defineComponent, onMounted, reactive} from 'vue';
import {ECharts} from '@/components/Echarts';
import {getRequest} from '@/libs/api';
export default defineComponent({
  components: {ECharts},
  setup(){
    const echartsData = reactive([]);
    onMounted(()=>{
      getRequest('/js/echarts.json').then(res => {
        echartsData.value = res.data.data
      })
    })

    return {
      echartsData
    }
  }
})
</script>