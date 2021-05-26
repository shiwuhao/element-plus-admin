<template>
  <router-view>
    <template v-slot="{ Component, route }">
      <transition name="fade" mode="out-in" appear>
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

export default {
  name: "LayoutContent",
  data() {
    return {
      openCache: false,
      getCaches: [],
    }
  },
  setup() {
    const {getters} = useStore();
    const {getCachedViews,getVisitedViews} = getters;

    return {
      getCachedViews,
      getVisitedViews
    }
  }
}
</script>
