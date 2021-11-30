<template>
  <el-input type="textarea" v-model="VModel" v-bind="{...$props,...$attrs}"></el-input>
</template>

<script>
import {useVModel} from "@vueuse/core";

export default {
  name: "BasicSelect",
  emits:['update:modelValue'],
  props: {
    modelValue: {
      type: [Number, String, Array, Object],
    }
  },
  setup(props, {emit}) {
    const VModel = useVModel(props, 'modelValue', emit);
    return {
      VModel,
    }
  },
}
</script>

<style scoped>

</style>