<template>
  <div>
    <el-checkbox-group v-model="VModel" v-bind="{...$props,...$attrs}">
      <el-checkbox v-for="(option) in $attrs.options" :key="option.value" v-bind="option" :label="option.value">
        {{ option.label }}
      </el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
import {ref, toRefs, watch} from 'vue'

export default {
  name: "BasicCheckboxGroup",
  props: {
    modelValue: {
      type: [Array, Number, String],
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