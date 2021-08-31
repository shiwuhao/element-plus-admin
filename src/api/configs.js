import axios from "@/utils/axios";

const configItemsApi = (query = {}) => axios.get('/configs/items', {params: query});
const listApi = (query = {}) => axios.get('/configs', {params: query});
const itemApi = (item = {}) => axios.get(`/configs/${item.id}`);
const updateApi = (item = {}) => axios.put(`/configs/${item.id}`, {
  id: item.id,
  group: item.group,
  type: item.type,
  component: item.component,
  name: item.name,
  title: item.title,
  extra: item.extra,
  value: item.value,
});
const storeApi = (item = {}) => axios.post(`/configs`, {
  group: item.group,
  type: item.type,
  component: item.component,
  name: item.name,
  title: item.title,
  extra: item.extra,
  value: item.value,
});
const deleteApi = (item = {}) => axios.delete(`/configs/${item.id}`);

const groupListApi = (query = {}) => axios.get('/configs/group', {params: query});
const groupUpdateApi = (item = {}) => axios.put(`/configs/group`, item);

export {
  configItemsApi,
  listApi,
  itemApi,
  updateApi,
  storeApi,
  deleteApi,
  groupListApi,
  groupUpdateApi
}