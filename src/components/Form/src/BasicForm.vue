<template>
  <el-form ref="elForm" :model="formModel" v-bind="{...$props,...$attrs}">
    <el-row :gutter="30" v-if="getSchema.length > 0">
      <template v-for="(schema,index) in getSchema" :key="schema.field">
        <FormItem :schema="schema" v-model="formModel[schema.field]"
                  v-show="showAdvancedButton ? index < showAdvancedLength || getActionProps.isAdvanced : true">
          <template #[item]="data" v-for="item in Object.keys($slots)">
            <slot :name="item" v-bind="{...schema,...data}"></slot>
          </template>
        </FormItem>
      </template>
      <FormAction v-bind="getActionProps" @toggle-advanced="toggleAdvanced">
        <template #[item]="data" v-for="item in ['resetBefore', 'submitBefore', 'advanceBefore', 'advanceAfter']">
          <slot :name="item" v-bind="data"></slot>
        </template>
      </FormAction>
    </el-row>
    <el-empty v-else></el-empty>
  </el-form>
</template>

<script>
import FormItem from "./components/FormItem";
import FormAction from "./components/FormAction";
import {defineComponent, toRefs, reactive, unref, watch, provide, ref, computed} from "vue";

export default defineComponent({
  name: "BasicForm",
  components: {FormItem, FormAction},
  props: {
    modelValue: {
      type: Object,
      default: () => ({})
    },
    schemas: {
      type: Array,
      default: () => ([]),
    },
    rules: {
      type: Object,
      default: () => ({})
    },
    inline: {
      type: Boolean,
      default: false,
    },
    labelPosition: {
      type: String,
      default: 'right',
    },
    labelWidth: {
      type: String,
      default: '',
    },
    labelSuffix: {
      type: String,
      default: '',
    },
    hideRequiredAsterisk: {
      type: Boolean,
      default: false,
    },
    showMessage: {
      type: Boolean,
      default: true,
    },
    inlineMessage: {
      type: Boolean,
      default: false,
    },
    statusIcon: {
      type: Boolean,
      default: false,
    },
    validateOnRuleChange: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autoWidth: {
      type: Boolean,
      default: false
    },
    actionProps: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ['on-reset', 'on-submit'],
  setup(props, {emit}) {
    const {modelValue, schemas = [], actionProps = {}, autoWidth} = toRefs(props);
    const getSchema = schemas;
    const formModel = modelValue;
    const {showAdvancedButton = false, showAdvancedLength = 3} = unref(actionProps);
    const elForm = ref(null);
    const getActionProps = computed(() => {
      return {isAdvanced: false, ...unref(actionProps)};
    });

    watch(() => formModel.value, (newVal) => {
      emit('update:modelValue', newVal);
    }, {deep: true})

    const toggleAdvanced = () => getActionProps.value.isAdvanced = !getActionProps.value.isAdvanced;
    const validate = () => elForm.value.validate();
    const validateField = () => elForm.value.validateField();
    const resetFields = () => elForm.value.resetFields();
    const clearValidate = () => elForm.value.clearValidate();

    const handleSubmit = () => emit('submit');
    const handleReset = () => {
      elForm.value.resetFields();
      emit('reset');
    }

    provide('handleReset', handleReset);
    provide('handleSubmit', handleSubmit)
    provide('autoWidth', autoWidth)

    return {
      getSchema,
      formModel,
      showAdvancedButton,
      showAdvancedLength,
      getActionProps,
      elForm,
      toggleAdvanced,
      validate,
      validateField,
      resetFields,
      clearValidate
    }
  },
})
</script>