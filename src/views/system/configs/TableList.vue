<template>
  <BasicTable :columns="tableColumns" :data="data" size="small" border></BasicTable>
</template>

<script>
import {BasicForm} from "@/components/Form";
import {BasicTable} from "@/components/Table"
import {useConfigRequest} from "@/api/useConfigRequest";
import {reactive, unref, toRefs} from "vue";

export default {
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
    const {data, isFinished} = useConfigRequest('index', {});
    console.log(data);
    return {
      ...toRefs(state),
      data
    }
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