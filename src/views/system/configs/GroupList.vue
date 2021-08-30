<template>
  <el-card shadow="none">
    <el-tabs v-model="query.group" tab-position="left" @tab-click="getList">
      <template v-for="(item,index) in getGroups" :key="index">
        <el-tab-pane :label="item.label" :name="item.value">
          <el-row v-loading="listLoading">
            <el-col xs="24">
              <BasicForm v-if="query.group === item.value"
                         v-model="form"
                         label-position="top"
                         :action-props="{position:'left',submitButtonProps:{loading:confirmLoading}}"
                         :schemas="schemas"
                         @submit="updateItem">
                <template #label="{labelProps}">
                  <span class="label">{{ labelProps.title }}</span>
                  <span class="sub-label">{{ labelProps.name }}</span>
                </template>
              </BasicForm>
            </el-col>
          </el-row>
        </el-tab-pane>
      </template>
    </el-tabs>
  </el-card>
  {{ form }}
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
    const VModel = ref('2021-08-08 16:00:00');
    const {getGroups} = useConfig();

    const {listLoading, confirmLoading, query, formRef, item: form, lists, updateItem, getList} = useResourceApi({
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
        form.value[item.name] = item.value;
        schemas.value.push({
          field: item.name,
          labelProps: {title: item.title, name: item.name},
          component: item.component,
          formProps: {
            required: true,
          },
          componentProps: {
            options: object2array(item['parse_extra']),
            style: {width: '100%'},
          },
        })
      })
    })

    return {
      listLoading,
      confirmLoading,
      query,
      formRef,
      form,
      lists,
      schemas,
      getGroups,
      updateItem,
      getList,
      VModel,
    }
  },
}
</script>

<style scoped>
.label {

}

.sub-label {
  color: #C0C4CC;
  margin-left: 10px;
}
</style>