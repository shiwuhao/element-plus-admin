<template>
  <RightNavigation />
  <RightEcharts />
  <RightTeam />
</template>
<script>
import {defineComponent} from 'vue';
import RightNavigation from "./components/RightNavigation";
import RightEcharts from "./components/RightEcharts";
import RightTeam from "./components/RightTeam";
export default defineComponent({
  components: {RightNavigation,RightEcharts,RightTeam},
  setup(){

    return {

    }
  }
})
</script>