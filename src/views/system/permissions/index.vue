<template>
  <page-wrapper :title="$route.meta['title']">
    <template #extra>
      <el-button type="primary" size="mini" @click="autoGenerateApi">自动生成权限节点</el-button>
      <el-button type="primary" size="mini" @click="addItem">新增</el-button>
    </template>
    <el-card shadow="none">
      <BasicQuery v-model="query" :schemas="schemas" :col-props="{span:6}" @submit="getQuery"></BasicQuery>
    </el-card>
    <el-card shadow="none" class="mt10">
      <BasicTable :columns="columns"
                  :data="tableData"
                  :paginate="paginate"
                  :loading="listLoading"
                  row-key="id"
                  @change-page="changePage">
        <el-table-column label="操作" width="120">
          <template #default="scope">
            <el-button type="text" size="small" @click="editItem(scope.$index)">编辑</el-button>
            <el-popconfirm title="删除你是认真的吗？" iconColor="red" @confirm="deleteItem(scope.$index)">
              <template #reference>
                <el-button type="text" size="small" :disabled="scope.row.name === 'Administrator'">删除</el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </BasicTable>
      <EditTemplate ref="editTemplateRef" v-model="dialog"/>
    </el-card>
  </page-wrapper>
</template>

<script>
import {PageWrapper} from "@/components/Page"
import {BasicTable, BasicQuery} from "@/components/Table"
import EditTemplate from "./EditTemplate";
import {listApi, itemApi, updateApi, storeApi, deleteApi, autoGenerateApi} from "@/api/permissions";
import {useResourceApi} from "@/composables/useResourceApi";
import {defineComponent, reactive, toRefs, provide, watch,ref} from "vue";

export default defineComponent({
  name: "index",
  components: {BasicQuery, BasicTable, EditTemplate, PageWrapper},
  setup() {
    const state = reactive({
      columns: [
        {prop: 'id', label: 'ID', width: 100},
        {prop: 'title', label: '显示名称', minWidth: 100},
        {prop: 'alias', label: '别名标识', minWidth: 100},
        {prop: 'type_label', label: '类型', minWidth: 100},
        {prop: 'url', label: 'url', minWidth: 100},
        {prop: 'created_at', label: '创建时间', minWidth: 100},
      ],
      schemas: [
        {field: 'id', placeholder: '权限ID', component: 'Input'},
        {field: 'title', placeholder: '权限名称', component: 'Input'},
        {field: 'name', placeholder: '权限标识', component: 'Input'},
      ],
    })

    const resourceApi = useResourceApi({
      listApi,
      itemApi,
      updateApi,
      storeApi,
      deleteApi,
      item: {type: 'menu'}
    });

    function listToTree(oldArr) {
      oldArr.forEach(element => {
        let parentId = element.pid;
        if (parentId !== 0) {
          oldArr.forEach(ele => {
            if (ele.id === parentId) {
              if (!ele.children) {
                ele.children = [];
              }
              ele.children.push(element);
            }
          });
        }
      });
      oldArr = oldArr.filter(ele => ele.parentId === 0); //这一步是过滤，按树展开，将多余的数组剔除；
      return oldArr;
    }

    const {lists} = resourceApi;
    const tableData = ref();
    watch(lists, (val) => {
      console.log(1111,val);
      tableData.value = listToTree(val);
      console.log(tableData);
    })


    provide('resourceApi', resourceApi);

    return {
      ...toRefs(state),
      ...toRefs(resourceApi),
      tableData,
      autoGenerateApi,
    }
  },
})
</script>

