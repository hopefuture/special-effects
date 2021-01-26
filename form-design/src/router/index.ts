import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/official',
    name: 'official',
    redirect: '/official/home',
    component: () => import(/* webpackChunkName: "official" */ '@/views/official/index.vue'),
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../views/official/Home.vue')
      },
      {
        path: 'about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/official/About.vue')
      }
    ]
  },
  {
    path: '/design',
    name: 'Design',
    redirect: '/design/simple',
    component: () => import(/* webpackChunkName: "design" */ '../views/Design/index.vue'),
    children: [
      {
        path: 'simple',
        name: 'Simple',
        component: () => import(/* webpackChunkName: "simple" */ '../views/Design/components/Simple.vue')
      },
      {
        path: 'animation',
        name: 'Animation',
        component: () => import(/* webpackChunkName: "animation" */ '../views/Design/components/Animation.vue')
      },
      {
        path: 'multiple',
        name: 'Multiple',
        component: () => import(/* webpackChunkName: "multiple" */ '../views/Design/components/Multiple.vue')
      },
      {
        path: 'nested',
        name: 'Nested',
        component: () => import(/* webpackChunkName: "nested" */ '../views/Design/components/Nested.vue')
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
