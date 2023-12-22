import { createRouter, createWebHashHistory } from 'vue-router';

// () =>
//         import(/* webpackChunkName: "home" */ './pages/Home.vue'),
export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: () =>
        import(/* webpackChunkName: "home" */ '@/pages/Home.vue'),
    },
  ],
});
