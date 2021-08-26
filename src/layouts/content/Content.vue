<template>
  <router-view>
    <template v-slot="{ Component, route }">
      <transition :name="getTransitionName(route)" mode="out-in">
        <keep-alive v-if="getOpenKeepAlive" :include="getCachedViews">
          <component :is="Component" :key="route.fullPath"/>
        </keep-alive>
        <component v-else :is="Component" :key="route.fullPath"/>
      </transition>
    </template>
  </router-view>
</template>

<script>
import {useStore} from 'vuex';
import {useTransitionSetting} from "@/composables/setting/useTransitionSeeting";
import {useRootSetting} from "@/composables/setting/useRootSeeting";
import {unref} from "vue";

export default {
  name: "Content",
  setup() {
    const {getters} = useStore();
    const {getCachedViews} = getters;

    const {getEnableTransition, getBasicTransition} = useTransitionSetting();
    const {getOpenKeepAlive} = useRootSetting();

    function getTransitionName(route) {
      if (!unref(getEnableTransition)) return null;
      let name = '';
      if (getOpenKeepAlive) {
        name = route.meta.loaded ? 'fade-slide' : null;
      }

      return name || route.meta.transitionName || unref(getBasicTransition);
    }

    return {
      getCachedViews,
      getOpenKeepAlive,
      getTransitionName
    }
  }
}
</script>
