<template>
  <el-radio-group v-model="VModel" v-bind="$attrs">
    <el-radio-button v-for="(option,index) in $attrs.options" :key="index" v-bind="option" :label="option.value">
      {{ option.label }}
    </el-radio-button>
  </el-radio-group>
</template>

<script>
import {ref, watch} from 'vue'

export default {
  name: "BasicRadioGroup",
  setup(props, {emit}) {
    const VModel = ref('')
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