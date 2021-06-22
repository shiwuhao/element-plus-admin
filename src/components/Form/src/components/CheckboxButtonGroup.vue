<template>
  <div>
    <el-checkbox-group v-model="VModel" v-bind="$props">
      <el-checkbox-button v-for="(option) in $attrs.options" :key="option.value" v-bind="option" :label="option.value">
        {{ option.label }}
      </el-checkbox-button>
    </el-checkbox-group>
  </div>
</template>

<script>
import {ref, watch} from 'vue'

export default {
  name: "BasicCheckboxGroup",
  setup(props, {emit}) {
    const VModel = ref([])
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