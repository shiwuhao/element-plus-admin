<template>
  <el-form :model="formModel" v-bind="{...$props,...$attrs}">
    <el-row :gutter="30">
      <template v-for="(schema,index) in getSchema" :key="schema.field">
        <FormItem :schema="schema" v-model="formModel[schema.field]"
                  v-show="showAdvancedButton ? index < showAdvancedLength || getActionProps.isAdvanced : true"></FormItem>
      </template>
      <FormAction v-bind="getActionProps" @toggle-advanced="toggleAdvanced">
        <template #[item]="data" v-for="item in ['resetBefore', 'submitBefore', 'advanceBefore', 'advanceAfter']">
          <slot :name="item" v-bind="data"></slot>
        </template>
      </FormAction>
    </el-row>
  </el-form>
</template>

<script>
import FormItem from "./components/FormItem";
import FormAction from "./components/FormAction";
import {ref, toRefs, reactive, unref, watch} from "vue";


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
    actionProps: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, {emit}) {
    const {modelValue, schemas = [], actionProps = {}} = toRefs(props);
    const getSchema = schemas;
    const formModel = modelValue;
    const {showAdvancedButton = false, showAdvancedLength = 3} = unref(actionProps);
    const isAdvanced = ref(false);
    const getActionProps = reactive({
      isAdvanced: false,
      ...unref(actionProps),
    });

    watch(() => modelValue.value, (newVal) => {
      formModel.value = Object.assign(newVal);
    }, {deep: true})

    watch(() => formModel.value, (newVal) => {
      emit('update:modelValue', newVal);
    }, {deep: true})

    function toggleAdvanced() {
      getActionProps.isAdvanced = !getActionProps.isAdvanced
    }

    return {
      getSchema,
      formModel,
      showAdvancedButton,
      showAdvancedLength,
      getActionProps,
      toggleAdvanced
    }
  }
}
</script>

<style scoped>

</style>