import axios from "@/utils/axios";

const listApi = (query = {}) => axios.get('/permissions', {params: query});
const itemApi = (item = {}) => axios.get(`/permissions/${item.id}`);
const updateApi = (item = {}) => axios.put(`/permissions/${item.id}`, {
  name: item.name,
  title: item.title,
  remark: item.remark,
  status: item.status,
});
const storeApi = (item = {}) => axios.post(`/permissions`, {
  name: item.name,
  title: item.title,
  remark: item.remark,
  status: item.status,
});
const deleteApi = (item = {}) => axios.delete(`/permissions/${item.id}`);

export {
  listApi,
  itemApi,
  updateApi,
  storeApi,
  deleteApi,
}