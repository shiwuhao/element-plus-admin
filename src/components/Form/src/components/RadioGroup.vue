<template>
  <el-radio-group v-model="VModel" v-bind="{...$props,...$attrs}">
    <el-radio v-for="(option,index) in $attrs.options" :key="index" v-bind="option" :label="option.value">
      {{ option.label }}
    </el-radio>
  </el-radio-group>
</template>

<script>
import {toRefs, watch} from 'vue'

export default {
  name: "BasicRadioGroup",
  props: {
    modelValue: {
      type: [Number, String],
    }
  },
  setup(props, {emit}) {
    const {modelValue} = toRefs(props);
    const VModel = modelValue;

    watch(() => modelValue.value, (newVal) => {
      VModel.value = newVal;
    })

    watch(() => VModel.value, (newVal) => {
      emit('update:modelValue', newVal);
    })
    return {
      VModel,
    }
  },
}
</script>

<style scoped>

</style>