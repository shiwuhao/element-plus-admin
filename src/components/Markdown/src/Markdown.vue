<template>
  <div id="vditor"></div>
</template>

<script>
import Vditor from 'vditor';
import 'vditor/dist/index.css';
import {onMounted, onUnmounted, watch, nextTick} from "vue";

export default {
  name: "CodeEditor",
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, {emit}) {
    let editor;

    onMounted(() => {
      editor = new Vditor('vditor', {
        after: () => {
          nextTick(() => {
            editor.setValue(props.modelValue)
          })
        },
        input: (value) => {
          emit('update:modelValue', value);
        },
        ...props.options,
      })
    });

    watch(() => props.modelValue, (newVal) => {
      if (newVal !== editor.getValue()) {
        editor.setValue(newVal);
      }
    })

    function getInstance() {
      return editor;
    }

    onUnmounted(() => {
      editor = null;
    });

    return {
      getInstance,
    }
  },
}
</script>

<style scoped>

</style>