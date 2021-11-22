<template>
  <el-card shadow="none">
    <el-row justify="center">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <el-input v-model="query" @input="handleSearch" placeholder="输入图标名称进行搜索">
          <template #prefix>
            <icon name="el-search" :size="18"/>
          </template>
        </el-input>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="mt-2" v-if="icons.length>0">
      <el-col v-for="(item,index) in iconList" :key="index" :xs="12" :sm="4" :md="3" :lg="2" :xl="2" class="mt-2">
        <div class="icon-wrap flex-row center p-2" @click="handleCopy(item)">
          <div class="flex-col center align-center">
            <icon :name="item" :size="32"/>
            <span class="text-sm text-secondary text-overflow-1">{{ item }}</span>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-empty v-else></el-empty>
  </el-card>
</template>

<script>
import {PageWrapper} from '@/components/Page/index.js'
import {useDebounceFn, useClipboard} from "@vueuse/core";
import {reactive, ref, toRefs} from "vue";
import {ElMessage} from 'element-plus'

export default {
  name: "icon-picker",
  components: {PageWrapper},
  props: {
    icons: Array,
  },
  setup(props) {
    const allIcons = props.icons;
    const state = reactive({
      iconList: allIcons,
      query: '',
    })

    const handleSearch = useDebounceFn((value) => {
      state.iconList = value ? allIcons.filter(item => item.includes(value)) : allIcons;
    }, 200)

    const handleCopy = (iconName) => {
      const source = ref(`<icon name="${iconName}"/>`)
      const {copy} = useClipboard({source});
      copy();
      ElMessage.success('复制成功 ' + source.value);
    }

    return {
      ...toRefs(state),
      handleSearch,
      handleCopy,
    }
  }
}
</script>
<style lang="scss" scoped>
.icon-wrap {
  border: var(--el-border-base);
  cursor: pointer;
}
</style>