<template>
  <svg class="icon" aria-hidden="true" :style="getWrapStyle">
    <use :xlink:href="symbolId"></use>
  </svg>
</template>

<script>
import {computed, defineComponent, toRefs} from 'vue';

export default defineComponent({
  name: 'icon-svg',
  props: {
    prefix: {
      type: String,
      default: 'icon',
    },
    name: {
      type: String,
      required: true,
    },
    size: {
      type: [String, Number],
      required: 16,
    },
    spin: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const {prefix, name, size} = toRefs(props);
    const symbolId = computed(() => `#${prefix.value}-${name.value}`)
    const getWrapStyle = computed(() => {
      const s = `${size.value}`.replace('px', '') + 'px';
      return {width: s, height: s};
    })
    return {
      symbolId,
      getWrapStyle,
    }
  }
})
</script>
<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.svg-icon-spin {
  animation: loadingCircle 1s infinite linear;
}
</style>
