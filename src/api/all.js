import axios from "@/utils/axios";
import {listToTree} from "@/utils";
import {ref} from "vue";

export const fetchAllMenus = (query = {}) => axios.get('/all/menus', {params: query});
export const fetchAllRoles = (query = {}) => axios.get('/all/roles', {params: query});
export const fetchAllPermissions = (query = {}) => axios.get('/all/permissions', {params: query});

export const useFetchAllMenus = () => {
  const lists = ref([]);

  const fetch = async () => {
    await fetchAllMenus().then(({data: {data}}) => {
      data.unshift({id: 0, pid: 0, name: 'root', label: 'Root'})
      lists.value = listToTree(data);
    });
  }

  return {
    lists,
    fetch,
  };
}

export const useFetchAllRoles = () => {
  const lists = ref([]);

  const fetch = async () => {
    await fetchAllRoles().then(({data: {data}}) => {
      lists.value = data;
    });
  }

  return {
    lists,
    fetch,
  };
}

export const useFetchAllPermissions = () => {
  const lists = ref([]);

  const fetch = async (query) => {
    await fetchAllPermissions(query).then(({data: {data}}) => {
      lists.value = listToTree(data);
    });
  }

  return {
    lists,
    fetch,
  };
}