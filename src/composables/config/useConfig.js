import {computed, reactive, shallowReactive, toRaw} from 'vue'
import store from "@/store";
import {useRouter} from "vue-router";
import {listToTree} from "@/utils";

export function useConfig() {
  const getGroups = computed(() => store.getters.getConfigs.groups);
  const getTypes = computed(() => store.getters.getConfigs.types);
  const getComponents = computed(() => store.getters.getConfigs.components);
  const getPermissions = computed(() => store.getters.getConfigs.permissions);
  const getTreePermissions = computed(() => {
    const children = listToTree(toRaw(store.getters.getConfigs.permissions));
    return [{id: 0, pid: 0, title: '根节点', children: children}];
  });


  const getRoles = computed(() => store.getters.getConfigs.roles);

  const getPermissionRoutes = shallowReactive(useRouter().getRoutes().filter(item => item.meta.menu));

  return {
    getGroups,
    getTypes,
    getComponents,
    getPermissions,
    getTreePermissions,
    getRoles,
    getPermissionRoutes,
  }
}