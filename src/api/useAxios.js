import axios from '@/utils/axios';
import {reactive, toRefs} from "vue";

const sleep = (time = 0) => new Promise(resolve => setTimeout(resolve, time))

export function useAxios(options) {
  const state = reactive({
    response: {},
    data: {},
    error: false,
    loading: false,
    finished: false,
  })

  const fetch = async () => {
    state.loading = true;
    // await sleep(1000);
    await axios.request(options).then(response => {
      state.response = response;
      state.data = response.data;
    }).catch(error => {
      state.error = error;
    }).finally(() => {
      state.loading = false
      state.finished = true
    })
  }

  fetch().then(r => r);

  return {
    ...toRefs(state),
    fetch,
  }
}