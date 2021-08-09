<template>
  <BasicTable :columns="tableColumns" size="small" border></BasicTable>
</template>

<script>
import {BasicForm} from "@/components/Form";
import {BasicTable} from "@/components/Table"

export default {
  name: "TableList",
  components: {BasicForm, BasicTable},
  data() {
    return {
      activeName: 'second',
      tableColumns: [
        {prop: 'id', label: 'ID', width: 100, align: 'center'},
        {prop: 'title', label: '标题', minWidth: 100, align: 'center'},
        {prop: 'name', label: '标识', minWidth: 100, align: 'center'},
        {prop: 'group_label', label: '分组', minWidth: 100, align: 'center'},
        {prop: 'type_label', label: '类型', minWidth: 100, align: 'center'},
        {prop: 'created_at', label: '创建时间', minWidth: 100, align: 'center'},
      ],
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style scoped>

</style>