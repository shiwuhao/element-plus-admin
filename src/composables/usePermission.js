import {computed, isRef} from "vue";
import store from "@/store/index.js";
import {isString} from "@/utils/is.js";

export function usePermission() {
  const {getters} = store;
  const getRoles = computed(() => getters.getRoles);
  const getActions = computed(() => getters.getActions);
  const getMenus = computed(() => getters.getMenus);

  const hasPermission = (name) => {
    const checks = isString(name) ? [name] : name;
    const actions = isRef(getActions) ? getActions.value : getActions;

    return actions.some((item) => {
      return checks.includes(item);
    })
  }

  const hasRole = (name) => {
    const checks = isString(name) ? [name] : name;
    const roles = isRef(getRoles) ? getRoles.value : getRoles;

    return roles.some((item) => {
      return checks.includes(item);
    })
  }

  return {
    getRoles,
    getActions,
    getMenus,
    hasPermission,
    hasRole,
  }
}