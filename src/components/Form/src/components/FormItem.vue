<template>
  <el-col v-bind="colProps" v-show="getIsShow">
    <el-form-item v-bind="getFormProps">
      <component v-if="!schema.slot"
                 :is="getComponent"
                 v-model="VModel"
                 v-bind="getComponentProps"
                 class="w-full"></component>
      <slot v-else :name="schema.slot" v-bind="{schema:$props['schema']}"></slot>
      <template #[item]="data" v-for="item in Object.keys($slots)">
        <slot :name="item" v-bind="data"></slot>
      </template>
    </el-form-item>
  </el-col>
</template>

<script>
import {computed, toRefs, unref, ref, watch, inject, h} from 'vue'
import {isFunction, isBoolean} from "@/utils/is.js";
import {componentMap} from '../componentMap.js'
import {useVModel} from "@vueuse/core";

export default {
  name: "BasicFormItem",
  props: {
    modelValue: {
      type: [String, Array, Number, Object, Boolean],
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
  emits: ['update:modelValue'],
  setup(props, {emit}) {
    const {schema, modelValue} = toRefs(props);
    const defaultColProps = {xs: 24, sm: 24, md: 12, lg: 12, xl: 12};
    const {component, colProps = defaultColProps, slot, render} = unref(schema);

    const getComponentProps = computed(() => {
      const {componentProps = {}, placeholder} = unref(schema);
      if (!isFunction(componentProps)) {
        const {style = {}} = componentProps;
        return {placeholder, ...componentProps, style: style};
      }
      return componentProps({schema}) ?? {};
    })

    const getFormProps = computed(() => {
      const {label, field, formProps = {}} = unref(schema);
      return {...{label: label, prop: field}, ...formProps}
    });

    const getComponent = isFunction(render) ? render(h, modelValue, schema) : componentMap.get(component);

    const VModel = useVModel(props, 'modelValue', emit);

    const getIsShow = computed(() => {
      const {show, isAdvanced} = unref(schema);
      let isShow = true;
      const {showAdvancedButton} = props.formProps;
      const schemaIsAdvanced = showAdvancedButton ? !!isAdvanced : true;
      if (isBoolean(show)) {
        isShow = show;
      }
      if (isFunction(show)) {
        isShow = show(schema, VModel);
      }

      return isShow && schemaIsAdvanced;
    });

    return {
      VModel,
      component,
      getComponent,
      getComponentProps,
      getFormProps,
      getIsShow,
      colProps,
      slot,
    }
  },
}
</script>

<style scoped>

</style>