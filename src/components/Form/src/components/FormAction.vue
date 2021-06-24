<template>
  <el-col :style="{textAlign:actionPosition}" v-if="showAction">
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
      <el-button type="text" v-if="showAdvancedButton" :icon="getIsAdvanced ? 'el-icon-arrow-down' : 'el-icon-arrow-up'"
                 @click="toggleAdvanced">
        {{ getIsAdvanced ? '展开' : '收起' }}
      </el-button>
      <slot name="advanceAfter"></slot>
    </el-form-item>
  </el-col>
</template>

<script>
import {computed, ref, toRefs, unref} from "vue";

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
    isAdvanced: {
      type: Boolean,
      default: true,
    },
    actionPosition: {
      type: String,
      default: 'right',
    },
  },
  setup(props, {emit}) {
    const {resetButtonOption, submitButtonOption, isAdvanced} = toRefs(props);
    const getResetButtonOption = computed(() => {
      return {...{text: '重置'}, ...resetButtonOption}
    })
    const getSubmitButtonOption = computed(() => {
      return {...{text: '提交'}, ...submitButtonOption}
    })

    const getIsAdvanced = ref(isAdvanced.value);

    function toggleAdvanced() {
      getIsAdvanced.value = !getIsAdvanced.value;
      emit('toggle-advanced');
    }

    return {
      getResetButtonOption,
      getSubmitButtonOption,
      getIsAdvanced,
      toggleAdvanced,
    }
  }
}
</script>

<style scoped>

</style>