<template>
  <TopActivities/>
  <TopEfficiency/>
  <BottomResource/>
</template>
<script>
import {defineComponent} from 'vue';
import TopActivities from './components/TopActivities';
import TopEfficiency from './components/TopEfficiency';
import BottomResource from './components/BottomResource';
export default defineComponent({
  components: {TopActivities,TopEfficiency,BottomResource}
})
</script>