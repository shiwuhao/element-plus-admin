<template>
  <el-tag
    :key="tag"
    v-for="tag in tagData"
    @click="handleClick(tag)"
    @close="handleClose(tag)">
    {{ tag }}
  </el-tag>
  <template v-if="addTagVisible">
    <el-input
      class="input-new-tag"
      v-if="inputVisible"
      v-model="inputValue"
      ref="saveTagInput"
      @keyup.enter="handleInputConfirm"
      @blur="handleInputConfirm"
    >
    </el-input>
    <el-button v-else class="button-new-tag"  @click="showInput">+ New Tag</el-button>
  </template>
</template>
<script>
import {defineComponent, toRefs, ref, nextTick} from 'vue'

export default defineComponent({
  props: {
    //标签数据
    dynamicTags: {
      type: Array,
      default: () => ([]),
    },
    //是否显示新增标签按钮
    addTagVisible: {
      type: Boolean,
      default: false
    },
    //标签类型
    type: {
      type: String,
      default: 'info'
    },
    //是否可关闭
    closable: {
      type: Boolean,
      default: false
    },
    //是否禁用渐变动画
    disableTransitions: {
      type: Boolean,
      default: false
    },
    //是否有边框描边
    hit: {
      type: Boolean,
      default: false
    },
    //背景色
    color: {
      type: String,
      default: ''
    },
    //大小
    size: {
      type: String,
      default: 'small'
    },
    //主题
    effect: {
      type: String,
      default: 'Plain'
    }
  },
  setup(props, {emit}) {
    const saveTagInput = ref(null)
    const inputVisible = ref(false);
    const inputValue = ref('');
    const {dynamicTags = []} = toRefs(props)
    const tagData = dynamicTags.value;
    const showInput = () => {
      inputVisible.value = true;
      nextTick(() => {
        saveTagInput.value.input.focus();
      });
    }
    const handleInputConfirm = () => {
      if (inputValue.value) {
        tagData.push(inputValue.value)
      }
      inputVisible.value = false;
      inputValue.value = '';
    }
    const handleClose = (tag) => {
      tagData.splice(tagData.indexOf(tag), 1);
    }
    const handleClick = (tag) => {
      emit('handle-click', tag)
    }
    return {
      showInput,
      inputVisible,
      inputValue,
      handleInputConfirm,
      handleClose,
      handleClick,
      saveTagInput,
      tagData
    }
  }
})
</script>
<style lang="scss" scoped>
.el-tag + .el-tag {
  margin: 0 0 10px 8px;
}
::v-deep .el-input__inner {
  height: 24px;
  vertical-align: super;
}
.el-button--small {
  min-height: inherit;
  border: 1px dashed #dcdfe6;
}
.button-new-tag {
  margin-left: 10px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}

.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>