<template>
  <el-card header="快捷导航" shadow="none">
    <el-row>
      <el-col :span="8" v-for="(item,index) in getMenus" :key="index" class="item flex row-center">
        <el-card class="card" shadow="hover">
          <div class="flex col-center row-center">
            <span class="text-xl"><i :class="item.icon" :style="{color:item.color}"></i></span>
            <span>{{ item.title }}</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </el-card>
</template>
<script>
import {defineComponent} from 'vue';
import {usePermission} from "@/composables/usePermission";

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
