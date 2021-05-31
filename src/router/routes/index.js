import dashboard from "@/router/routes/modules/dashboard";
import system from "@/router/routes/modules/system";
import component from "@/router/routes/modules/component";
import basic from "@/router/routes/basic";

export const asyncRoutes = [
  ...dashboard,
  ...system,
  ...component
];

export const basicRoutes = [...basic];