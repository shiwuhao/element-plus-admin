<template>
  <BasicTable :columns="tableColumns" :data="tableData" size="small" border></BasicTable>
</template>

<script>
import {BasicForm} from "@/components/Form";
import {BasicTable} from "@/components/Table"
import {useFetchList, useFetchDetail} from "@/api/useConfigRequest";
import {defineComponent, reactive, toRefs,} from "vue";

export default defineComponent({
  name: "TableList",
  components: {BasicForm, BasicTable},
  setup() {
    const state = reactive({
      activeName: 'second',
      tableColumns: [
        {prop: 'id', label: 'ID', width: 100, align: 'center'},
        {prop: 'title', label: '标题', minWidth: 100, align: 'center'},
        {prop: 'name', label: '标识', minWidth: 100, align: 'center'},
        {prop: 'group_label', label: '分组', minWidth: 100, align: 'center'},
        {prop: 'type_label', label: '类型', minWidth: 100, align: 'center'},
        {prop: 'created_at', label: '创建时间', minWidth: 100, align: 'center'},
      ],
    })

    const {data, paginate} = useFetchList();

    return {
      ...toRefs(state),
      tableData: data,
      paginate,
    }
  },
})
</script>

<style scoped>

</style>