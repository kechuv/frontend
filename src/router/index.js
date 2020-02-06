import Vue from 'vue';
import VueRouter from 'vue-router';

import Website from '@/layouts/Website.vue';
import WebRoutes from './modules/website.js';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'website',
    component: Website,
    redirect: {
      name: 'home'
    },
    children: [
      ...WebRoutes
    ]
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: () => ({ x: 0, y: 0 })
})

router.beforeEach((to, from, next) => {
  const routeExist = to.matched.some(record => record);
  if (!routeExist) next({ name: "website" });
  else next();
});

export default router;
