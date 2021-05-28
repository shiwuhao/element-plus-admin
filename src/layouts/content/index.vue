<template>
  <router-view v-loading="getOpenPageLoading && getPageLoading">
    <template v-slot="{ Component, route }">
      <transition :name="getTransitionName(route)" mode="out-in" appear>
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
import {useTransitionSetting} from "@/hooks/setting/useTransitionSeeting";
import {useRootSetting} from "@/hooks/setting/useRootSeeting";
import {unref} from "vue";

export default {
  name: "Content",
  setup() {
    const {getters} = useStore();
    const {getCachedViews, getVisitedViews} = getters;

    const {getEnableTransition, getOpenPageLoading, getBasicTransition} = useTransitionSetting();
    const {getPageLoading, getOpenKeepAlive} = useRootSetting();

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
      getVisitedViews,
      getOpenPageLoading,
      getPageLoading,
      getOpenKeepAlive,
      getTransitionName
    }
  }
}
</script>
