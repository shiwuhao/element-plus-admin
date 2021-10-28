<template>
  <span ref="elRef" :style="getWrapStyle"></span>
</template>

<script>
import {computed, ref} from "vue";

export default {
  name: "Icon",
  props: {
    icon: String,
    color: String,
    size: {
      type: [String, Number],
      default: 16
    },
    spin: Boolean,
  },
  setup(props) {
    const elRef = ref(null);
    const getWrapStyle = computed(() => {
      const {size, color} = props;
      const _size = parseInt(size, 10);

      return {fotSize: `${_size}px`, color: color, display: 'inline-flex'}
    })

    return {
      elRef,
      getWrapStyle
    }
  }
}
</script>

<style scoped>

</style>