<template>
  <div></div>
</template>
<script>
import {useRouter} from 'vue-router'

export default {
  setup() {
    const {currentRoute, replace} = useRouter();
    const {params, query} = currentRoute.value;
    const {path, _redirect_type = 'path'} = params;

    Reflect.deleteProperty(params, '_redirect_type');
    Reflect.deleteProperty(params, 'path');

    const _path = Array.isArray(path) ? path.join('/') : path;

    if (_redirect_type === 'name') {
      replace({name: _path, query, params})
    } else {
      replace({path: path.startsWith('/') ? path : '/' + path, query})
    }
  },
}
</script>
