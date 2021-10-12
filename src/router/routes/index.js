import dashboard from "@/router/routes/modules/dashboard";
import system from "@/router/routes/modules/system";
import component from "@/router/routes/modules/component";
import feature from "@/router/routes/modules/feature.js";
import permission from "@/router/routes/modules/permission";
import page from "@/router/routes/modules/page.js";
import basic from "@/router/routes/basic";
<<<<<<< HEAD
import page from "@/router/routes/modules/page";
=======


>>>>>>> master
// 需要前端生成菜单的路由
export const menuRoutes = [
  ...permission,
  ...component,
<<<<<<< HEAD
  ...page
=======
  ...feature,
  ...page,
>>>>>>> master
];

export const asyncRoutes = [
  ...dashboard,
  ...system,
  ...menuRoutes
];

export const basicRoutes = [...basic];