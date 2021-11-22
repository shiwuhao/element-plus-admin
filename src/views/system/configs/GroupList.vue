<template>
  <el-card shadow="none">
    <el-tabs v-model="group" :tab-position="getIsMobile ? 'top' : 'left'">
      <el-tab-pane v-for="(item,index) in getGroups"
                   :key="index"
                   :label="item.label"
                   :name="item.value"
                   :lazy="group !== item.value">
        <EditGroup :group="item.value"></EditGroup>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
import {BasicForm} from "@/components/Form/index.js";
import EditGroup from "@/views/system/configs/EditGroup.vue";
import {useConfig} from "@/composables/config/useConfig.js";
import {useRootSetting} from "@/composables/setting/useRootSeeting.js";
import {ref} from "vue";

export default {
  name: "GroupList",
  components: {BasicForm, EditGroup},
  setup() {
    const {getGroups} = useConfig();
    const {getIsMobile} = useRootSetting();
    const group = ref('basic');

    return {
      getGroups,
      getIsMobile,
      group,
    }
  },
}
</script>

<style scoped>
.label {

}

.sub-label {
  color: #C0C4CC;
  margin-left: 10px;
}
</style>