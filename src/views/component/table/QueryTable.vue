<template>
  <PageWrapper
    :title="$route.meta.title"
    :sub-title="$route.meta.title">
    <el-card shadow="none">
      <query-form :options="options" advanced-length="4" @search="search" @reset="reset">
        <template #custom-slot>
          <el-form-item style="margin-bottom: 2px;margin-top:2px;">
            <el-input v-model="customSlot" placeholder="我是自定义插槽渲染的"/>
          </el-form-item>
        </template>
      </query-form>
    </el-card>
    <el-card shadow="none" class="mt10">
      <BasicTable :data="tableData" :columns="tableColumns" border size="small">
        <el-table-column label="操作">
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

import QueryForm from "@/components/Table/QueryForm";
import PageWrapper from "@/components/Page/src/PageWrapper";
import BasicTable from "@/components/Table/BasicTable";
import {getBasicColumns, getBasicData} from './tableData';


export default {
  name: 'QueryTable',
  components: {
    QueryForm, BasicTable, PageWrapper
  },
  data() {
    return {
      searchForm: {},
      tableColumns: getBasicColumns(),
      tableData: getBasicData(),
      options: [
        {
          slot: 'custom-slot'
        },
        {
          type: 'select',
          key: 'single-select',
          label: '单选下拉框',
          options: [
            {value: '选项1', label: '黄金糕'},
            {value: '选项2', label: '双皮奶'},
            {value: '选项3', label: '蚵仔煎'},
            {value: '选项4', label: '龙须面'},
            {value: '选项5', label: '北京烤鸭'},
          ]
        },
        {
          type: 'select',
          key: 'multiple-select',
          label: '多选下拉框',
          multiple: true,
          options: [
            {value: '选项1', label: '黄金糕'},
            {value: '选项2', label: '双皮奶'},
            {value: '选项3', label: '蚵仔煎'},
            {value: '选项4', label: '龙须面'},
            {value: '选项5', label: '北京烤鸭'},
          ]
        },
        {
          type: 'input',
          key: 'key',
          label: 'input框',
          placeholder: '请输入搜索条件',
        },
      ],
      form: {},
      customSlot: '',
    }
  },
  methods: {
    search(form) {
      this.form = {...form, ...{customSlot: this.customSlot}};
    },
    reset() {
      this.form = {};
      this.customSlot = '';
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.tableData.splice(index, 1);
        this.$message.success('删除成功!');
      }).catch(() => {
        this.$message.info('已取消删除');
      });
    },
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>
