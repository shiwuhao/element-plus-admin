<template>
  <el-select v-model="VModel" v-bind="$attrs">
    <el-option v-for="(option,index) in $attrs.options" :key="index" v-bind="option"></el-option>
  </el-select>
</template>

<script>
import {ref, watch} from 'vue'

export default {
  name: "BasicSelect",
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