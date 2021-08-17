import {ref, onMounted, watch, reactive} from 'vue'
import {toRefs} from "vue";
import axios from "@/utils/axios";

const Api = {
  CONFIG_ITEMS: {url: '/configs/items', method: 'get'},
  LIST: {url: '/configs', method: 'get'},
  DETAIL: {url: '/configs/:id', method: 'get'},
  STORE: {url: '/configs', method: 'post'},
  UPDATE: {url: '/configs/:id', method: 'put'},
  DELETE: {url: '/configs/:id', method: 'delete'},
}

//全局配置项
export function useFetchItemList() {
  const state = reactive({
    data: [],
  })
  const getConfigList = async () => {
    const {data: response} = await axios.request({...Api.CONFIG_ITEMS});
    state.data = response.data;
  }

  onMounted(getConfigList);

  return {
    ...toRefs(state),
    getConfigList,
  }
}

export function useFetchList(searchQuery) {
  const state = reactive({
    data: [],
    paginate: {},
  })
  const getConfigList = async () => {
    const {data: response} = await axios.request({...Api.LIST, params: searchQuery});
    state.data = response.data;
    state.paginate = response.meta;
  }

  onMounted(getConfigList);
  watch(searchQuery, getConfigList);

  return {
    ...toRefs(state),
    getConfigList,
  }
}

export function useFetchDetail(params) {
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

export function useFetchStore(params) {
  const data = ref({});
  const getFetchStore = async () => {
    const {data: response} = await axios.request({...Api.STORE, ...{params}})
    data.value = response;
  }

  return {
    data,
    getFetchStore
  }
}

export function useFetchUpdate(params) {
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

export function useFetchDelete(params) {
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