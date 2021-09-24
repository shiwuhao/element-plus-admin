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
        <el-col :xl="6" :lg="6" :md="12" :sm="12" :xs="24">
          <el-button v-permission="'User:add'" type="primary">
            添加用户：拥有节点（User:add）节点可见
          </el-button>
        </el-col>
        <el-col :xl="6" :lg="6" :md="12" :sm="12" :xs="24">
          <el-button v-permission="'User:destroy'" type="danger">
            删除用户：拥有节点（User:destroy）节点可见
          </el-button>
        </el-col>
        <el-col :xl="6" :lg="6" :md="12" :sm="12" :xs="24">
          <el-button v-permission="['User:destroy','User:destroy']" type="success">
            拥有节点（User:add || User:destroy）任一节点可见
          </el-button>
        </el-col>
        <el-col :xl="6" :lg="6" :md="12" :sm="12" :xs="24">
          <el-button v-permission="{permission:['User:destroy','User:destroy'],boolean:'and'}" type="warning">
            拥有节点（User:add && User:destroy）全部节点可见
          </el-button>
        </el-col>
      </el-row>

      <el-divider content-position="left">函数方式判断权限 hasPermission</el-divider>
      <el-row :gutter="10">
        <el-col :xl="6" :lg="6" :md="12" :sm="12" :xs="24">
          <el-button v-if="hasPermission('User:add')" type="primary">
            添加用户：拥有节点（User:add）节点可见
          </el-button>
        </el-col>
        <el-col :xl="6" :lg="6" :md="12" :sm="12" :xs="24">
          <el-button v-if="hasPermission('User:destroy')" type="danger">
            删除用户：拥有节点（User:destroy）节点可见
          </el-button>
        </el-col>
        <el-col :xl="6" :lg="6" :md="12" :sm="12" :xs="24">
          <el-button v-if="hasPermission(['User:destroy','User:destroy'])" type="success">
            拥有节点（User:add || User:destroy）任一节点可见
          </el-button>
        </el-col>
        <el-col :xl="6" :lg="6" :md="12" :sm="12" :xs="24">
          <el-button v-if="hasPermission(['User:destroy','User:destroy'],'and')" type="warning">
            拥有节点（User:add && User:destroy）全部节点可见
          </el-button>
        </el-col>
      </el-row>

      <el-divider content-position="left">指令方式判断权限 v-role</el-divider>
      <el-row :gutter="10">
        <el-col :xl="6" :lg="6" :md="12" :sm="12" :xs="24">
          <el-button v-if="hasPermission('User:add')" type="primary">
            添加用户：拥有节点（User:add）节点可见
          </el-button>
        </el-col>
        <el-col :xl="6" :lg="6" :md="12" :sm="12" :xs="24">
          <el-button v-if="hasPermission('User:destroy')" type="danger">
            删除用户：拥有节点（User:destroy）节点可见
          </el-button>
        </el-col>
        <el-col :xl="6" :lg="6" :md="12" :sm="12" :xs="24">
          <el-button v-if="hasPermission(['User:destroy','User:destroy'])" type="success">
            拥有节点（User:add || User:destroy）任一节点可见
          </el-button>
        </el-col>
        <el-col :xl="6" :lg="6" :md="12" :sm="12" :xs="24">
          <el-button v-if="hasPermission(['User:destroy','User:destroy'],'and')" type="warning">
            拥有节点（User:add && User:destroy）全部节点可见
          </el-button>
        </el-col>
      </el-row>

      <el-divider content-position="left">函数方式判断权限 hasRole</el-divider>
      <el-row :gutter="10">
        <el-col :xl="6" :lg="6" :md="12" :sm="12" :xs="24">
          <el-button v-if="hasPermission('User:add')" type="primary">
            添加用户：拥有节点（User:add）节点可见
          </el-button>
        </el-col>
        <el-col :xl="6" :lg="6" :md="12" :sm="12" :xs="24">
          <el-button v-if="hasPermission('User:destroy')" type="danger">
            删除用户：拥有节点（User:destroy）节点可见
          </el-button>
        </el-col>
        <el-col :xl="6" :lg="6" :md="12" :sm="12" :xs="24">
          <el-button v-if="hasPermission(['User:destroy','User:destroy'])" type="success">
            拥有节点（User:add || User:destroy）任一节点可见
          </el-button>
        </el-col>
        <el-col :xl="6" :lg="6" :md="12" :sm="12" :xs="24">
          <el-button v-if="hasPermission(['User:destroy','User:destroy'],'and')" type="warning">
            拥有节点（User:add && User:destroy）全部节点可见
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
import UserPermissions from "@/views/permission/UserPermissions";
import {PageWrapper} from "@/components/Page"
import {defineComponent, toRefs, reactive} from "vue";
import {usePermission} from "@/composables/usePermission";


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

