import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/insights',
      name: 'insights',
      component: () => import('./views/Insights.vue'),
    },
    {
      path: '/charts',
      name: 'charts',
      component: () => import('./views/Charts.vue'),
    },
  ],
});
