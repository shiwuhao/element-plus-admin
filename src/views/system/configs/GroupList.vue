<template>
  {{ form }}
  <el-card shadow="none">
    <el-tabs v-model="query.group" tab-position="top" @tab-click="getList">
      <template v-for="(item,index) in getGroups" :key="index">
        <el-tab-pane :label="item.label" :name="item.value">
          <el-row v-loading="listLoading">
            <el-col :span="12">
              <BasicForm v-if="query.group === item.value"
                         v-model="form"
                         label-position="top"
                         :schemas="schemas"
                         @submit="updateItem"></BasicForm>
            </el-col>
          </el-row>
        </el-tab-pane>
      </template>
    </el-tabs>
  </el-card>
</template>

<script>
import {BasicForm} from "@/components/Form";
import {useConfig} from "@/composables/config/useConfig";
import {groupListApi, groupUpdateApi} from "@/api/configs"
import {useResourceApi} from "@/composables/useResourceApi";
import {reactive, ref, watch} from "vue";

export default {
  name: "GroupList",
  components: {BasicForm},
  setup() {
    const {getGroups} = useConfig();

    const {listLoading, query, formRef, item: form, lists, updateItem, getList} = useResourceApi({
      listApi: groupListApi,
      updateApi: groupUpdateApi,
      query: {group: 'basic'},
    })

    const object2array = (object) => {
      return Object.keys(object).map(item => {
        return {value: item, label: object[item]};
      });
    }

    const schemas = ref([]);
    watch(lists, () => {
      schemas.value.splice(0, schemas.value.length);
      lists.value.forEach(item => {
        let _value = item.value;
        if (item.component === 'TimePicker') {
          _value = new Date('2021-08-27 ' + item.value)
          console.log(item.value, _value)
        }

        form.value[item.name] = _value;
        schemas.value.push({
          field: item.name,
          label: `${item.title}(${item.name})`,
          component: item.component,
          componentProps: {
            options: object2array(item['parse_extra']),
            style: {width: '100%'},
          },
        })
      })
    })


    return {
      listLoading,
      query,
      formRef,
      form,
      lists,
      schemas,
      getGroups,
      updateItem,
      getList,
    }
  },
}
</script>

<style scoped>

</style>