<template>
  <div>
    <el-checkbox-group v-model="VModel" v-bind="{...$props,...$attrs}">
      <el-checkbox-button v-for="(option) in $attrs.options" :key="option.value" v-bind="option" :label="option.value">
        {{ option.label }}
      </el-checkbox-button>
    </el-checkbox-group>
  </div>
</template>

<script>
import {toRefs, watch} from 'vue'

export default {
  props: {
    modelValue: {
      type: [Array, Number, String],
    }
  },
  name: "BasicCheckboxGroup",
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