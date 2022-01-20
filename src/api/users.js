import axios from "@/utils/axios";
import {useResourceApi} from "@/composables/useResourceApi.js";

export const fetchList = (query = {}) => axios.get('/users', {params: query});
export const fetchItem = (item = {}) => axios.get(`/users/${item.id}`);
export const fetchUpdate = (item = {}) => axios.put(`/users/${item.id}`, {
  id: item.id,
  username: item.username,
  nickname: item.nickname,
  password: item.password,
  status: item.status,
  role_ids: item.role_ids,
});
export const fetchStore = (item = {}) => axios.post(`/users`, {
  username: item.username,
  nickname: item.nickname,
  password: item.password,
  status: item.status,
  role_ids: item.role_ids,
});
export const fetchDelete = (item = {}) => axios.delete(`/users/${item.id}`);

export const useFetchResource = (options = {}) => useResourceApi({
  listApi: fetchList,
  itemApi: fetchItem,
  updateApi: fetchUpdate,
  storeApi: fetchStore,
  deleteApi: fetchDelete,
  ...options
});