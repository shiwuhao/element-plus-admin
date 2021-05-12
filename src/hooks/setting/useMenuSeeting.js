import {useStore} from "vuex";

export function useMenuSetting() {

  const getMenuSetting = useStore().getters.getMenuSetting;

  const getCollapsed = getMenuSetting.collapse;

  function setMenuSetting(menuSetting){

  }

  function toggleCollapsed() {

  }

  return {
    getCollapsed,
  };
}