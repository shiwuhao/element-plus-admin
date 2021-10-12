<template>
  <el-row :gutter="5">
    <el-col :span='8' v-for="(team, index) in teams" :key="index" class="personal-center-team">
      <i :class="team.icon" :style="{color:team.color}"></i>
      <span>{{ team.title }}</span>
    </el-col>
  </el-row>
</template>
<script>
import {defineComponent, reactive, toRefs} from "vue";
import {teams} from './data.js';

export default defineComponent({
  setup(props) {
    const state = reactive({
      fits: ['fill'],
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    });
    return {
      teams,
      ...toRefs(state),
    }
  }
})
</script>
<style lang="scss" scoped>
.personal-center-team {
  i {
    margin-right: 5px;
  }
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 500;
}
</style>
