import axios from "@/utils/axios";

export const fetchList = (query = {}) => axios.get('/permissions', {params: query});
export const fetchUpdate = (item = {}) => axios.put(`/permissions/${item.id}`, {
  drop_id: item.dropId,
  drop_type: item.dropType,
});