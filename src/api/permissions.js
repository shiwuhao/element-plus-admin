import axios from "@/utils/axios";
import {listToTree} from "@/utils";
import {ref} from "vue";

export const fetchList = (query = {}) => axios.get('/permissions', {params: query});
export const fetchUpdate = (item = {}) => axios.put(`/permissions/${item.id}`, {
  drop_id: item.dropId,
  drop_type: item.dropType,
});


// 树形列表
export const useFetchListToTree = () => {
  const lists = ref([]);
  const fetch = (query = {}) => {
    fetchList(query).then(({data: {data}}) => {
      lists.value = listToTree(data);
    });
  }

  return {
    lists,
    fetch,
  };
}