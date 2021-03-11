<template>
  <router-view v-slot="{ Component }">
    <keep-alive :include="cachedViews">
      <component class="view" :is="Component"/>
    </keep-alive>
  </router-view>
</template>
<script>
import {defineComponent} from 'vue'
import {mapGetters} from 'vuex'

export default defineComponent({
  name: 'Main',
  computed: {
    ...mapGetters(['cachedViews']),
    key() {
      return this.$route.path
    }
  },
});
</script>