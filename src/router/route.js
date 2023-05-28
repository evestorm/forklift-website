import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    meta: { title: 'Home' },
    component: () => import('@/pages/Home/Home.vue'),
  },
  {
    path: '/about',
    meta: { title: 'AboutUs' },
    component: () => import('@/pages/About/About.vue'),
  },
  {
    path: '/:catchAll(.*)*',
    name: '404',
    meta: { title: '404' },
    component: () => import('@/pages/Common/NotFound.vue'),
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: 'text-yellow',
})

export default router;