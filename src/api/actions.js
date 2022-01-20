import axios from "@/utils/axios";
import {useResourceApi} from "@/composables/useResourceApi.js";

export const fetchList = (query = {}) => axios.get('/actions', {params: query});
export const fetchItem = (item = {}) => axios.get(`/actions/${item.id}`);
export const fetchUpdate = (item = {}) => axios.put(`/actions/${item.id}`, {
  name: item.name,
  label: item.label,
  method: item.method,
  uri: item.uri,
});
export const fetchStore = (item = {}) => axios.post(`/actions`, {
  name: item.name,
  label: item.label,
  method: item.method,
  uri: item.uri,
});
export const fetchDelete = (item = {}) => axios.delete(`/actions/${item.id}`);

const autoGenerateApi = (item = {}) => axios.post(`/permissions/auto`);


export const useFetchResource = (options = {}) => useResourceApi({
  listApi: fetchList,
  itemApi: fetchItem,
  updateApi: fetchUpdate,
  storeApi: fetchStore,
  deleteApi: fetchDelete,
  ...options
});