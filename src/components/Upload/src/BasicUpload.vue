<template>
  <el-upload
    class="upload-demo"
    action="https://jsonplaceholder.typicode.com/posts/"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :on-change="beforeUpload"
    :before-remove="beforeRemove"
    multiple
    :limit="3"
    :on-exceed="handleExceed"
    :file-list="fileList"
  >
    <el-button size="small" type="primary">点击上传</el-button>
    <template #tip>
      <div class="el-upload__tip">只能上传 {{ accept }} 文件，且不超过 {{ maxFileSize }}kb</div>
    </template>
  </el-upload>
  <el-dialog v-model="dialogVisible">
    <img width="100%" :src="dialogImageUrl" alt="">
  </el-dialog>
</template>

<script>
import {ref, reactive} from 'vue';
import {toRefs} from "@vueuse/core";

export default {
  name: "BasicUpload",
  props: {
    action: {
      type: String,
      default: '',
    },
    headers: {
      type: Object,
      default: () => ({}),
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Object,
      default: () => ({}),
    },
    name: {
      type: String,
      default: 'file',
    },
    accept: {
      type: String,
      default: '.png, .jpeg, .jpg'
    },
    listType: {
      type: String,
      default: 'text',
    },
    maxFileSize: {
      type: Number,
      default: 2048
    }
  },
  data() {
    return {
      // dialogImageUrl: '',
      // dialogVisible: false,
      fileList: [
        {
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        },
        {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }
      ]
    };
  },
  setup() {
    const state = reactive({
      dialogImageUrl: '',
      dialogVisible: false,
    })

    function handlePreview(file) {
      state.dialogImageUrl = file.url;
      state.dialogVisible = true;
    }

    return {
      ...toRefs(state),
      handlePreview
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    // handlePreview(file) {
    //   console.log(file);
    //   this.dialogImageUrl = file.url;
    //   this.dialogVisible = true;
    // },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    beforeUpload(file) {
      const isSize = file.size / 1024 < this.maxSize;

      if (!isSize) {
        this.$message.error(`上传头像图片大小不能超过 ${this.maxFileSize}kb!`);
      }
      return isSize;
    },
  }
}
</script>

<style scoped>

</style>