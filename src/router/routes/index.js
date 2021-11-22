import basic from "@/router/routes/basic.js";
import component from "@/router/routes/modules/demo/component.js";
import dashboard from "@/router/routes/modules/demo/dashboard.js";
import feature from "@/router/routes/modules/demo/feature.js";
import page from "@/router/routes/modules/demo/page.js";
import permission from "@/router/routes/modules/demo/permission.js";

// demo中生成菜单
const demoRoutes = [
  ...dashboard,
  ...component,
  ...page,
  ...feature,
  ...permission,
];


// module
const moduleRoutes = [];
const moduleFiles = import.meta.globEager('./modules/*.js');
Object.keys(moduleFiles).forEach((key) => moduleRoutes.push(...moduleFiles[key].default));


// 异步路由
const asyncRoutes = [
  ...demoRoutes,
  ...moduleRoutes
];

// 需要生成菜单的路由
const menuRoutes = [
  ...demoRoutes,
];

// 基础路由
const basicRoutes = [...basic];

export {
  basicRoutes,
  asyncRoutes,
  menuRoutes,
};