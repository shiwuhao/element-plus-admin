import axios from "@/utils/axios";

const listApi = (query) => axios.get('/configs', {params: query});
const detailApi = (item) => axios.get(`/configs/${item.id}`);
const updateApi = (item) => axios.put(`/configs/${item.id}`, item);
const storeApi = (item) => axios.post(`/configs`, item);
const deleteApi = (item) => axios.delete(`/configs/${item.id}`);

export default {
  listApi,
  detailApi,
  updateApi,
  storeApi,
  deleteApi,
}