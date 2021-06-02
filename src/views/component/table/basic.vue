<template>
  <BasicTable :data="tableData" :columns="tableColumns">
    <template #date>
      <el-table-column width="100" label="日期">
      </el-table-column>
    </template>
  </BasicTable>
</template>

<script>
import BasicTable from "@/components/Table/BasicTable";

export default {
  name: 'Test',
  components: {BasicTable},
  data() {
    return {
      tableColumns: [
        {
          slot: 'date',
          prop: 'date',
          label: '日期',
          width: '180',
        },
        {
          prop: 'name',
          label: '姓名',
          width: '80',
        },
        {
          prop: 'address',
          label: '地址',
          width: '280',
        },
      ],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>
