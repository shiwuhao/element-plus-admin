<template>
  <BasicForm class="query-form" v-bind="$props" :schemas="schemaOptions" :action-props="actionProps"></BasicForm>
</template>

<script>
import {BasicForm} from '@/components/Form';
import {reactive, ref, toRefs} from "vue";

export default {
  name: "BasicQuery",
  components: {BasicForm},
  props: {
    modelValue: {
      type: Object,
      default: () => ({})
    },
    schemas: {
      type: Array,
      default: () => ([]),
    },
    colProps: {
      type: Object,
      default: () => {
        return {xs: 24, sm: 12, md: 12, lg: 12, xl: 6};
      },
    },
    isAdvanced: {
      type: Boolean,
      default: false,
    },
    advanced: {
      type: Boolean,
      default: false,
    },
    advancedLength: {
      type: [Number, String],
      default: 3,
    }
  },
  setup(props) {
    const {schemas, colProps, isAdvanced, advanced, advancedLength} = toRefs(props);
    const state = reactive({
      actionProps: {
        isAdvanced: isAdvanced,
        showAdvancedButton: advanced,
        showAdvancedLength: advancedLength,
        colProps: colProps,
        actionPosition: 'left',
        resetButtonText: '重置',
        submitButtonText: '搜索',
        position: 'left',
      },
    })

    const schemaOptions = ref([]);
    schemas.value.forEach(item => {
      schemaOptions.value.push({colProps: colProps.value, ...item});
    })

    return {
      ...toRefs(state),
      schemaOptions,
    }
  }
}
</script>

<style lang="scss" scoped>
.query-form {
  :deep(.el-form-item) {
    margin-bottom: 5px !important;
  }
}
</style>