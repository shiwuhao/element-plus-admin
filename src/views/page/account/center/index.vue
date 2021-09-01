<template>
  <LeftLayout />
<!--  <UpLayout />-->
</template>
<script>
import {defineComponent} from 'vue';
import LeftLayout from './leftLayout/index';
import UpLayout from './upLayout/index';
export default defineComponent({
  components: {LeftLayout,UpLayout}
})
</script>