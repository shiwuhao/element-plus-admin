import axios from "@/utils/axios";
import useFetch from "@/composables/useFetch.js";

const listApi = (query = {}) => axios.get('/users', {params: query});
const itemApi = (item = {}) => axios.get(`/users/${item.id}`);
const updateApi = (item = {}) => axios.put(`/users/${item.id}`, {
  id: item.id,
  username: item.username,
  nickname: item.nickname,
  password: item.password,
  status: item.status,
  role_ids: item.role_ids,
});
const storeApi = (item = {}) => axios.post(`/users`, {
  username: item.username,
  nickname: item.nickname,
  password: item.password,
  status: item.status,
  role_ids: item.role_ids,
});
const deleteApi = (item = {}) => axios.delete(`/users/${item.id}`);

export {
  listApi,
  itemApi,
  updateApi,
  storeApi,
  deleteApi,
}

const ApiEnum = {
  list: {url: '/users', method: 'get'},
  store: {url: '/users', method: 'post'},
  item: {url: '/users/:id', method: 'get'},
  update: {url: '/users/:id', method: 'put'},
  delete: {url: '/users/:id', method: 'delete'},
}

export const useFetchList = (body) => {
  const {url, ...options} = ApiEnum.list;
  console.log({...options, body})
  return useFetch(url, {...options, body});
}