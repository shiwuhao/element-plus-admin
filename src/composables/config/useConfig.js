import {computed} from 'vue'
import store from "@/store";

export function useConfig() {
  const getGroups = computed(() => store.getters.getConfigs.groups);
  const getTypes = computed(() => store.getters.getConfigs.types);
  const getComponents = computed(() => store.getters.getConfigs.components);
  const getPermissions = computed(() => store.getters.getConfigs.permissions);
  const getTreePermissions = computed(() => {
    const permissions = store.getters.getConfigs.permissions;
    return permissions.map(item => {
      return {id: item.id, label: item.title ? item.name : item.name, children: []};
    })
  });

  return {
    getGroups,
    getTypes,
    getComponents,
    getPermissions,
    getTreePermissions,
  }
}