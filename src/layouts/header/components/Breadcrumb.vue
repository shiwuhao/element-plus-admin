<template>
  <div class="container">
    <el-breadcrumb class="app-breadcrumb" separator="/">
      <el-breadcrumb-item v-for="(item,index) in levelList" :key="index" :to="{path:item.path}">
        {{ item.meta.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
import {onMounted, reactive, toRefs, watch} from "vue";
import {useRouter} from "vue-router";
// import dashboardRoute from '@/router/routes/modules/demo/bak/dashboard';

export default {
  setup() {
    const state = reactive({
      levelList: [],
    });

    const {currentRoute} = useRouter();
    const isDashboard = (route) => {
      const name = route && route.name;
      if (!name) return false;
      return name.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase();
    }

    const getBreadcrumb = () => {
      let matched = currentRoute.value.matched.filter(item => item.meta && item.meta['title']);
      if (matched.length >= 1 && !isDashboard(matched[0])) {
        // matched = dashboardRoute.concat(matched);
      }
      state.levelList = matched.filter(item => item.meta && item.meta['title'] && item.meta['breadcrumb'] !== false);
    }

    watch(currentRoute, () => {
      getBreadcrumb();
    })

    onMounted(() => {
      getBreadcrumb();
    })

    return {
      ...toRefs(state),
    }
  },
}
</script>