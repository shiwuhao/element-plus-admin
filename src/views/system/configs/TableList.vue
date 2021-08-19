<template>
  {{ dialog }}
  <BasicTable :columns="tableColumns" :data="tableData" :paginate="paginate" :loading="loading" size="small">
    <el-table-column
      label="操作"
      width="120">
      <template #default="scope">
        <el-button type="text" size="small" @click="handleEdit(scope.row,index)">编辑</el-button>
        <el-button type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </BasicTable>
  <EditTemplate v-model="dialog" v-model:editable="editable"/>
</template>

<script>
import {BasicForm} from "@/components/Form";
import {BasicTable} from "@/components/Table"
import EditTemplate from "@/views/system/configs/EditTemplate";
import {useConfigRequest} from "@/api/useConfigRequest";
import {defineComponent, inject, reactive, toRefs, ref, unref, computed} from "vue";

export default defineComponent({
  name: "TableList",
  components: {BasicForm, BasicTable, EditTemplate},
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
      editable: {},
    })

    const {fetchList} = useConfigRequest();
    const {data: tableData, paginate, loading, fetch} = fetchList();

    const dialog = inject('dialog');
    const drawerToggle = inject('drawerToggle');
    const handleEdit = (editable, index) => {
      state.editable = editable;
      drawerToggle();
    }

    return {
      ...toRefs(state),
      dialog,
      tableData,
      paginate,
      loading,
      handleEdit,
      fetch,
    }
  },
})
</script>

<style scoped>

</style>