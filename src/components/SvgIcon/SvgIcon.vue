<template>
  <svg :class="svgClass" aria-hidden="true" >
    <title v-if="title">{{ title }}</title>
    <use :xlink:href="iconName" :fill="color"/>
  </svg>
</template>

<script>
import {computed, defineComponent,toRefs} from 'vue';
export default defineComponent({
  name: 'svg-icon',
  props:{
    iconClass: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '#889aa4',
    },
  },
  setup(props){
    const {iconClass,className} = toRefs(props);
    const iconName = computed(()=>`#icon-${iconClass.value}`)
    const svgClass = computed(()=> {
      if (className.value) {
        return `svg-icon ${className.value}`
      }
      return 'svg-icon'
    })
    return {
      iconName,
      svgClass
    }
  }
})
</script>
<style>
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  vertical-align: middle;
}
</style>
