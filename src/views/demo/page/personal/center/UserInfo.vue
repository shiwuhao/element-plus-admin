<template>
  <el-card shadow="none">
    <div class="info flex-col center align-center">
      <div>
        <el-avatar :src="getUser.avatar" :size="100"></el-avatar>
      </div>
      <div class="text-xl text-primary text-bo">{{ getUser.nickname }}</div>
      <div class="text-sm text-secondary">海纳百川，有容乃大</div>
      <div class="task-wrap flex-row between align-center">
        <div class="task-item flex-col">
          <span class="label">待办</span>
          <span class="value">90</span>
        </div>
        <el-divider direction="vertical"></el-divider>
        <div class="task-item flex-col">
          <span class="label">待办</span>
          <span class="value">66</span>
        </div>
        <el-divider direction="vertical"></el-divider>
        <div class="task-item flex-col">
          <span class="label">待办</span>
          <span class="value">80</span>
        </div>
      </div>
    </div>
    <el-divider content-position="left">标签</el-divider>
    <div class="tag">
      <el-space wrap>
        <el-tag v-for="tag in tags" :key="tag.name" :type="tag.type">
          {{ tag.name }}
        </el-tag>
      </el-space>
    </div>
    <el-divider content-position="left">团队</el-divider>
    <div class="team">
      <el-row :gutter="10">
        <el-col :span="12" v-for="(team, index) in teams" :key="index" style="padding-bottom: 5px;padding-top: 5px;">
          <i :class="team.icon" :style="{color:team.color}" class="text-xl"></i>
          <span class="text-df ml-1">{{ team.title }}</span>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>
import {useUser} from "@/composables/useUser";
import {shallowReactive, toRefs} from "vue";
import {getTeamData, getTagData} from "@/views/demo/page/personal/center/data";

export default {
  name: "UserInfo",
  setup() {
    const {getUser} = useUser();
    const state = shallowReactive({
      tags: getTagData(),
      teams: getTeamData(),
    })

    return {
      ...toRefs(state),
      getUser
    }
  },
}
</script>
<style lang="scss" scoped>
.task-wrap {
  width: 80%;
  padding: 30px;
  .label{
    @extend .text-df;
    @extend .text-secondary;
  }
  .value{
    @extend .text-xl;
    font-weight: bolder;;
  }
}
</style>