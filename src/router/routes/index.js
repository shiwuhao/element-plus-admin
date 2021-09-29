import dashboard from "@/router/routes/modules/dashboard";
import system from "@/router/routes/modules/system";
import component from "@/router/routes/modules/component";
import permission from "@/router/routes/modules/permission";
import basic from "@/router/routes/basic";
import page from "@/router/routes/modules/page";
// 需要前端生成菜单的路由
export const menuRoutes = [
  ...permission,
  ...component,
  ...page
];

export const asyncRoutes = [
  ...dashboard,
  ...system,
  ...menuRoutes
];

export const basicRoutes = [...basic];