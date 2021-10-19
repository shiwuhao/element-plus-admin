import basic from "@/router/routes/basic";


// demo中生成菜单
const demoRoutes = [];
const demoFiles = import.meta.globEager('./modules/demo/*.js');
Object.keys(demoFiles).forEach((key) => demoRoutes.push(...demoFiles[key].default));

// module
const moduleRoutes = [];
const moduleFiles = import.meta.globEager('./modules/*.js');
Object.keys(moduleFiles).forEach((key) => moduleRoutes.push(...moduleFiles[key].default));

const asyncRoutes = [...demoRoutes, ...moduleRoutes];
const basicRoutes = [...basic];

export {
  basicRoutes,
  asyncRoutes,
  demoRoutes,
};