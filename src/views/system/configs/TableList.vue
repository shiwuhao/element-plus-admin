<template>
  <el-card shadow="none">
    <BasicQuery v-model="query" :schemas="schemas" :col-props="{span:6}" @submit="getQuery"></BasicQuery>
  </el-card>
  <el-card shadow="none" class="mt10">
    <BasicTable :columns="columns"
                :data="lists"
                :paginate="paginate"
                :loading="listLoading"
                @change-page="changePage">
      <el-table-column label="操作" width="120">
        <template #default="scope">
          <el-button type="text" size="small" @click="editItem(scope.$index)">编辑</el-button>
          <el-popconfirm title="删除你是认真的吗？" iconColor="red" @confirm="deleteItem(scope.$index)">
            <template #reference>
              <el-button type="text" size="small">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </BasicTable>
    <EditTemplate
      ref="editTemplateRef"
      v-model="dialog"
      :resource-api="resourceApi"
    />
  </el-card>
</template>

<script>
import {BasicTable, BasicQuery} from "@/components/Table"
import EditTemplate from "@/views/system/configs/EditTemplate";
import {listApi, itemApi, updateApi, storeApi, deleteApi} from "@/api/configs";
import {useResourceApi} from "@/composables/useResourceApi";
import {defineComponent, reactive, toRefs} from "vue";

export default defineComponent({
  name: "TableList",
  components: {BasicQuery, BasicTable, EditTemplate},
  setup() {
    const state = reactive({
      columns: [
        {prop: 'id', label: 'ID', width: 100},
        {prop: 'title', label: '标题', minWidth: 100},
        {prop: 'name', label: '标识', minWidth: 100},
        {prop: 'group_label', label: '分组', minWidth: 100},
        {prop: 'type_label', label: '类型', minWidth: 100},
        {prop: 'created_at', label: '创建时间', minWidth: 100},
      ],
      schemas: [
        {field: 'title', placeholder: '标题', component: 'Input'},
        {field: 'name', placeholder: '标识', component: 'Input'},
      ],
    })

    const resourceApi = useResourceApi({
      listApi,
      itemApi,
      updateApi,
      storeApi,
      deleteApi
    });

    return {
      ...toRefs(state),
      ...toRefs(resourceApi),
      resourceApi,
    }
  },
})
</script>

