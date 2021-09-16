<template>
  <GrowCard />
  <AccessSales />
</template>
<script>
import {defineComponent} from 'vue';
import GrowCard from './components/GrowCard/GrowCard';
import AccessSales from "./components/AccrssSales/AccessSales";
export default defineComponent({
  components: {GrowCard,AccessSales},
  setup(){
    return {

    }
  }
})
</script>