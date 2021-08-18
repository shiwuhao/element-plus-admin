<template>
  <el-row :gutter="20">
    <el-col :span="12" v-for="(team, index) in teams" :key="index" class="personal-center-team">
      <i :class="team.icon" :style="{color:team.color}"></i>
      <span>{{ team.title }}</span>
    </el-col>
  </el-row>
</template>
<script>
import {defineComponent, reactive, toRefs} from "vue";
import {teams} from './data';

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
  margin-bottom: 30px;
}
</style>
