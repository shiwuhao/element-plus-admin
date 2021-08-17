import {ref, onMounted, watch, reactive} from 'vue'
import {toRef, toRefs} from "vue";
import axios from "@/utils/axios";
import store from "@/store";
import {useAxios} from "@vueuse/integrations";

const Api = {
  CONFIG_ITEMS: {url: '/configs/items', method: 'get'},
  LIST: {url: '/configs', method: 'get'},
  DETAIL: {url: '/configs/:id', method: 'get'},
  STORE: {url: '/configs', method: 'POST'},
  UPDATE: {url: '/configs/:id', method: 'put'},
  DELETE: {url: '/configs/:id', method: 'delete'},
}

export function useConfigRequest() {

  // 全局配置项
  const fetchItemList = () => {
    const state = reactive({
      data: [],
    })
    const getConfigList = async () => {
      const {data: response} = await axios.request({...Api.CONFIG_ITEMS});
      state.data = response.data;
      store.commit('config/setConfig', response.data);
    }

    onMounted(getConfigList);

    return {
      ...toRefs(state),
      getConfigList,
    }
  }

  // 列表
  // const fetchList = (searchQuery) => {
  //   const state = reactive({
  //     data: [],
  //     paginate: {},
  //   })
  //   const getConfigList = async () => {
  //     const {data: response} = await axios.request({...Api.LIST, params: searchQuery});
  //     state.data = response.data;
  //     state.paginate = response.meta;
  //   }
  //
  //   onMounted(getConfigList);
  //   watch(searchQuery, getConfigList);
  //
  //   return {
  //     ...toRefs(state),
  //     getConfigList,
  //   }
  // }

  const fetchList = (searchQuery) => {
    const state = reactive({
      data: [],
      paginate: {},
    })
    const getConfigList = async () => {
      const {data: response} = useAxios(Api.LIST.url, {}, axios)
      const {data, meta} = toRefs(response);

      console.log(response, data, meta)
      // state.data = response.data;
      // state.paginate = response.meta;
    }

    onMounted(getConfigList);
    watch(searchQuery, getConfigList);

    return {
      ...toRefs(state),
      getConfigList,
    }
  }

  // 详情
  const fetchDetail = (params) => {
    const data = ref();
    const getConfigDetail = async () => {
      const {data: response} = await axios.request({...Api.DETAIL, ...{params}})
      data.value = response;
    }

    onMounted(getConfigDetail);
    watch(params, getConfigDetail);

    return {
      data,
      getConfigDetail
    }
  }

  // 新增
  const fetchStore = async (params) => {
    const data = ref({});
    const getFetchStore = async () => {
      const {data: response} = await axios.request({...Api.STORE, ...{data: params}})
      data.value = response;
    }
    await getFetchStore();
    return {
      data,
      getFetchStore
    }
  }

  // 更新
  const fetchUpdate = (params) => {
    const data = ref({});
    const getFetchUpdate = async () => {
      const {data: response} = await axios.request({...Api.UPDATE, ...{params}})
      data.value = response;
    }

    return {
      data,
      getFetchUpdate
    }
  }

  // 删除
  const fetchDelete = (params) => {
    const data = ref({});
    const getFetchDelete = async () => {
      const {data: response} = await axios.request({...Api.DELETE, ...{params}})
      data.value = response;
    }

    return {
      data,
      getFetchDelete
    }
  }

  return {
    fetchItemList,
    fetchList,
    fetchDetail,
    fetchStore,
    fetchUpdate,
    fetchDelete
  }
}