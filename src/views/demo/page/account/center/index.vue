<template>
  <LeftLayout />
<!--  <UpLayout />-->
</template>
<script>
import {defineComponent} from 'vue';
import LeftLayout from './leftLayout';
import UpLayout from './upLayout';
export default defineComponent({
  components: {LeftLayout,UpLayout}
})
</script>