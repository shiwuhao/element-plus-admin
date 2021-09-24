<template>
  <page-wrapper :title="$route.meta['title']">
    <template #content>
      目前mock了两组数据， id为1 和 2 具体返回的菜单可以在mock/sys/menu.ts内查看<br>
      菜单：当前用户拥有的菜单权限<br>
      角色：当前用户拥有的角色权限<br>
      动作：当前用户拥有的角色所包含的的动作节点合集<br>
      <el-alert title="用户切换后查看左侧菜单变化" type="success"/>
    </template>

    <UserPermissions/>

  </page-wrapper>
</template>

<script>
import UserPermissions from "@/views/permission/UserPermissions";
import {PageWrapper} from "@/components/Page"
import {defineComponent, toRefs, reactive} from "vue";


export default defineComponent({
  name: "index",
  components: {PageWrapper, UserPermissions},
  setup() {


    return {}
  },
})
</script>

