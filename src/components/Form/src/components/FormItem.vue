<template>
  <el-col v-bind="colProps" v-show="getIsShow">
    <el-form-item v-bind="getFormProps">
      <component v-if="!schema.slot" :is="getComponent" v-model="VModel" v-bind:="getComponentProps"
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
import {isFunction, isBoolean} from "@/utils/is";
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
    const defaultColProps = {xs: 24, sm: 24, md: 12, lg: 12, xl: 12};
    const {component, colProps = defaultColProps, slot, render} = unref(schema);
    const autoWidth = inject('autoWidth');

    const getComponentProps = computed(() => {
      const {componentProps = {}, placeholder} = unref(schema);
      if (!isFunction(componentProps)) {
        const {style = {}} = componentProps;
        if (autoWidth.value === true) {
          style['width'] = '100%';
        }
        return {placeholder, ...componentProps, style: style};
      }
      return componentProps({schema}) ?? {};
    })

    const getFormProps = computed(() => {
      const {label, field, formProps = {}} = unref(schema);
      return {...{label: label, prop: field}, ...formProps}
    });

    const getComponent = isFunction(render) ? render(h, modelValue, schema) : componentMap.get(component);
    const VModel = ref(modelValue.value);

    // watch(() => modelValue.value, (newVal) => {
    //   VModel.value = newVal;
    // })

    // watch(() => VModel.value, (newVal) => {
    //   emit('update:modelValue', newVal);
    // })

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
      autoWidth,
      slot,
    }
  },
}
</script>

<style scoped>

</style>