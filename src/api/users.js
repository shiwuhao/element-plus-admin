import axios from "@/utils/axios";

const listApi = (query = {}) => axios.get('/users', {params: query});
const itemApi = (item = {}) => axios.get(`/users/${item.id}`);
const updateApi = (item = {}) => axios.put(`/users/${item.id}`, {
  id: item.id,
  username: item.username,
  nickname: item.nickname,
  password: item.password,
  status: item.status,
  role_ids:item.role_ids,
});
const storeApi = (item = {}) => axios.post(`/users`, {
  username: item.username,
  nickname: item.nickname,
  password: item.password,
  status: item.status,
  role_ids:item.role_ids,
});
const deleteApi = (item = {}) => axios.delete(`/users/${item.id}`);

export {
  listApi,
  itemApi,
  updateApi,
  storeApi,
  deleteApi,
}