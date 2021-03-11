<template>
  <div>
    <el-drawer title="表格设置" v-model="drawer" size="260px">
      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange"
                   class="column-item">全选
      </el-checkbox>
      <el-checkbox-group v-model="checkedColumns" @change="handleCheckedColumns">
        <el-row v-for="column in columns" :key="column.key" class="column-item">
          <el-col :span="24">
            <el-checkbox :label="column.key">{{ column.label }} ({{ column.key }})</el-checkbox>
          </el-col>
        </el-row>
      </el-checkbox-group>
    </el-drawer>

    <el-table ref="el-table"
              :data="data"
              :border="border"
              :size="tableSize"
              :stripe="stripe"
              v-loading="loading"
              :height="height"
              :max-height="maxHeight"
              :row-key="rowKey"
              :tree-props="treeProps"
              tooltip-effect="light">
      <template v-for="(column,index) in columns">
        <template v-if="checkedColumns.indexOf(column.key) >= 0">
          <template v-if="column.slot" :v-slot="column.key"/>
          <el-table-column
            v-else
            :prop="column.key"
            :key="index"
            :index="column.index"
            :type="column.type ? column.type : 'default'"
            :column-key="column.columnKey"
            :label="column.label"
            :width="column.width"
            :min-width="column.minWidth"
            :fixed="column.fixed"
            :render-header="column.renderHeader"
            :show-overflow-tooltip="column.showOverflowTooltip"
            :sortable="column.sortable"
            :sort-method="column.sortMethod"
            :sort-by="column.sortBy">
          </el-table-column>
        </template>
      </template>
      <slot></slot>
    </el-table>
    <div class="flex-row-justify">
      <div>
        <slot name="selection-operate"></slot>
      </div>
      <el-pagination
        v-if="Object.keys(paginate).length > 0"
        class="mt10"
        layout="prev, pager, next"
        @current-change="changePage"
        :total="50">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DynamicTable',
  props: {
    data: {
      type: Array,
      default: () => {
        return [];
      },
      require: true,
    },
    columns: {
      type: Array,
      default: () => {
        return [];
      },
      require: true,
    },
    stripe: {
      type: Boolean,
      default: false,
    },
    border: {
      type: Boolean,
      default: false,
    },
    height: {
      type: [String, Number],
    },
    maxHeight: {
      type: [String, Number],
      default: '100vh',
    },
    size: {
      type: String,
      default: '',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    rowKey: {
      type: [Function, String],
      default: 'id',
    },
    treeProps: {
      type: Object,
      default: () => {
        return {children: 'children', hasChildren: 'hasChildren'}
      },
    },
    paginate: {
      type: Object,
      default: () => {
        return {}
      },
    }
  },
  data() {
    return {
      allColumns: [],
      checkedColumns: [],
      drawer: false,
      tableSize: this.size,
      checkAll: true,
      isIndeterminate: false,
    };
  },
  mounted() {
    const allColumns = this.columns.map(item => item.key);
    this.allColumns = allColumns;
    this.checkedColumns = allColumns;
  },
  methods: {
    updateHeight() {
      this.$refs['el-table'].shouldUpdateHeight();
    },
    // 全选事件
    handleCheckAllChange(val) {
      this.checkedColumns = val ? this.allColumns : [];
      this.isIndeterminate = !val;
    },
    // 单选事件
    handleCheckedColumns(val) {
      let checkedCount = val.length;
      this.checkAll = checkedCount === this.allColumns.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.allColumns.length;
    },
    // 展开收缩表格设置抽屉
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    // 密度设置
    toggleDensity() {
      const size = ['medium', 'small', 'mini'];
      const nextIndex = size.indexOf(this.tableSize) + 1;
      this.tableSize = size[nextIndex > size.length ? 0 : nextIndex];
    },
    // 获取展示的字段
    getCheckedColumns() {
      return this.checkedColumns;
    },
    // 翻页
    changePage(page) {
      this.$emit('change-page', page);
    }
  },
}
</script>
<style lang="scss" scoped>
.column-item {
  padding: 5px 30px;
}
</style>