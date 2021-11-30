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
import {useVModel} from "@vueuse/core";

export default {
  name: "BasicCheckboxGroup",
  emits:['update:modelValue'],
  props: {
    modelValue: {
      type: [Array, Number, String],
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