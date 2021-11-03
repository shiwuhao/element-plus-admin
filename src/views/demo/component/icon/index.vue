<template>
  <page-wrapper :title="$route.meta['title']">
    <template #content>
      <div>
        {{ notice }}
      </div>
    </template>
    <el-card shadow="none" header="Element-Plus Icon使用">
      <el-row>
        <el-col v-bind="colProps">
          <el-icon size="30">
            <help-filled/>
          </el-icon>
        </el-col>
        <el-col v-bind="colProps">
          <el-icon size="30">
            <loading/>
          </el-icon>
        </el-col>
        <el-col v-bind="colProps">
          <el-icon size="30">
            <pie-chart/>
          </el-icon>
        </el-col>
        <el-col v-bind="colProps">
          <el-icon size="30">
            <takeaway-box/>
          </el-icon>
        </el-col>
        <el-col v-bind="colProps">
          <el-icon size="30">
            <sunrise/>
          </el-icon>
        </el-col>
        <el-col v-bind="colProps">
          <el-icon size="30">
            <video-pause/>
          </el-icon>
        </el-col>
      </el-row>
    </el-card>
    <el-card shadow="none" header="iconfont 雪碧图" class="mt-2">
      <el-alert type="error" :closable="false">{{ notice }}</el-alert>
      <el-row class="mt-2">
        <el-col v-bind="colProps" v-for="(item,index) in icons" :key="index">
          <icon-svg :name="item['font_class']" :size="30"/>
        </el-col>
      </el-row>
    </el-card>
    <el-card shadow="none" header="图标选择器" class="mt-2">
      <el-row>
        <el-col v-bind="colProps">
          <icon-picker v-model="icon"/>
        </el-col>
      </el-row>
    </el-card>
  </page-wrapper>
</template>

<script>
import {PageWrapper} from '@/components/Page/index'
import {IconData} from '@/components/Icon'
import {reactive, ref, toRefs} from "vue";
import {HelpFilled, Loading, PieChart, TakeawayBox, Sunrise, VideoPause} from '@element-plus/icons'
import {IconPicker} from '@/components/Icon'

const icons = IconData['glyphs'];
export default {
  name: "index",
  components: {PageWrapper, IconPicker, HelpFilled, Loading, PieChart, TakeawayBox, Sunrise, VideoPause},
  setup() {
    const state = reactive({
      colProps: {sm: 12, xs: 12, md: 4, lg: 4, xl: 4},
      icons: icons.splice(0, 6),
      icon: '',
      notice: '<icon-svg> 已注册成全局组件,可直接使用'
    })


    return {
      ...toRefs(state),
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