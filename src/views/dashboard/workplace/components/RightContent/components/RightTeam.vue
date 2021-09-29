<template>
  <Card
    :cardName="cardName"
  >
    <template #text-custom>
      <el-row :gutter="20">
        <el-col :span="12" v-for="(team, index) in teams" :key="index" class="workplace-team">
          <i :class="team.icon" :style="{color:team.color}"></i>
          <span>{{ team.title }}</span>
        </el-col>
      </el-row>
    </template>
  </Card>
</template>
<script>
import {defineComponent, reactive, toRefs,ref} from "vue";
import {teams} from '@/views/page/account/center/leftLayout/data';
import {Card} from '@/components/Card';
export default defineComponent({
  components:{Card},
  setup(props) {
    const state = reactive({
      fits: ['fill'],
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    });
    return {
      teams,
      ...toRefs(state),
      cardName: ref('团队')
    }
  }
})
</script>
<style lang="scss" scoped>
.workplace-team {
  margin-bottom: 30px;
  i {
    margin-right: 5px;
  }
}
</style>
