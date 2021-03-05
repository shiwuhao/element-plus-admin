<template>
  <router-view v-slot="{ Component }">
    <keep-alive :include="cachedViews">
      <component class="view" :is="Component"/>
    </keep-alive>
  </router-view>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Main',
  computed: {
    ...mapGetters(['cachedViews']),
    key() {
      return this.$route.path
    }
  },
};
</script>