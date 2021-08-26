<template>
  <div v-loading="getOpenPageLoading && getPageLoading">
    <Content/>
  </div>
</template>

<script>
import {useTransitionSetting} from "@/composables/setting/useTransitionSeeting";
import {useRootSetting} from "@/composables/setting/useRootSeeting";
import Content from "@/layouts/content/Content";

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
