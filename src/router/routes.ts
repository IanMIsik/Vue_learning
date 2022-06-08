import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AppPages/Home.vue') },
      { path: '/login', component: () => import('pages/AppPages/Login.vue') },
      { path: '/about', component: () => import('pages/AppPages/About.vue') },
      {
        path: '/dynamic',
        component: () => import('pages/AppPages/Dynamic.vue'),
      },
      {
        path: '/repos',
        component: () => import('pages/AppPages/repos.vue'),
      },
      {
        path: '/simple_state',
        component: () => import('pages/AppPages/StatePage.vue'),
      },
      {
        path: '/bc_demo',
        component: () => import('pages/AppPages/BCPage.vue'),
      },
      {
        path: '/gh_demo',
        component: () => import('pages/AppPages/GHPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
