<template>
  <el-main>
    <RouterView>
      <template #default="{ Component, route }">
        <transition mode="out-in" appear>
          <keep-alive v-if="openCache" :include="getCaches">
            <component :is="Component" :key="route.fullPath"/>
          </keep-alive>
          <component v-else :is="Component" :key="route.fullPath"/>
        </transition>
      </template>
    </RouterView>
  </el-main>
</template>

<script>
export default {
  name: "LayoutContent",
  data() {
    return {
      openCache: false,
      getCaches: [],
    }
  },
}
</script>

<style scoped>

</style>