import {useStore} from "vuex";
import {computed} from "vue";

/**
 * 菜单
 * @returns {{getMenus: ComputedRef<function(*): any>}}
 */
export function useLayoutMenus() {
  const {getters} = useStore();
  const getMenus = computed(() => getters.getMenus);

  return {
    getMenus
  }
}