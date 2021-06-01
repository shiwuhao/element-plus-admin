import {createRouter, createWebHistory} from 'vue-router'
import {basicRoutes} from '@/router/routes';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: basicRoutes,
})

export function setupRouter(app) {
  app.use(router);
}
export default router;