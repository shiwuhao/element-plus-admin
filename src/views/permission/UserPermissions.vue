<template>
  <el-card shadow="none">
    <template #header>
      当前用户拥有的权限：
      <el-select v-model="currentUser" placeholder="Select" size="mini" @change="changeUser">
        <el-option v-for="item in changeUsers" :key="item.value" :label="item.username" :value="item.id">
          <span style="float: left">{{ item.username }}</span>
          <span style="float: right;color: var(--el-text-color-secondary);font-size: 13px;">
            {{ item.id }}
          </span>
        </el-option>
      </el-select>
    </template>
    <el-tabs v-model="currentTab">
      <el-tab-pane label="菜单" name="menus">
        <pre>{{getMenus}}</pre>
      </el-tab-pane>
      <el-tab-pane label="角色" name="roles">
        <pre>{{ getRoles }}</pre>
      </el-tab-pane>
      <el-tab-pane label="动作" name="actions">
        <pre>{{ getActions }}</pre>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>
<style lang="scss" scoped>
.el-tab-pane{
  height: 200px;
  overflow-x: auto;
}
</style>
<script>
import Menu from '@/layouts/menu/index';
import {PageWrapper} from "@/components/Page"
import {defineComponent, toRefs, reactive} from "vue";
import {usePermission} from "@/composables/usePermission";
import {useUser} from "@/composables/useUser";


export default defineComponent({
  name: "UserPermissions",
  components: {PageWrapper, Menu},
  setup() {
    const state = reactive({
      currentTab: 'menus',
      currentUser: 1,
      changeUsers: [
        {id: 1, username: '用户1'},
        {id: 2, username: '用户2'}
      ],
    })

    const permissions = usePermission();
    const user = useUser();

    const changeUser = () => {

    }

    return {
      ...toRefs(state),
      ...toRefs(permissions),
      ...toRefs(user),
      changeUser,
    }
  },
})
</script>

