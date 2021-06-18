<template>
  <el-form-item v-bind="getFormProps">
    <el-select v-if="getComponent === 'select'" v-bind="getComponentProps" v-model="VModel">
      <el-option v-for="(option,index) in getComponentProps.options" :key="index" v-bind="option"></el-option>
    </el-select>
    <Comp v-else v-bind="getComponentProps" v-model="VModel"/>
  </el-form-item>
</template>

<script>
import {computed, toRefs, unref, h, ref, watch} from 'vue'
import {isFunction} from "@/utils/is";
import {lowerFirst} from 'lodash'
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
  setup(props, {emit, slots}) {
    console.log('slots', unref(props))
    const {schema, formProps} = toRefs(props)
    const {component, componentProps = {}} = unref(schema);
    const getComponent = computed(() => lowerFirst(component));
    const getComponentProps = computed(() => {
      if (!isFunction(componentProps)) {
        return componentProps;
      }
      return componentProps({schema}) ?? {};
    })

    const getFormProps = formProps;
    console.log('getComponentProps', getComponentProps)

    const Comp = componentMap.get(unref(schema).component);
    const VModel = ref('')

    watch(() => VModel.value, (newVal) => {
      emit('update:modelValue', newVal);
    })
    // const getComp = h(<Comp {...unref(getComponentProps)}></Comp>);

    // return () => h(<Comp {...unref(getComponentProps)} />);
    return {
      VModel,
      Comp,
      getComponent,
      getComponentProps,
      getFormProps
    }
  },
}
</script>

<style scoped>

</style>