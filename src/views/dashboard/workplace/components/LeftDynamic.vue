<template>
  <Card
    :cardName="cardName"
  >
    <template #text-custom>
      <div v-for="item in leftBottomData" :key="item.id" class="workplace-dynamic">
        <el-avatar :src="item.user.avatar"></el-avatar>
        <span>
          {{ item.user.name }}
        </span>
        <time class="workplace-dynamic-time">{{ transformTime(item.updatedAt) }}</time>
        <el-divider/>
      </div>

    </template>
  </Card>
</template>
<script>
import {defineComponent, ref} from 'vue';
import {Card} from '@/components/Card';
import {leftBottomData} from "@/views/dashboard/workplace/data.js";
import {transformTime} from '@/utils/utils.js';

export default defineComponent({
  components: {Card},
  setup() {
    return {
      leftBottomData,
      cardName: ref('动态'),
      transformTime,
    }
  }
})
</script>
<style lang="scss" scoped>
.workplace-dynamic {
  width: 97%;
  margin: 0 auto;

  .el-avatar {
    width: 32px;
    height: 32px;
    margin-right: 10px;
    vertical-align: middle;
  }

  .workplace-dynamic-time {
    display: -webkit-box;
    font-size: $font-size-small;
    color: $color-text-gray;
    text-indent: 44px;
  }
  &:last-child {
    padding-bottom: 20px;
    .el-divider {
      display: none;
    }
  }
}
</style>
