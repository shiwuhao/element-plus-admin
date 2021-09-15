import axios from "@/utils/axios";

const listApi = (query = {}) => axios.get('/permissions', {params: query});
const childrenListApi = (pid = {}) => axios.get('/permissions', {params: {pid: pid}});
const itemApi = (item = {}) => axios.get(`/permissions/${item.id}`);
const updateApi = (item = {}) => axios.put(`/permissions/${item.id}`, {
  pid: item.pid,
  type: item.type,
  name: item.name,
  title: item.title,
  url: item.url,
  icon: item.icon,
  status: item.status,
});
const storeApi = (item = {}) => axios.post(`/permissions`, {
  pid: item.pid,
  type: item.type,
  name: item.name,
  title: item.title,
  url: item.url,
  icon: item.icon,
  status: item.status,
});
const deleteApi = (item = {}) => axios.delete(`/permissions/${item.id}`);

const autoGenerateApi = (item = {}) => axios.post(`/permissions/auto`);

export {
  listApi,
  itemApi,
  updateApi,
  storeApi,
  deleteApi,
  childrenListApi,
  autoGenerateApi,
}