<template>
  <page-wrapper :title="$route.meta['title']">
    <template #content>
      指令方式：v-permission, v-role<br>
      函数方式：hasPermission, hasRole<br>
    </template>

    <UserPermissions/>

    <el-card class="mt10">
      <el-divider content-position="left">指令方式判断权限 v-permission</el-divider>
      <el-row :gutter="10">
        <el-col :xl="6" :lg="6" :md="12" :sm="12" :xs="24" v-permission="'User:store'">
          <el-button type="primary">
            添加用户：拥有（User:store）节点可见
          </el-button>
        </el-col>
        <el-col :xl="6" :lg="6" :md="12" :sm="12" :xs="24" v-permission="'User:destroy'">
          <el-button type="danger">
            删除用户：拥有（User:destroy）节点可见
          </el-button>
        </el-col>
        <el-col :xl="6" :lg="6" :md="12" :sm="12" :xs="24" v-permission="['User:store','User:destroy']">
          <el-button type="success">
            拥有（User:store || User:destroy）任一节点可见
          </el-button>
        </el-col>
      </el-row>

      <el-divider content-position="left">函数方式判断权限 hasPermission</el-divider>
      <el-row :gutter="10">
        <el-col :xl="6" :lg="6" :md="12" :sm="12" :xs="24" v-if="hasPermission('User:store')">
          <el-button type="primary">
            添加用户：拥有（User:store）节点可见
          </el-button>
        </el-col>
        <el-col :xl="6" :lg="6" :md="12" :sm="12" :xs="24" v-if="hasPermission('User:destroy')">
          <el-button type="danger">
            删除用户：拥有（User:destroy）节点可见
          </el-button>
        </el-col>
        <el-col :xl="6" :lg="6" :md="12" :sm="12" :xs="24" v-if="hasPermission(['User:store','User:destroy'])">
          <el-button type="success">
            拥有（User:store || User:destroy）任一节点可见
          </el-button>
        </el-col>
      </el-row>

      <el-divider content-position="left">指令方式判断权限 v-role</el-divider>
      <el-row :gutter="10">
        <el-col :xl="6" :lg="6" :md="12" :sm="12" :xs="24" v-role="'Administrator'">
          <el-button type="primary">
            添加用户：拥有（Administrator）角色可见
          </el-button>
        </el-col>
        <el-col :xl="6" :lg="6" :md="12" :sm="12" :xs="24" v-role="'Test'">
          <el-button type="danger">
            删除用户：拥有（test）角色可见
          </el-button>
        </el-col>
        <el-col :xl="6" :lg="6" :md="12" :sm="12" :xs="24" v-role="['Administrator','Test']">
          <el-button type="success">
            拥有（Administrator ||test）任一角色可见
          </el-button>
        </el-col>
      </el-row>

      <el-divider content-position="left">函数方式判断权限 hasRole</el-divider>
      <el-row :gutter="10">
        <el-col :xl="6" :lg="6" :md="12" :sm="12" :xs="24" v-if="hasRole('Administrator')">
          <el-button type="primary">
            添加用户：拥有（Administrator）角色可见
          </el-button>
        </el-col>
        <el-col :xl="6" :lg="6" :md="12" :sm="12" :xs="24" v-if="hasRole('Test')">
          <el-button type="danger">
            删除用户：拥有（Test）角色可见
          </el-button>
        </el-col>
        <el-col :xl="6" :lg="6" :md="12" :sm="12" :xs="24" v-if="hasRole(['Administrator','Test'])">
          <el-button type="success">
            拥有（Administrator || Test）任一角色可见
          </el-button>
        </el-col>
      </el-row>
    </el-card>

  </page-wrapper>
</template>
<style lang="scss" scoped>
.el-button {
  width: 100%;
}
</style>
<script>
import UserPermissions from "@/views/demo/permission/UserPermissions.vue";
import {PageWrapper} from "@/components/Page"
import {defineComponent} from "vue";
import {usePermission} from "@/composables/usePermission.js";


export default defineComponent({
  name: "index",
  components: {PageWrapper, UserPermissions},
  setup() {
    const {hasPermission, hasRole} = usePermission();

    return {
      hasPermission,
      hasRole
    }
  },
})
</script>

