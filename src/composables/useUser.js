import {computed} from "vue";
import {useStore} from "vuex";

export function useUser() {
  const {getters} = useStore();
  const getUser = computed(() => getters.getUser);

  return {
    getUser,
  }
}