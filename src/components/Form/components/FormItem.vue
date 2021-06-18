<template>
  <el-form-item v-bind="getFormProps">
    <component :is="getComponent" v-model="VModel" v-bind:="getComponentProps" v-if="component === 'Select'">
      <el-option v-for="(option,index) in getComponentProps.options" :key="index" v-bind="option"></el-option>
    </component>
    <component :is="getComponent" v-model="VModel" v-bind:="getComponentProps" v-else></component>
  </el-form-item>
</template>

<script>
import {computed, toRefs, unref, ref, watch} from 'vue'
import {isFunction} from "@/utils/is";
import {componentMap} from './componentMap'

export default {
  name: "BasicFormItem",
  props: {
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
    const {schema, formProps} = toRefs(props)
    const {component, componentProps = {}} = unref(schema);
    const getComponentProps = computed(() => {
      if (!isFunction(componentProps)) {
        return componentProps;
      }
      return componentProps({schema}) ?? {};
    })

    const getFormProps = formProps;
    const getComponent = componentMap.get(component);
    const VModel = ref('')

    watch(() => VModel.value, (newVal) => {
      emit('update:modelValue', newVal);
    })

    return {
      VModel,
      component,
      getComponent,
      getComponentProps,
      getFormProps
    }
  },
}
</script>

<style scoped>

</style>