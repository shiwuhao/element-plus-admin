<template>
  <GrowCard />
  <AccessSales />
  <BottomContain />
</template>
<script>
import {defineComponent} from 'vue';
import GrowCard from './components/GrowCard/GrowCard';
import AccessSales from "./components/AccrssSales/AccessSales";
import BottomContain from './components/BottomContain/BottomContain';
export default defineComponent({
  components: {GrowCard,AccessSales,BottomContain},
  setup(){
    return {

    }
  }
})
</script>