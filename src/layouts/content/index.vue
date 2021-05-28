<template>
  <router-view v-loading="getOpenPageLoading && getPageLoading">
    <template v-slot="{ Component, route }">
      <transition name="fade-slide" mode="out-in" appear>
        <keep-alive v-if="openCache" :include="getCachedViews">
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

export default {
  name: "LayoutPage",
  data() {
    return {
      openCache: true,
      getCaches: [],
    }
  },
  setup() {
    const {getters} = useStore();
    const {getCachedViews, getVisitedViews} = getters;

    const {getOpenPageLoading} = useTransitionSetting();
    const {getPageLoading} = useRootSetting();

    return {
      getCachedViews,
      getVisitedViews,
      getOpenPageLoading,
      getPageLoading
    }
  }
}
</script>
