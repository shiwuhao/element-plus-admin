import {computed} from 'vue'
import store from "@/store";

export function useConfig() {
  const getGroups = computed(() => store.getters.getConfigs.groups)
  const getTypes = computed(() => store.getters.getConfigs.types)
  const getComponents = computed(() => store.getters.getConfigs.components)

  return {
    getGroups,
    getTypes,
    getComponents
  }
}