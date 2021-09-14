<template>
  <GrowCard />
  <AccessSales />
</template>
<script>
import {defineComponent} from 'vue';
import GrowCard from './components/GrowCard/GrowCard';
import AccessSales from "./components/AccessSales";
export default defineComponent({
  components: {GrowCard,AccessSales},
  setup(){
    return {

    }
  }
})
</script>