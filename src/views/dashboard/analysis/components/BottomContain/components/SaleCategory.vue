<template>
  <Card :cardName="cardName" :header="header" class="m10" :headerType="headerType">
    <template #header-custom>
      <el-button
        v-for="item in saleCategory"
        :key="item.name"
        @click="changeChannel(item.component,item.name)"
        plain
        :class="{active: activeName == item.name}"
      >
        {{ item.label }}
      </el-button>
    </template>
    <template #text-custom>
      <component :is="currentTabComponent"></component>
    </template>
  </Card>
</template>
<script>
import {defineComponent, ref,computed} from 'vue'
import {Card} from '@/components/Card';
import {saleCategory} from "../../../data";
import AllChannel from "../components/AllChannel";
import OnlineChannel from "../components/OnlineChannel";
import ShopChannel from "../components/ShopChannel";

export default defineComponent({
  components: {Card, AllChannel, OnlineChannel, ShopChannel},
  setup() {
    const currentTabComponent = ref('AllChannel');
    const activeName = ref('first');
    const changeChannel = (component,name) => {
      currentTabComponent.value = component;
      activeName.value = name
    }
    // const getCurrentBtn = computed(()=>{
    //     return (name)=>{
    //       console.log(name)
    //        return name
    //     }
    // })
    return {
      cardName: ref('销售额类别占比'),
      header: ref(true),
      headerType: ref('custom'),
      saleCategory,
      changeChannel,
      currentTabComponent,
      activeName
    }
  }
})
</script>
<style lang="scss" scoped>
::v-deep .card-header-custom {
  .el-button {
    margin-left: 0;
    span {
      font-size: 14px;
      font-weight: 400;
      color: inherit;
    }
  }
  .active {
    border-color: $btn-color-blue;
    span {
      color: $btn-color-blue;
    }
  }
}

</style>