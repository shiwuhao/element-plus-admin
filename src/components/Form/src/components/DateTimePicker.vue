<template>
  <el-date-picker v-model="VModel" v-bind="{...$props,...$attrs}" type="datetime"
                  value-format="YYYY-MM-DD HH:mm:ss"></el-date-picker>
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