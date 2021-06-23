<template>
  <el-col v-bind="colProps">
    <el-form-item v-bind="getFormProps">
      <component :is="getComponent" v-model="VModel" v-bind:="getComponentProps"></component>
    </el-form-item>
  </el-col>
</template>

<script>
import {computed, toRefs, unref, ref, watch} from 'vue'
import {isFunction} from "@/utils/is";
import {componentMap} from '../componentMap'

export default {
  name: "BasicFormItem",
  props: {
    modelValue: {
      type: [String, Array, Number, Object],
      default: '',
    },
    schema: {
      type: Object,
      default: () => ({})
    },
    formProps: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, {emit}) {
    const {schema, modelValue} = toRefs(props);
    const {component, componentProps = {}, colProps = {}, formProps = {}, label} = unref(schema);
    const getComponentProps = computed(() => {
      if (!isFunction(componentProps)) {
        return componentProps;
      }
      return componentProps({schema}) ?? {};
    })

    const getFormProps = computed(() => {
      return {...{label: label}, ...formProps}
    });

    const getComponent = componentMap.get(component);
    const VModel = ref(modelValue.value)

    watch(() => modelValue.value, (newVal) => {
      VModel.value = newVal;
    })

    watch(() => VModel.value, (newVal) => {
      emit('update:modelValue', newVal);
    })

    return {
      VModel,
      component,
      getComponent,
      getComponentProps,
      getFormProps,
      colProps
    }
  },
}
</script>

<style scoped>

</style>