import basic from "@/router/routes/basic";
import component from "@/router/routes/modules/demo/component";
import dashboard from "@/router/routes/modules/demo/dashboard";
import feature from "@/router/routes/modules/demo/feature";
import page from "@/router/routes/modules/demo/page";
import permission from "@/router/routes/modules/demo/permission";

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