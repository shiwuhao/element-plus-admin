<template>
  <div v-loading="getOpenPageLoading && getPageLoading">
    <Content/>
  </div>
</template>

<script>
import {useTransitionSetting} from "@/hooks/setting/useTransitionSeeting";
import {useRootSetting} from "@/hooks/setting/useRootSeeting";
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
