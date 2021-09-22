<template>
  <Card :cardName="cardName" :header="header" class="m10 top-search-card" >
    <template #text-custom>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="date" label="日期" width="180"> </el-table-column>
        <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
    </template>
  </Card>
</template>
<script>
import {defineComponent, ref} from 'vue'
import {Card} from '@/components/Card';
import {tableData} from '../../../data';

export default defineComponent({
  components: {Card},
  setup() {

    return {
      cardName: ref('线上热门搜索'),
      header: ref(true),
      tableData
    }
  }
})
</script>
<style lang="scss" scoped>
::v-deep .card-header {
  height: 32px;
}
.top-search-card {
  margin-bottom: 10px;
}
</style>