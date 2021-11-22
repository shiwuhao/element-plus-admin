<template>
  <page-wrapper :title="$route.meta['title']">
    <template #content>
      使用v-contextmenu
      <el-link type="primary" href="https://github.com/heynext/v-contextmenu/blob/main/docs/usage.md" target="_blank">
        查看
      </el-link>
    </template>
    <el-card header="Simple" shadow="none">
      <v-contextmenu ref="contextmenu1">
        <v-contextmenu-item>菜单1</v-contextmenu-item>
        <v-contextmenu-item>菜单2</v-contextmenu-item>
        <v-contextmenu-item>菜单3</v-contextmenu-item>
      </v-contextmenu>

      <el-button type="primary" v-contextmenu:contextmenu1>右键点击此区域</el-button>
    </el-card>

    <el-card header="Multiple" shadow="none" class="mt-2">
      <v-contextmenu ref="contextmenu2">
        <v-contextmenu-item>GitHub</v-contextmenu-item>
        <v-contextmenu-item>GitLab</v-contextmenu-item>
        <v-contextmenu-divider/>
        <v-contextmenu-submenu title="蔬菜菜">
          <v-contextmenu-item>土豆</v-contextmenu-item>
          <v-contextmenu-submenu title="青菜">
            <v-contextmenu-item>小油菜</v-contextmenu-item>
            <v-contextmenu-item>空心菜</v-contextmenu-item>
          </v-contextmenu-submenu>
          <v-contextmenu-item>黄瓜</v-contextmenu-item>
        </v-contextmenu-submenu>
        <v-contextmenu-item disabled>菠萝蜜</v-contextmenu-item>
        <v-contextmenu-divider/>
        <v-contextmenu-item>哈密瓜</v-contextmenu-item>
      </v-contextmenu>

      <el-button type="primary" v-contextmenu:contextmenu2>右键点击此区域</el-button>
    </el-card>
  </page-wrapper>
</template>

<script>
import {PageWrapper} from '@/components/Page/index.js'

export default {
  name: "index",
  components: {PageWrapper},
}
</script>

<style scoped>

</style>