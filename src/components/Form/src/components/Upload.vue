<template>
  <basic-upload :on-success="handleSuccess" :on-remove="handleRemove" :on-exceed="handleExceed"></basic-upload>
</template>

<script>
import {BasicUpload} from '@/components/Upload/index.js'
import {toRefs} from 'vue'
import {ElMessage} from 'element-plus'

export default {
  name: "Upload",
  components: {BasicUpload},
  props: {
    modelValue: {
      type: [Number, String, Array, Object],
    }
  },
  setup(props, {emit}) {
    const {modelValue} = toRefs(props);
    const VModel = modelValue;

    const handleSuccess = (response) => {
      const [file] = response.data;
      emit('update:modelValue', file.url);
    }

    const handleRemove = () => {
      emit('update:modelValue', '');
    }

    const handleExceed = () => {
      ElMessage.error('超过上传最大限制数量');
    }

    return {
      VModel,
      handleSuccess,
      handleRemove,
      handleExceed,
    }
  },
}
</script>

<style scoped>

</style>