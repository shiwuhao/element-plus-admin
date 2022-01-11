import axios from "@/utils/axios";
import {reactive} from "vue";
import {listToTree} from "@/utils";
import {useResourceApi} from "@/composables/useResourceApi.js";

const allApi = (query = {}) => axios.get('/menus/all', {params: query});
const listApi = (query = {}) => axios.get('/menus', {params: query});
const itemApi = (item = {}) => axios.get(`/menus/${item.id}`);
const updateApi = (item = {}) => axios.put(`/menus/${item.id}`, {
  pid: item.pid,
  type: item.type,
  name: item.name,
  label: item.label,
  url: item.url,
  icon: item.icon,
  status: item.status,
});
const storeApi = (item = {}) => axios.post(`/menus`, {
  pid: item.pid,
  type: item.type,
  name: item.name,
  label: item.label,
  url: item.url,
  icon: item.icon,
  status: item.status,
});
const deleteApi = (item = {}) => axios.delete(`/menus/${item.id}`);

const resourceApi = useResourceApi({
  listApi,
  itemApi,
  updateApi,
  storeApi,
  deleteApi,
  item: {type: 'route'},
  refreshAfterConfirm: false,
});

export function useFetchMenus() {
  const state = reactive({
    menus: [],
    treeMenus: [],
  })

  const fetchAll = () => {
    allApi().then(({data: {data}}) => {
      state.menus = data;
      state.treeMenus = [{id: 0, pid: 0, children: listToTree(data)}]
    })
  }
}

export {
  listApi,
  itemApi,
  updateApi,
  storeApi,
  deleteApi,
}