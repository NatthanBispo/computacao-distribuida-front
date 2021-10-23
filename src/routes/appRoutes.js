import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {
        requiresAuth: true,
      }
    },
  ],
});

export default routes;
