<template>
  <div ref="el"></div>
</template>

<script>
import CodeMirror from 'codemirror';
import {onMounted, onUnmounted, ref, watch} from "vue";

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material-palenight.css';
// modes
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/css/css.js';
import 'codemirror/mode/htmlmixed/htmlmixed.js';

export default {
  name: "CodeEditor",
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    mode: {
      type: String,
      default: 'javascript',
    },
    readonly: {
      type: Boolean,
      default: false,
    }
  },
  setup(props) {
    let el = ref();
    let editor;

    onMounted(() => {
      editor = CodeMirror(el.value, {
        value: props.modelValue,
        mode: props.mode,
        readOnly: props.readonly,
        tabSize: 2,
        // theme: 'idea',
        lineWrapping: true,
        lineNumbers: true,
        autoCloseBrackets: true,
        autoCloseTags: true,
        foldGutter: true,
        fullScreen: true,
        gutters: ['CodeMirror-linenumbers'],
        height: 1000
      });
    })

    watch(() => props.modelValue, (newVal) => {
      editor.setValue(newVal);
    })

    onUnmounted(() => {
      editor = null;
    });

    return {
      el,
    }
  },
}
</script>

<style scoped>

</style>