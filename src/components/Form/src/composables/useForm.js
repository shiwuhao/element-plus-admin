import {reactive, ref, toRefs, unref, watch} from 'vue';

export function uesForm(props,) {
  const {modelValue, schemas = [], actionProps = {}, autoWidth} = toRefs(props);
  const getSchema = schemas;
  const formModel = modelValue;
  const {showAdvancedButton = false, showAdvancedLength = 3} = unref(actionProps);
  const elForm = ref(null);
  const getActionProps = reactive({isAdvanced: false, ...unref(actionProps)});

  watch(() => modelValue.value, (newVal) => {
    formModel.value = Object.assign(newVal);
  }, {deep: true})
  watch(() => formModel.value, (newVal) => {
    emit('update:modelValue', newVal);
  }, {deep: true})

  const methods = {
    toggleAdvanced: () => getActionProps.isAdvanced = !getActionProps.isAdvanced,
    validate: () => elForm.value.validate(),
    validateField: () => elForm.value.validateField(),
    resetFields: () => elForm.value.resetFields(),
    clearValidate: () => elForm.value.clearValidate(),
    handleSubmit: () => elForm.value.submit(),
    handleReset: () => elForm.value.resetFields(),
  }

  return {
    methods
  }
}