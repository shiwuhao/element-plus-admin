<template>
  <el-select v-model="VModel" v-bind="{...$props,...$attrs}">
    <el-option v-for="(option,index) in $attrs.options" :key="index" v-bind="option"></el-option>
  </el-select>
</template>

<script>
import {toRefs, watch} from 'vue'

export default {
  name: "BasicSelect",
  props: {
    modelValue: {
      type: [Number, String, Array, Object],
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