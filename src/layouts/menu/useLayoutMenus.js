import {useStore} from "vuex";
import {computed} from "vue";

/**
 *
 * @returns {{getMenus: ComputedRef<function(*): *>}}
 */
export function useLayoutMenus() {
  const {getters} = useStore();
  const getMenus = computed(() => getters.getMenus);

  return {
    getMenus
  }
}