<template>
  <div></div>
</template>
<script>
import {useRouter} from 'vue-router'
import {unref} from "vue";

export default {
  setup() {
    const {currentRoute, replace} = useRouter();
    const {params, query} = unref(currentRoute);
    const {path} = params;
    replace({path: '/' + path, query})
  },
}
</script>
