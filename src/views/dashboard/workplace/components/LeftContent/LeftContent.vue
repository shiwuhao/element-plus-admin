<template>
  <LeftProject/>
  <LeftDynamic/>
</template>
<script>
import {defineComponent} from 'vue';
import LeftDynamic from './components/LeftDynamic';
import LeftProject from './components/LeftProject';
export default defineComponent({
  components: {LeftDynamic,LeftProject},
  setup(){
    return {

    }
  }
})
</script>