<template>
  <BasicForm v-model="search" :schemas="schemas" :action-props="actionProps" size="small"
             @submit="fetch"></BasicForm>
  <BasicTable :columns="tableColumns" :data="data.data" :paginate="data.meta" :loading="loading" size="small">
    <el-table-column label="操作" width="120">
      <template #default="scope">
        <el-button type="text" size="small" @click="handleEdit(scope.row,index)">编辑</el-button>
        <el-button type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </BasicTable>
  <EditTemplate
    v-model="dialog"
    :editable="editable"
    :editabale-index="editableIndex"
    @edit-close="editClose"
    @callback="editCallback"/>
</template>

<script>
import {BasicForm} from "@/components/Form";
import {BasicTable} from "@/components/Table"
import EditTemplate from "@/views/system/configs/EditTemplate";
import {defineComponent, inject, reactive, toRefs,} from "vue";
import {useFetchList} from "@/api/useConfigRequest";

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
      schemas: [
        {field: 'field1', label: 'field1', component: 'Input', colProps: {span: 8}}
      ],
      search: {},
      actionProps: {
        isAdvanced: true,
        colProps: {span: 8},
        actionPosition: 'left',
        resetButtonOption: {text: '重置'},
        submitButtonOption: {text: '搜索'}
      },
      editable: {},
      editableIndex: null,
    })

    const {data, loading, fetch} = useFetchList(state.search);

    const dialog = inject('dialog');

    const handleEdit = (editable, index) => {
      state.editable = editable;
      state.editableIndex = index;
      dialog.value = true;
    }

    const editCallback = (editable) => state.index > 0 ? data.value.data[state.index] = editable : data.value.push(editable);
    const editClose = () => (state.editable = {}) && (state.editableIndex = null);

    return {
      ...toRefs(state),
      dialog,
      data,
      loading,
      handleEdit,
      editCallback,
      editClose,
      fetch,
    }
  },
})
</script>

<style scoped>

</style>