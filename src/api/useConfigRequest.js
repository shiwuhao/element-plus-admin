import {ref, onMounted, watch, reactive, unref, computed} from 'vue'
import {toRef, toRefs} from "vue";
import axios from "@/utils/axios";
import store from "@/store";
import {useAxios} from "./useAxios";

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
  const fetchList = (params) => {
    const state = reactive({
      data: null,
      paginate: null,
      loading: false,
    })

    const fetch = () => {
      const {data, loading} = useAxios('/configs', {params});
      state.data = computed(() => data.value.data);
      state.paginate = computed(() => data.value.meta);
      state.loading = loading;
    }

    onMounted(fetch);
    watch(params, fetch);

    return {
      ...toRefs(state),
      fetch
    }
  }

  // 详情
  const fetchDetail = (id) => {
    const state = reactive({
      data: {},
      loading: false,
    })

    const {data, loading} = useAxios(`/configs/${id}`);
    state.data = computed(() => ({...data.value.data}));
    state.loading = loading;

    return {
      ...toRefs(state)
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
  const fetchUpdate = async (params) => {
    const data = ref({});
    const getFetchUpdate = async () => {
      const {id} = params;
      const {data: response} = await axios.request({...Api.UPDATE, ...{params: {id}, data: params}})
      data.value = response;
    }
    await getFetchUpdate();
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