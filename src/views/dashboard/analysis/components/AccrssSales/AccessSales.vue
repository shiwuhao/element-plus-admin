<template>
  <el-card shadow="always" class="m10">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane :label="item.label" :name="item.name" v-for="item in accessSale" :key="item.id">
        <component :is="item.component"></component>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>
<script>
import {defineComponent, reactive, ref} from 'vue';
import Access from './components/Access';
import Sale from './components/Sale';
export default defineComponent({
  components: {Access,Sale},
  setup(){
    const accessSale = reactive([
      {
        id:1,
        label: '访问量',
        name: 'first',
        component: 'Access'
      },
      {
        id:2,
        label: '销售量',
        name: 'second',
        component: 'Sale'
      }
    ])
    return {
      activeName: ref('first'),
      accessSale
    }
  }
})
</script>