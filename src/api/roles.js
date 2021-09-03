import axios from "@/utils/axios";

const listApi = (query = {}) => axios.get('/roles', {params: query});
const itemApi = (item = {}) => axios.get(`/roles/${item.id}`);
const updateApi = (item = {}) => axios.put(`/roles/${item.id}`, {
  id: item.id,
  name: item.name,
  title: item.title,
  remark: item.remark,
  status: item.status,
  permissions: item.permissions,
});
const storeApi = (item = {}) => axios.post(`/roles`, {
  name: item.name,
  title: item.title,
  remark: item.remark,
  status: item.status,
  permissions: item.permissions,
});
const deleteApi = (item = {}) => axios.delete(`/roles/${item.id}`);

export {
  listApi,
  itemApi,
  updateApi,
  storeApi,
  deleteApi,
}