import {createFetch} from "@vueuse/core";
import store from "@/store";

const useFetch = createFetch({
  baseUrl: import.meta.env.VITE_API_URL,
  options: {
    async beforeFetch({options}) {
      options.headers.Accept = 'text/json';
      const token = store.getters.getAccessToken;
      if (token) {
        options.headers.Authorization = `Bearer ${token}`
      }

      return {options}
    },
  },
  fetchOptions: {
    mode: 'cors',
  },
})

export default useFetch;