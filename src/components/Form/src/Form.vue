<template>
  <el-form ref="elForm" :model="formModel" v-bind="{...$props,...$attrs}">
    <el-row :gutter="30" v-if="getSchema.length > 0">
      <FormItem v-for="(schema,index) in getSchema"
                :key="index"
                :schema="schema"
                v-model="formModel[schema['field']]"
                v-show="showAdvancedButton ? index < showAdvancedLength || getIsAdvanced : true">
        <template #[item]="data" v-for="item in Object.keys($slots)">
          <slot :name="item" v-bind="{...schema,...data}"></slot>
        </template>
      </FormItem>
      <FormAction v-bind="getActionProps" @toggle-advanced="toggleAdvanced">
        <template v-for="item in ['resetBefore', 'submitBefore', 'advanceBefore', 'advanceAfter']" #[item]="data">
          <slot :name="item" v-bind="data"></slot>
        </template>
      </FormAction>
    </el-row>
    <el-empty v-else></el-empty>
  </el-form>
</template>

<script>
import FormItem from "./components/FormItem.vue";
import FormAction from "./components/FormAction.vue";
import {defineComponent, toRefs, unref, watch, provide, ref, computed} from "vue";

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
    actionProps: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ['reset', 'submit', 'toggle-advanced'],
  setup(props, {emit}) {
    const {modelValue, schemas = [], actionProps = {}} = toRefs(props);
    const getSchema = schemas;
    const formModel = modelValue;
    const {showAdvancedButton = false, showAdvancedLength = 3} = unref(actionProps);
    const elForm = ref(null);

    const getIsAdvanced = ref(false);
    const getActionProps = computed(() => {
      return {isAdvanced: getIsAdvanced.value, ...unref(actionProps)};
    });

    watch(() => modelValue.value, (newVal) => {
      formModel.value = Object.assign(newVal);
    }, {deep: true})

    watch(() => formModel.value, (newVal) => {
      emit('update:modelValue', newVal);
    }, {deep: true})

    const toggleAdvanced = () => {
      getIsAdvanced.value = !getIsAdvanced.value;
      emit('toggle-advanced', getIsAdvanced.value);
    }
    const validate = (fn) => elForm.value.validate(fn);
    const validateField = (fn) => elForm.value.validateField(fn);
    const resetFields = () => elForm.value.resetFields();
    const scrollToField = (fn) => elForm.value.scrollToField(fn);
    const clearValidate = (fn) => elForm.value.clearValidate(fn);

    const handleSubmit = () => {
      emit('submit');
    }
    const handleReset = () => {
      elForm.value.resetFields();
      emit('reset');
    }

    provide('handleReset', handleReset);
    provide('handleSubmit', handleSubmit)

    return {
      getSchema,
      formModel,
      showAdvancedButton,
      showAdvancedLength,
      getActionProps,
      getIsAdvanced,
      elForm,
      toggleAdvanced,
      validate,
      validateField,
      resetFields,
      clearValidate,
      scrollToField
    }
  },
})
</script>