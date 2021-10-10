<template>
  <PageWrapper
    :title="$route.meta.title"
    :sub-title="$route.meta.title">
    <el-card shadow="none">
      <basic-form :schemas="schemas"
                  :action-props="actionProps"
                  auto-width
                  size="small"
                  @search="search"
                  @reset="reset">
      </basic-form>
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
<style lang="scss" scoped>
::v-deep .el-form-item {
  margin-bottom: 2px !important;
}
</style>

<script>

import {PageWrapper} from '@/components/Page';
import {BasicTable} from "@/components/Table";
import {BasicForm} from '@/components/Form';
import {getBasicColumns, getBasicData} from './tableData.js';
import {cascaderOptions, selectOptions} from "@/views/demo/component/form/formData.js";

const colProps = {
  xs: {span: 24},
  sm: {span: 12},
  md: {span: 12},
  lg: {span: 6},
  xl: {span: 4},
};

export default {
  name: 'QueryTable',
  components: {
    BasicForm, BasicTable, PageWrapper
  },
  data() {
    return {
      searchForm: {},
      tableColumns: getBasicColumns(),
      tableData: getBasicData(),
      schemas: [
        {
          field: 'input',
          component: 'Input',
          componentProps: {
            placeholder: '这是一个Input表单',
          },
          colProps: colProps
        },
        {
          field: 'input2',
          component: 'Input',
          componentProps: {
            placeholder: '这是一个Input表单',
          },
          colProps: colProps
        },
        {
          field: 'input3',
          component: 'Input',
          componentProps: {
            placeholder: '这是一个Input表单',
          },
          colProps: colProps
        },
        {
          field: 'input4',
          component: 'Input',
          componentProps: {
            placeholder: '这是一个Input表单',
          },
          colProps: colProps
        },
        {
          field: 'input5',
          component: 'Input',
          componentProps: {
            placeholder: '这是一个Input表单',
          },
          colProps: colProps
        },
        {
          field: 'select',
          component: 'Select',
          componentProps: {
            placeholder: '这是一个Select',
            options: selectOptions
          },
          colProps: colProps
        },
        {
          field: 'select2',
          component: 'Select',
          componentProps: {
            placeholder: '这是一个Select',
            options: selectOptions
          },
          colProps: colProps
        },
        {
          field: 'cascader',
          component: 'Cascader',
          componentProps: {
            placeholder: '这是一个Cascader',
            collapseTags: true,
            options: cascaderOptions,
            change: () => {
              console.log(111);
            }
          },
          colProps: colProps
        },
      ],
      actionProps: {
        colProps: colProps,
        isAdvanced: false,
        actionPosition: 'left',
        showAdvancedButton: true,
        showAdvancedLength: 3,
        resetButtonOption: {
          text: '重置'
        },
        submitButtonOption: {
          text: '搜索'
        }
      },
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
