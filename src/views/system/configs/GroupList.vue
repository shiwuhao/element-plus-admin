<template>
  <el-card shadow="none">
    <el-tabs v-model="group" tab-position="left">
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
import {BasicForm} from "@/components/Form";
import EditGroup from "@/views/system/configs/EditGroup";
import {useConfig} from "@/composables/config/useConfig";
import {ref} from "vue";

export default {
  name: "GroupList",
  components: {BasicForm, EditGroup},
  setup() {
    const {getGroups} = useConfig();
    const group = ref('basic');

    return {
      getGroups,
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