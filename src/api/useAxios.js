import axios from '@/utils/axios';
import {reactive, toRefs, isRef} from "vue";

const sleep = (time = 0) => new Promise(resolve => setTimeout(resolve, time))

function filterParams(params) {
  const _params = {};
  Object.keys(params).forEach(key => {
    const val = params[key]
    _params[key] = isRef(val) ? val.value : val;
  })
  return _params;
}

export function useAxios({params = {}, data = {}, ...otherOptions}) {
  const state = reactive({
    response: '',
    data: {},
    error: false,
    loading: false,
    finished: false,
  })

  const fetch = async () => {
    const _params = filterParams(params);
    const _data = filterParams(data);
    const _options = {...otherOptions, ...{params: _params, data: _data}}

    state.loading = true;
    try {
      state.data = await axios.request(_options).then(r => r.data);
    } catch (e) {
      state.error = e;
    }
    state.loading = false;
    state.finished = true;
  }

   fetch();

  return {
    ...toRefs(state),
    fetch,
  }
}