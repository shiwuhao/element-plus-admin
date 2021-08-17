<template>
   <div class="center-title">
     <slot name="title"></slot>
     <slot name="content"></slot>
   </div>
</template>
<script>
import {defineComponent} from 'vue';
export default ({
  name: 'center-title',
  props: {
    title: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    }
  },
  setup(props, { slots }) {

  }
})
</script>
<style lang="scss" scoped>

</style>