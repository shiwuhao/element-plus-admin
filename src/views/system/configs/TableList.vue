<template>
  <button @click="fetch">刷新</button>
  <BasicTable :columns="tableColumns" :data="tableData" :loading="isLoading" size="small" border>
    <el-table-column
      label="操作"
      width="120">
      <template #default="scope">
        <el-button type="text" size="small" @click="handleEdit(scope.row,index)">编辑</el-button>
        <el-button type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </BasicTable>
</template>

<script>
import {BasicForm} from "@/components/Form";
import {BasicTable} from "@/components/Table"
import {useConfigRequest} from "@/api/useConfigRequest";
import {defineComponent, inject, reactive, toRefs, ref, unref, computed} from "vue";

export default defineComponent({
  name: "TableList",
  components: {BasicForm, BasicTable},
  setup() {
    const state = reactive({
      activeName: 'second',
      tableColumns: [
        {prop: 'id', label: 'ID', width: 100, align: 'center'},
        {prop: 'title', label: '标题', minWidth: 100, align: 'center'},
        {prop: 'name', label: '标识', minWidth: 100, align: 'center'},
        {prop: 'group_label', label: '分组', minWidth: 100, align: 'center'},
        {prop: 'type_label', label: '类型', minWidth: 100, align: 'center'},
        {prop: 'created_at', label: '创建时间', minWidth: 100, align: 'center'},
      ],
    })


    const {fetchList} = useConfigRequest();
    const {tableData, paginate, isLoading,fetch} = fetchList();
    const handleEdit = inject('handleEdit');

    return {
      ...toRefs(state),
      tableData,
      paginate,
      isLoading,
      handleEdit,
      fetch,
    }
  },
})
</script>

<style scoped>

</style>