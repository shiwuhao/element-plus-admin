<template>
  <el-col v-if="showAction" :style="{textAlign:position}" v-bind="colProps">
    <el-form-item>
      <slot name="resetBefore"></slot>
      <el-button type="default" v-bind="$props.resetButtonProps" v-if="showResetButton" @click="handleReset">
        {{ $props.resetButtonText }}
      </el-button>
      <slot name="submitBefore"></slot>
      <el-button type="primary" v-bind="$props.submitButtonProps" v-if="showSubmitButton" @click="handleSubmit">
        {{ $props.submitButtonText }}
      </el-button>
      <slot name="advanceBefore"></slot>
      <el-button type="text" v-if="showAdvancedButton"
                 :icon="!$props.isAdvanced ? 'el-icon-arrow-down' : 'el-icon-arrow-up'"
                 @click="toggleAdvanced">
        {{ !$props.isAdvanced ? '展开' : '收起' }}
      </el-button>
      <slot name="advanceAfter"></slot>
    </el-form-item>
  </el-col>
</template>

<script>
import {inject} from "vue";

export default {
  name: "FormAction",
  props: {
    showAction: {
      type: Boolean,
      default: true,
    },
    showResetButton: {
      type: Boolean,
      default: true,
    },
    resetButtonProps: {
      type: Object,
      default: () => ({})
    },
    resetButtonText: {
      type: String,
      default: '重置'
    },
    showSubmitButton: {
      type: Boolean,
      default: true,
    },
    submitButtonProps: {
      type: Object,
      default: () => ({})
    },
    submitButtonText: {
      type: String,
      default: '提交'
    },
    showAdvancedButton: {
      type: Boolean,
      default: false,
    },
    showAdvancedLength: {
      type: Boolean,
      default: false,
    },
    isAdvanced: {
      type: Boolean,
      default: true,
    },
    position: {
      type: String,
      default: 'right',
    },
    colProps: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, {emit}) {
    const handleReset = inject('handleReset');
    const handleSubmit = inject('handleSubmit');

    function toggleAdvanced() {
      emit('toggle-advanced');
    }

    return {
      toggleAdvanced,
      handleReset,
      handleSubmit,
    }
  }
}
</script>

<style scoped>

</style>