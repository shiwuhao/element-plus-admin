<template>
  <div v-loading="getOpenPageLoading && getPageLoading">
    <Content/>
  </div>
</template>

<script>
import {useTransitionSetting} from "@/composables/setting/useTransitionSeeting.js";
import {useRootSetting} from "@/composables/setting/useRootSeeting.js";
import Content from "@/layouts/content/Content.vue";

export default {
  name: "LayoutContent",
  components:{Content},
  setup() {
    const {getOpenPageLoading} = useTransitionSetting();
    const {getPageLoading} = useRootSetting();

    return {
      getOpenPageLoading,
      getPageLoading,
    }
  }
}
</script>
