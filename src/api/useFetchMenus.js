import axios from "@/utils/axios";
import {useResourceApi} from "@/composables/useResourceApi.js";
import {listToTree} from "@/utils";
import { ref} from "vue";

export const fetchAll = (query = {}) => axios.get('/menus/all', {params: query});
export const fetchList = (query = {}) => axios.get('/menus', {params: query});
export const fetchItem = (item = {}) => axios.get(`/menus/${item.id}`);
export const fetchUpdate = (item = {}) => axios.put(`/menus/${item.id}`, {
  pid: item.pid,
  type: item.type,
  name: item.name,
  label: item.label,
  url: item.url,
  icon: item.icon,
  status: item.status,
});
export const fetchStore = (item = {}) => axios.post(`/menus`, {
  pid: item.pid,
  type: item.type,
  name: item.name,
  label: item.label,
  url: item.url,
  icon: item.icon,
  status: item.status,
});
export const fetchDelete = (item = {}) => axios.delete(`/menus/${item.id}`);

// 树形列表
export const useFetchTreeList = () => {
  const lists = ref([]);

  const fetch = () => {
    fetchAll().then(({data: {data}}) => {
      data.unshift({id: 0, pid: 0, name: 'root', label: 'Root'})
      lists.value = listToTree(data);
    });
  }

  return {
    lists,
    fetch,
    fetchAll,
  };
}

export const useFetchResource = (options = {}) => useResourceApi({
  listApi: fetchList,
  itemApi: fetchItem,
  updateApi: fetchUpdate,
  storeApi: fetchStore,
  deleteApi: fetchDelete,
  ...options
});