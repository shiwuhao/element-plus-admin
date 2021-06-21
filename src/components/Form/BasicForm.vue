<template>
  {{ formModel }}
  <el-form :model="formModel" v-bind="props">
    <template v-for="schema in getSchema" :key="schema.field">
      <FormItem :schema="schema" v-model="formModel[schema.field]"></FormItem>
    </template>
  </el-form>
</template>

<script>
import {getFormData} from "@/views/component/form/formData";
import FormItem from "@/components/Form/components/FormItem";
import {computed, ref, reactive, watch} from "vue";


export default {
  name: "BasicForm",
  components: {FormItem},
  props: {
    model: {
      type: Object,
      default: () => ({})
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
    const getSchema = getFormData();
    const formModel = ref({});

    watch(() => formModel.value, (newVal) => {
      console.log(111);
      emit('update:modelValue', newVal);
    }, {deep: true})

    return {
      props,
      getSchema,
      formModel,
    }
  }
}
</script>

<style scoped>

</style>