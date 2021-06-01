<template>
  <el-card>
    <el-form :inline="true" :model="config" label-position="right" label-width="100px" class="demo-form-inline">
      <el-form-item label="显示边框">
        <el-switch v-model="config.border"></el-switch>
      </el-form-item>
      <el-form-item label="斑马纹">
        <el-switch v-model="config.stripe"></el-switch>
      </el-form-item>
      <el-form-item label="树形结构">
        <el-switch v-model="config.tree" @change="changeTree"></el-switch>
      </el-form-item>
      <el-form-item label="尺寸">
        <el-radio-group v-model="config.size" size="mini">
          <el-radio-button label="medium"></el-radio-button>
          <el-radio-button label="small"></el-radio-button>
          <el-radio-button label="mini"></el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="mini" @click="handleSetting">设置显示字段</el-button>
      </el-form-item>
    </el-form>
    <dynamic-table ref="dynamicTable"
                   :data="tableData"
                   :columns="tableColumns"
                   :border="config.border"
                   :stripe="config.stripe"
                   :size="config.size">
      <template #name>
        <el-table-column label="操作" width="220">
          <template v-slot="scope">
            <i class="el-icon-time"/>
            <span style="margin-left: 10px">{{ scope.row.name }} --  {{ scope.$index }}</span>
          </template>
        </el-table-column>
      </template>
      <el-table-column label="状态" min-width="100">
        <template v-slot="scope">
          <el-switch v-model="scope.row.status"></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="220">
        <template v-slot="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          <el-button size="mini" type="success" @click="handleDelete(scope.$index, scope.row)">
            编辑
          </el-button>
        </template>
      </el-table-column>
    </dynamic-table>
    <el-pagination
      class="flex-row-right"
      :page-size="20"
      :pager-count="11"
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
  </el-card>
</template>

<script>

  import DynamicTable from "@/components/Table/DynamicTable";

  const tableData = [];
  for (let i = 0; i < 15; i++) {

    let status = !!Math.floor((Math.random() * 2))
    tableData.push({
      id: i + 1,
      key: i.toString(),
      age: 32,
      date: '2016-05-02',
      name: `王小虎 ${i}`,
      status: status,
      address: `上海市普陀区金沙江路 1518 ${i}`,
      children: [],
    });
  }
  export default {
    name: 'Test',
    components: {
      DynamicTable
    },
    data() {
      return {
        tableData: tableData,
        tableColumns: [
          {
            key: 'selection',
            type: 'selection',
            label: '多选',
            width: 50
          },
          {
            key: 'name',
            label: '姓名',
            slot: 'name',
            minWidth: 130
          },
          {
            key: 'date',
            label: '日期',
            minWidth: 130
          },
          {
            key: 'status',
            label: '状态',
            slot: true
          },
          {
            label: '地址',
            key: 'address',
            showOverflowTooltip: true,
            minWidth: 230
          },
        ],
        config: {
          border: false,
          size: 'small',
          stripe: false,
          tree: false,
        },
      }
    },
    methods: {
      changeTree(val) {
        let children = [
          {
            id: Math.floor((Math.random() * 10000000)),
            age: 32,
            date: '2016-05-02',
            name: `子集姓名`,
            status: !!Math.floor((Math.random() * 2)),
            address: `上海市普陀区金沙江路 1518`,
          },
          {
            id: Math.floor((Math.random() * 10000000)),
            age: 32,
            date: '2016-05-02',
            name: `子集姓名`,
            status: !!Math.floor((Math.random() * 2)),
            address: `子集：上海市普陀区金沙江路 `,
          }
        ];
        if (val) {
          this.tableData[0]['children'] = children;
        } else {
          this.tableData[0]['children'] = [];
        }
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      search(form) {
        console.log('search', form);
      },
      reset() {
        console.log('reset');
      },
      handleSetting() {
        this.$refs['dynamicTable'].toggleDrawer();
      }
    }
  }
</script>
