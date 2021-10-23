import {onMounted, reactive, ref, toRefs, unref, watch} from 'vue';
import {error} from "echarts/types/src/util/log";

export function uesForm(props, emit) {

  const elRef = ref(null);
  const defaultColProps = {xs: 24, sm: 24, md: 12, lg: 12, xl: 12};

  const {modelValue, schemas = [], actionProps = {}} = toRefs(props);
  const getSchema = schemas;
  const formModel = modelValue;
  const {showAdvancedButton = false, showAdvancedLength = 3} = unref(actionProps);
  const getActionProps = reactive({isAdvanced: false, ...unref(actionProps)});

  watch(() => modelValue.value, (newVal) => {
    formModel.value = Object.assign(newVal);
  }, {deep: true})
  watch(() => formModel.value, (newVal) => {
    emit('update:modelValue', newVal);
  }, {deep: true})

  const getInstance = () => {
    const form = elRef.value;
    if (!form) {
      error()
    }

    return form;
  };

  const methods = {
    toggleAdvanced: () => getActionProps.isAdvanced = !getActionProps.isAdvanced,
    validate: () => elRef.value.validate(),
    validateField: () => elRef.value.validateField(),
    resetFields: () => elRef.value.resetFields(),
    clearValidate: () => elRef.value.clearValidate(),
    handleSubmit: () => elRef.value.submit(),
    handleReset: () => elRef.value.resetFields(),
  }

  return {
    elRef,
    methods,
    defaultColProps,
  }
}