<template>
  <el-card header="快捷导航" shadow="none">
    <el-row>
      <el-col :span="8" v-for="(item,index) in getMenus" :key="index" class="item">
        <el-card class="card" shadow="hover">
          <div class="flex-col align-center" style="cursor: pointer">
            <span class="text-xl"><icon :name="item.icon" :style="{color:item.color}" :size="20" /></span>
            <span>{{ item.title }}</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </el-card>
</template>
<script>
import {defineComponent} from 'vue';
import {usePermission} from "@/composables/usePermission.js";

export default defineComponent({
  name: 'QuickNav',
  setup() {
    const {getMenus} = usePermission()

    return {
      getMenus,
    }
  }
})
</script>
