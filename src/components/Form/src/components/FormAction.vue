<template>
  <el-col v-if="showAction" :style="{textAlign:actionPosition}" v-bind="colProps">
    <el-form-item>
      <slot name="resetBefore"></slot>
      <el-button type="default" v-bind="getResetButtonOption" v-if="showResetButton">
        {{ getResetButtonOption.text }}
      </el-button>
      <slot name="submitBefore"></slot>
      <el-button type="primary" v-bind="getSubmitButtonOption" v-if="showSubmitButton">
        {{ getSubmitButtonOption.text }}
      </el-button>
      <slot name="advanceBefore"></slot>
      <el-button type="text" v-if="showAdvancedButton" :icon="!$props.isAdvanced ? 'el-icon-arrow-down' : 'el-icon-arrow-up'"
                 @click="toggleAdvanced">
        {{ !$props.isAdvanced ? '展开' : '收起' }}
      </el-button>
      <slot name="advanceAfter"></slot>
    </el-form-item>
  </el-col>
</template>

<script>
import {computed, ref, toRefs} from "vue";

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
    resetButtonOption: {
      type: Object,
      default: () => ({})
    },
    showSubmitButton: {
      type: Boolean,
      default: true,
    },
    submitButtonOption: {
      type: Object,
      default: () => ({})
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
    actionPosition: {
      type: String,
      default: 'right',
    },
    colProps: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, {emit}) {
    const {resetButtonOption, submitButtonOption} = toRefs(props);
    const getResetButtonOption = computed(() => {
      return {...{text: '重置'}, ...resetButtonOption.value}
    })
    const getSubmitButtonOption = computed(() => {
      return {...{text: '提交'}, ...submitButtonOption.value}
    })

    function toggleAdvanced() {
      emit('toggle-advanced');
    }

    return {
      getResetButtonOption,
      getSubmitButtonOption,
      toggleAdvanced,
    }
  }
}
</script>

<style scoped>

</style>