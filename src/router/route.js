import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { title: 'Home' },
    component: () => import('@/pages/Home/Home.vue'),
  },
  {
    path: '/about',
    name: 'about',
    meta: { title: 'AboutUs' },
    component: () => import('@/pages/About/About.vue'),
  },
  {
    path: '/project-list',
    name: 'project-list',
    meta: { title: 'ProjectList' },
    component: () => import('@/pages/ProjectList/ProjectList.vue'),
  },
  {
    path: '/join',
    name: 'join-us',
    meta: { title: 'JoinUs' },
    component: () => import('@/pages/JoinUs/JoinUs.vue'),
  },
  {
    path: '/contact',
    name: 'contact-us',
    meta: { title: 'ContactUs' },
    component: () => import('@/pages/ContactUs/ContactUs.vue'),
  },
  {
    path: '/:catchAll(.*)*',
    name: '404',
    meta: { title: '404' },
    component: () => import('@/pages/Common/NotFound.vue'),
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkExactActiveClass: 'text-yellow',
  scrollBehavior(to, from, savedPosition) {
    document.documentElement.scrollTop = 0;
    return { x: 0, y: 0 }
  }
})

export default router;