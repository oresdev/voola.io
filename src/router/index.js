import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('./views/home.vue'),
  },
  {
    path: '/cookies-policy',
    component: () => import('./views/cookies-policy.vue'),
  },
  {
    path: '/terms-and-conditions',
    component: () => import('./views/terms-and-conditions.vue'),
  },
  {
    path: '/privacy-policy',
    component: () => import('./views/privacy-policy.vue'),
  },
  {
    path: '/aml',
    component: () => import('./views/aml.vue'),
  },
  {
    path: '/contact-us',
    component: () => import('./views/contact-us.vue'),
  },
  {
    path: '/:catchAll(.*)',
    component: () => import('./views/404.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { left: 0, top: 0 }
    }
  },
})

export default router
