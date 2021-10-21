<template>
  <div>
    <el-table v-bind="$attrs" v-loading="$attrs.loading">
      <template v-for="(column,index) in columns" :key="index">
        <el-table-column v-if="column.slot" v-bind="column">
          <template #default="scope">
            <slot :name="column.slot" v-bind="scope"></slot>
          </template>
        </el-table-column>
        <el-table-column v-else v-bind="column"/>
      </template>
      <slot></slot>
    </el-table>
    <div class="mt-2" v-if="Object.keys(paginate).length > 0">
      <el-pagination v-bind="paginate" @current-change="changePage" hide-on-single-page></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasicTable",
  props: {
    columns: {
      type: Array,
      default: () => ([]),
    },
    paginate: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, {emit}) {
    const changePage = (currentPage) => {
      emit('change-page', currentPage);
    }

    return {
      changePage
    }
  }
}
</script>

<style scoped>

</style>