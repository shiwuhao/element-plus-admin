<template>
  <PageWrapper :title="$route.meta.title">
    <template #extra>
      <el-button type="primary" size="mini">新增</el-button>
    </template>
    <el-card shadow="none">
      <basic-form :schemas="schemas"
                  :action-props="actionProps"
                  auto-width
                  size="mini"
                  @search="handleSearch">
      </basic-form>
    </el-card>

    <el-card shadow="none" class="mt10">
      <basic-table ref="table"
                   size="mini"
                   :stripe="true"
                   :border="true"
                   :columns="tableColumns"
                   :data="tableData"
                   :loading="tableLoading"
                   :paginate="tablePaginate"
                   @change-page="changePage">
        <el-table-column label="操作">
          <el-button type="text" size="mini">编辑</el-button>
          <el-button type="text" size="mini">删除</el-button>
        </el-table-column>
      </basic-table>
    </el-card>
  </PageWrapper>
</template>
<style lang="scss" scoped>
::v-deep .el-form-item {
  margin-bottom: 2px !important;
}
</style>
<script>
import {PageWrapper} from "@/components/Page";
import {BasicTable} from "@/components/Table";
import {BasicForm} from "@/components/Form";
import {users as userRequest} from "@/api/index";

const colProps = {
  xs: {span: 24},
  sm: {span: 12},
  md: {span: 12},
  lg: {span: 6},
  xl: {span: 4},
};

export default {
  components: {
    BasicTable, BasicForm, PageWrapper
  },
  name: "list",
  data() {
    return {
      schemas: [
        {
          field: 'name',
          component: 'Input',
          componentProps: {
            placeholder: '请输入邮箱',
          },
          colProps: colProps
        },
        {
          field: 'email',
          component: 'Input',
          componentProps: {
            placeholder: '请输入用户名',
          },
          colProps: colProps
        },
      ],
      actionProps: {
        colProps: colProps,
        isAdvanced: false,
        actionPosition: 'left',
      },
      queryForm: {},
      tableColumns: [
        {
          prop: 'id',
          label: 'ID',
          width: 60,
        },
        {
          prop: 'email',
          label: '邮箱',
        },
        {
          prop: 'name',
          label: '姓名',
        },
        {
          prop: 'role',
          label: '角色',
        },
        {
          prop: 'created_at',
          label: '创建时间',
        },
      ],
      tableData: [],
      tablePaginate: {},
      tableLoading: false,
    };
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers(page) {
      this.tableLoading = true;
      userRequest.index(this.queryForm, page).then(response => {
        this.tableData = response.data.data;
        this.tablePaginate = response.data.meta;
        this.tableLoading = false;
      });
    },
    changePage(page) {
      this.fetchUsers(page);
    },
    handleSearch(form) {
      this.queryForm = form;
      this.fetchUsers(1);
    },
  }
}
</script>