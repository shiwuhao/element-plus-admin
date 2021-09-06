import {computed} from 'vue'
import store from "@/store";

export function useConfig() {
  const getGroups = computed(() => store.getters.getConfigs.groups);
  const getTypes = computed(() => store.getters.getConfigs.types);
  const getComponents = computed(() => store.getters.getConfigs.components);
  const getPermissions = computed(() => store.getters.getConfigs.permissions);
  const getTreePermissions = computed(() => {
    const root = [{id: 0, pid: 0, title: '根节点'}];
    return root.concat(store.getters.getConfigs.permissions);
  });
  const getRoles = computed(() => store.getters.getConfigs.roles);

  return {
    getGroups,
    getTypes,
    getComponents,
    getPermissions,
    getTreePermissions,
    getRoles,
  }
}