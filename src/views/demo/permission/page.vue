<template>
  <page-wrapper :title="$route.meta['title']">
    <template #content>
      <div class="text-secondary text-sm">
        <el-alert title="" type="info">
          基于后台的权限模式，后台返回用户的权限节点，包含菜单，角色，动作<br>
          mock了两组数据， id为1 和 2 具体返回的数据可以在mock/personal.js内查看<br>
          菜单：当前用户拥有的菜单权限<br>
          角色：当前用户拥有的角色权限<br>
          动作：当前用户拥有的角色所包含的的动作节点合集<br><br>
          用户切换后查看左侧菜单变化
        </el-alert>
      </div>
    </template>

    <UserPermissions/>

  </page-wrapper>
</template>

<script>
import UserPermissions from "@/views/demo/permission/UserPermissions.vue";
import {PageWrapper} from "@/components/Page"
import {defineComponent} from "vue";


export default defineComponent({
  name: "index",
  components: {PageWrapper, UserPermissions},
})
</script>

