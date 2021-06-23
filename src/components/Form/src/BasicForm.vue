<template>
  <el-form :model="formModel" v-bind="{...$props,...$attrs}">
    <el-row :gutter="30">
      <template v-for="schema in getSchema" :key="schema.field">
        <FormItem :schema="schema" v-model="formModel[schema.field]"></FormItem>
      </template>
      <FormAction></FormAction>
    </el-row>
  </el-form>
</template>

<script>
import FormItem from "./components/FormItem";
import FormAction from "./components/FormAction";
import {toRefs, watch} from "vue";


export default {
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
  },
  setup(props, {emit}) {
    const {modelValue, schemas = []} = toRefs(props);
    const getSchema = schemas;
    const formModel = modelValue;

    watch(() => modelValue.value, (newVal) => {
      formModel.value = Object.assign(newVal);
    }, {deep: true})

    watch(() => formModel.value, (newVal) => {
      emit('update:modelValue', newVal);
    }, {deep: true})

    return {
      getSchema,
      formModel,
    }
  }
}
</script>

<style scoped>

</style>