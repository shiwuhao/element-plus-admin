<template>
  <el-upload
    :on-preview="handlePreview"
    v-bind="$props"
  >
    <el-button v-bind="$props">点击上传</el-button>
    <template #tip>
      <div class="el-upload__tip">{{ $props.tips }}</div>
    </template>
  </el-upload>
  <el-dialog v-model="dialogVisible">
    <img :src="dialogImageUrl" alt="">
  </el-dialog>
</template>

<script>
import {reactive, toRefs, unref} from 'vue';
import {basicProps} from "./props";

export default {
  name: "BasicUpload",
  props: basicProps,
  setup() {
    const state = reactive({
      dialogImageUrl: '',
      dialogVisible: false,
    })

    function handlePreview(file) {
      state.dialogImageUrl = file.url ? file.url : file.response['data'][0]['url'];
      state.dialogVisible = true;
    }

    return {
      ...toRefs(state),
      handlePreview
    }
  },
}
</script>

<style scoped>

</style>