import {createRouter, createWebHistory} from 'vue-router'
import {basicRoutes} from '@/router/routes';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: basicRoutes,
})

export function setupRouter(app) {
  app.use(router);
}