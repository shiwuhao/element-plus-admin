import axios from "@/utils/axios";
import useFetch from "@/composables/useFetch.js";
import {reactive} from "vue";

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

export const useFetchList = (query = {}) => {
  const payload = reactive({aa: 11})
  return useFetch(ApiEnum.list.url).post(payload).json();
};

export const useFetchStore = (fetchOptions = {}, options = {}) => {
  return useFetch(ApiEnum.store.url, fetchOptions, options).json();
};

export const useFetchItem = ((opt = {}) => {
  const {url, ...options} = {...ApiEnum.item, ...opt};
  return useFetch(url, options).json();
});

export const useFetchUpdate = ((opt = {}) => {
  const {url, ...options} = {...ApiEnum.store, ...opt};
  return useFetch(ApiEnum.update.url, options).json();
});

export const useFetchDelete = ((opt = {}) => {
  const {url, ...options} = {...ApiEnum.store, ...opt};
  return useFetch(ApiEnum.update.url, options).json();
});

export const useFetchResource = () => {

}