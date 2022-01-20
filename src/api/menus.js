import axios from "@/utils/axios";
import {useResourceApi} from "@/composables/useResourceApi.js";

export const fetchList = (query = {}) => axios.get('/menus', {params: query});
export const fetchItem = (item = {}) => axios.get(`/menus/${item.id}`);
export const fetchUpdate = (item = {}) => axios.put(`/menus/${item.id}`, {
  pid: item.pid,
  type: item.type,
  name: item.name,
  label: item.label,
  url: item.url,
  icon: item.icon,
  status: item.status,
});
export const fetchStore = (item = {}) => axios.post(`/menus`, {
  pid: item.pid,
  type: item.type,
  name: item.name,
  label: item.label,
  url: item.url,
  icon: item.icon,
  status: item.status,
});
export const fetchDelete = (item = {}) => axios.delete(`/menus/${item.id}`);


export const useFetchResource = (options = {}) => useResourceApi({
  listApi: fetchList,
  itemApi: fetchItem,
  updateApi: fetchUpdate,
  storeApi: fetchStore,
  deleteApi: fetchDelete,
  ...options
});