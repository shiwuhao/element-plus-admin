import axios from "@/utils/axios";
import {useResourceApi} from "@/composables/useResourceApi.js";

export const fetchList = (query = {}) => axios.get('/roles', {params: query});
export const fetchItem = (item = {}) => axios.get(`/roles/${item.id}`);
export const fetchUpdate = (item = {}) => axios.put(`/roles/${item.id}`, {
  id: item.id,
  name: item.name,
  title: item.title,
  remark: item.remark,
  status: item.status,
  permission_ids: item.permission_ids,
});
export const fetchStore = (item = {}) => axios.post(`/roles`, {
  name: item.name,
  title: item.title,
  remark: item.remark,
  status: item.status,
  permission_ids: item.permission_ids,
});
export const fetchDelete = (item = {}) => axios.delete(`/roles/${item.id}`);

export const useFetchResource = (options = {}) => useResourceApi({
  listApi: fetchList,
  itemApi: fetchItem,
  updateApi: fetchUpdate,
  storeApi: fetchStore,
  deleteApi: fetchDelete,
  ...options
});