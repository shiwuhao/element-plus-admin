<template>
  <Card :cardName="cardName" :header="header" class="m10" :headerType="headerType">
    <template #header-custom>
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane
          :label="item.label"
          :name="item.name"
          v-for="item in saleCategory"
          :key="item.name"
        >
          <component :is="item.component"></component>
        </el-tab-pane>
      </el-tabs>
    </template>
  </Card>
</template>
<script>
import {defineComponent, ref} from 'vue'
import {Card} from '@/components/Card';
import {saleCategory} from "../../../data";
import AllChannel from "../components/AllChannel";
import OnlineChannel from "../components/OnlineChannel";
import ShopChannel from "../components/ShopChannel";

export default defineComponent({
  components: {Card, AllChannel, OnlineChannel, ShopChannel},
  setup() {

    return {
      activeName: ref('first'),
      cardName: ref('销售额类别占比'),
      header: ref(true),
      headerType: ref('custom'),
      saleCategory
    }
  }
})
</script>
<style lang="scss" scoped>
::v-deep .card-header {
  height: 32px;

  .card-header-custom {
    margin-top: 30px;
  }
}
</style>