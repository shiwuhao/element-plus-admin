import dashboard from "@/router/routes/modules/dashboard";
import system from "@/router/routes/modules/system";
import table from "@/router/routes/modules/table";
import basic from "@/router/routes/basic";

export const asyncRoutes = [
  ...dashboard,
  ...system,
  ...table
];

export const basicRoutes = [...basic];