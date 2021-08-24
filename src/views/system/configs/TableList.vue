<template>
  <BasicForm v-model="search" :schemas="schemas" :action-props="actionProps" size="small"
             @submit="fetch"></BasicForm>
  <BasicTable :columns="tableColumns" :data="lists" :paginate="paginate" size="small">
    <el-table-column label="操作" width="120">
      <template #default="scope">
        <el-button type="text" size="small" @click="handleEdit(scope.$index)">编辑</el-button>
        <el-button type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </BasicTable>
  <EditTemplate
    v-model="dialog"
    :item="itemData"
    :confirm="confirm"
  />
</template>

<script>
import {BasicForm} from "@/components/Form";
import {BasicTable} from "@/components/Table"
import EditTemplate from "@/views/system/configs/EditTemplate";
import {defineComponent, inject, reactive, toRefs, ref} from "vue";
import {useFetchList} from "@/api/useConfigRequest";
import configs from "@/api/configs";

import {compositionApi} from '@/composables/compositionApi.js';
import axios from "@/utils/axios";

export default defineComponent({
  name: "TableList",
  components: {BasicForm, BasicTable, EditTemplate},
  setup() {
    const state = reactive({
      dialog: false,
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
      itemData: {},
    })

    const {listApi, detailApi, updateApi, storeApi, deleteApi} = configs;
    const compositionData = compositionApi({listApi, detailApi, updateApi, storeApi, deleteApi, itemData: state.itemData});
    const {lists, paginate, editItem,confirm} = compositionData;

    const handleAdd = () => state.dialog = true;
    const handleEdit = (index) => {
      editItem(index);
      handleAdd();
    }

    return {
      ...toRefs(state),
      compositionData,
      lists,
      paginate,
      editItem,
      handleEdit,
      handleAdd,
    }
  },
})
</script>

<style scoped>

</style>