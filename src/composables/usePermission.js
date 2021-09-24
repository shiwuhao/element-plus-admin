import {computed, isRef, unref} from "vue";
import store from "@/store";
import {isArray, isObject, isString} from "@/utils/is";

export function usePermission() {
  const {getters} = store;
  const getRoles = computed(() => getters.getRoles);
  const getActions = computed(() => getters.getActions);
  const getMenus = computed(() => getters.getMenus);

  const hasPermission = (name) => {

    const contains = (name) => {
      console.log(unref(getActions))
      return unref(getActions).some(item => item === name);
    }

    let permissions;
    let requireAll = false;

    if (isString(name)) {
      permissions = [name];
    } else if (isArray(name)) {
      permissions = name;
    } else if (isObject(name)) {
      let {permissions: _permissions, requireAll: _requireAll} = name;
      permissions = _permissions;
      requireAll = _requireAll;
    }

    permissions.forEach(item => {
      let has = contains(item);
      if (requireAll === true && has === false) return false;
      if (requireAll === false && has === true) return true;
    })


    return requireAll;
  }
  const hasRole = (roleName) => {
    return true;
  }
  const hasMenu = (menuName) => {
    return true;
  }

  return {
    getRoles,
    getActions,
    getMenus,
    hasPermission,
    hasRole,
    hasMenu,
  }
}