<template>
  <el-card>
    <div class="flex-row-justify">
      <query-form style="width: 100%;" :options="queryFormOptions" size="mini" clearable @search="handleSearch">
        <template v-slot:button>
          <el-button type="primary" size="mini">新增</el-button>
        </template>
      </query-form>
    </div>
    <basic-table ref="table"
                   :stripe="true"
                   :border="true"
                   :columns="tableColumns"
                   :data="tableData"
                   :loading="tableLoading"
                   :paginate="tablePaginate"
                   @change-page="changePage">
      <el-table-column label="操作">
        <el-button type="text"  size="mini">编辑</el-button>
        <el-button type="text" size="mini">删除</el-button>
      </el-table-column>
    </basic-table>
  </el-card>
</template>

<script>
  import {BasicTable} from "@/components/Table";
  import QueryForm from "@/components/Table/QueryForm";
  import {users as userRequest} from "@/api/index";

  export default {
    components: {
      BasicTable, QueryForm
    },
    name: "list",
    data() {
      return {
        cardTitle: this.$route.meta.title,
        queryFormOptions: [
          {
            type: 'input',
            key: 'name',
            label: '用户名',
            placeholder: '请输入用户名',
          },
          {
            type: 'input',
            key: 'email',
            label: '邮箱',
            placeholder: '请输入邮箱',
          },
        ],
        queryForm: {},
        tableColumns: [
          {
            key: 'id',
            label: 'ID',
            width: 60,
          },
          {
            key: 'email',
            label: '邮箱',
          },
          {
            key: 'name',
            label: '姓名',
          },
          {
            key: 'role',
            label: '角色',
          },
          {
            key: 'created_at',
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