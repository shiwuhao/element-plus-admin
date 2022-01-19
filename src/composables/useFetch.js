import {createFetch} from "@vueuse/core";
import store from "@/store";

const useFetch = createFetch({
  baseUrl: import.meta.env.VITE_API_URL,
  options: {
    async beforeFetch({options}) {

      const headers = {Accept: 'text/json'};
      const token = store.getters.getAccessToken;
      if (token) headers.Authorization = `Bearer ${token}`;

      options.headers = {...options.headers, ...headers}


      return {options}
    },
    // async afterFetch(ctx) {
    //   console.log(ctx.data.json());
    //   return ctx.data.json();
    // },
  },
  fetchOptions: {
    mode: 'cors',
  },
})

export default useFetch;