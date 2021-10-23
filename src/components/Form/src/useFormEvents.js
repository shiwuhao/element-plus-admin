export function useFormEvents({formElRef, emit}) {
  const validate = (fn) => formElRef.value.validate(fn);
  const validateField = (fn) => formElRef.value.validateField(fn);
  const resetFields = () => formElRef.value.resetFields();
  const scrollToField = (fn) => formElRef.value.scrollToField(fn);
  const clearValidate = (fn) => formElRef.value.clearValidate(fn);

  return {
    validate,
    validateField,
    resetFields,
    scrollToField,
    clearValidate
  }
}