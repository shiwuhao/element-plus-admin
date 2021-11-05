<template>
  <icon-svg v-if="$props.mode === 'svg'" :prefix="$props.prefix" :name="$props.name" :size="$props.size"/>
  <!--  <span ref="elRef" :style="getWrapStyle"></span>-->
</template>

<script>
import IconSvg from "./IconSvg";
import {computed, ref} from "vue";

export default {
  name: "Icon",
  components: {IconSvg},
  props: {
    mode: {
      type: String,
      default: 'svg',
    },
    prefix: {
      type: String,
      default: '',
    },
    name: String,
    color: String,
    size: {
      type: [String, Number],
      default: 16
    },
    spin: Boolean,
  },
  setup(props) {
    // const elRef = ref(null);
    // const getWrapStyle = computed(() => {
    //   const {size, color} = props;
    //   const _size = parseInt(size, 10);
    //
    //   return {fotSize: `${_size}px`, color: color, display: 'inline-flex'}
    // })

    return {
      // elRef,
      // getWrapStyle
    }
  }
}
</script>

<style scoped>

</style>