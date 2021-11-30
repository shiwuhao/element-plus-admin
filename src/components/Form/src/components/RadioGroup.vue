<template>
  <el-radio-group v-model="VModel" v-bind="{...$props,...$attrs}">
    <el-radio v-for="(option,index) in $attrs.options" :key="index" v-bind="option" :label="option.value">
      {{ option.label }}
    </el-radio>
  </el-radio-group>
</template>

<script>
import {useVModel} from "@vueuse/core";

export default {
  name: "BasicRadioGroup",
  emits:['update:modelValue'],
  props: {
    modelValue: {
      type: [Number, String],
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