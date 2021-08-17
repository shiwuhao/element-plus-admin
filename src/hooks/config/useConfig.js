import {computed} from 'vue'
import {useStore} from 'vuex';
import store from "@/store";

export function useConfig() {
  const getGroups = computed(() => store.getters.getConfigs.groups)

  return {
    getGroups
  }
}