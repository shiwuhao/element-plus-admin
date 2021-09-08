import dashboard from "@/router/routes/modules/dashboard";
import system from "@/router/routes/modules/system";
import component from "@/router/routes/modules/component";
import page from "@/router/routes/modules/page";
import basic from "@/router/routes/basic";
import test from "@/router/routes/modules/test";
export const asyncRoutes = [
  ...dashboard,
  ...system,
  ...component,
  ...page,
  ...test
];

export const basicRoutes = [...basic];