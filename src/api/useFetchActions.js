import axios from "@/utils/axios";
import {useResourceApi} from "@/composables/useResourceApi.js";
import {listToTree} from "@/utils";
import {ref} from "vue";

export const fetchAll = (query = {}) => axios.get('/actions/all', {params: query});
export const fetchList = (query = {}) => axios.get('/actions', {params: query});
export const fetchItem = (item = {}) => axios.get(`/actions/${item.id}`);
export const fetchUpdate = (item = {}) => axios.put(`/actions/${item.id}`, {
  name: item.name,
  label: item.label,
  method: item.method,
  uri: item.uri,
});
export const fetchStore = (item = {}) => axios.post(`/actions`, {
  name: item.name,
  label: item.label,
  method: item.method,
  uri: item.uri,
});
export const fetchDelete = (item = {}) => axios.delete(`/actions/${item.id}`);

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