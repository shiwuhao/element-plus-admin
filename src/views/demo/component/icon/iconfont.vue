<template>
  <page-wrapper :title="$route.meta['title']">
    <template #content>
      <div >
        {{notice}}
      </div>
    </template>
    <el-card shadow="none">
      <el-row justify="center">
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <el-input v-model="query" @input="handleSearch" placeholder="输入图标名称进行搜索">
            <template #prefix>
              <icon-svg name="search" :size="16"/>
            </template>
          </el-input>
        </el-col>
      </el-row>
      <el-row :gutter="10" class="mt-2" v-if="icons.length>0">
        <el-col v-for="(item,index) in icons" :key="index" :xs="12" :sm="4" :md="3" :lg="2" :xl="2"
                style="margin-top: 5px ">
          <div class="icon-wrap flex-row center p-2" @click="handleCopy(item)">
            <div class="flex-col center align-center">
              <icon-svg :name="item['font_class']" :size="32"/>
              <span class="text-sm text-secondary text-overflow-1">{{ item['font_class'] }}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-empty v-else></el-empty>
    </el-card>
    <!--    <e-icon v-model="icon" size="small"/>-->
  </page-wrapper>
</template>

<script>
import {PageWrapper} from '@/components/Page/index'
import {IconData} from '@/components/Icon'
import {useDebounceFn, useClipboard} from "@vueuse/core";
import {reactive, ref, toRefs} from "vue";
import {ElMessage} from 'element-plus'

const icons = IconData['glyphs'];
export default {
  name: "icon-picker",
  components: {PageWrapper},
  setup() {
    const state = reactive({
      icons: icons,
      query: '',
      notice: '<icon-svg name="iconName">已注册成全局组件,可直接使用'
    })

    const handleSearch = useDebounceFn((value) => {
      state.icons = value ? icons.filter(item => item['font_class'].includes(value)) : icons;
    }, 200)

    const handleCopy = (icon) => {
      const source = ref(`<icon-svg name="${icon['font_class']}"/>`)
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