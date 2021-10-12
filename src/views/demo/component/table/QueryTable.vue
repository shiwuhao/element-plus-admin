<template>
  <PageWrapper
    :title="$route['meta']['title']"
    :sub-title="$route['meta']['title']">
    <el-card shadow="none">
      <BasicQuery :schemas="schemas" :col-props="{span:6}" advanced @submit="handleSearch"></BasicQuery>
    </el-card>
    <el-card shadow="none" class="mt10">
      <BasicTable :data="tableData" :columns="tableColumns" border size="small">
        <el-table-column label="操作" width="150" fixed="right">
          <template #default="scope">
            <el-button type="text" size="mini" @click="handleEdit(scope)">编辑</el-button>
            <el-button type="text" size="mini" style="color: red" @click="handleDelete(scope)">删除</el-button>
          </template>
        </el-table-column>
      </BasicTable>
    </el-card>
  </PageWrapper>
</template>

<script>
import {PageWrapper} from '@/components/Page';
import {BasicTable, BasicQuery} from "@/components/Table";
import {getBasicColumns, getBasicData} from './tableData.js';
import {cascaderOptions, selectOptions} from "@/views/demo/component/form/formData.js";
import {reactive, toRefs} from "vue";
import {ElMessage, ElMessageBox} from "element-plus";

export default {
  name: 'QueryTable',
  components: {
    BasicTable, PageWrapper, BasicQuery
  },
  setup() {
    const state = reactive({
      tableColumns: getBasicColumns(),
      tableData: getBasicData(),
      schemas: [
        {field: 'id', placeholder: '用户ID', component: 'Input'},
        {field: 'username', placeholder: '用户名', component: 'Input'},
        {field: 'nickname', placeholder: '昵称', component: 'Input'},
        {field: 'select', placeholder: '昵称', component: 'Select', componentProps: {options: selectOptions}},
        {
          field: 'cascader',
          placeholder: '昵称',
          component: 'Cascader',
          componentProps: {collapseTags: true, options: cascaderOptions,}
        },
      ],
      searchForm: {},
      form: {},
      customSlot: '',
    });

    const handleEdit = (index, row) => console.log(index, row);
    const handleDelete = (index, row) => {
      ElMessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        state.tableData.splice(index, 1);
        ElMessage.success('删除成功!')
      }).catch(() => {
        ElMessage.info('已取消删除!')
      });
    }

    const handleSearch = (form) => {
      state.form = {...form, ...{customSlot: this.customSlot}};
    }

    const handleReset = () => {
      console.log('reset')
    }

    return {
      ...toRefs(state),
      handleEdit,
      handleDelete,
      handleSearch,
      handleReset
    }
  }
}
</script>
