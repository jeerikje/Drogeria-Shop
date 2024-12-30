import { createRouter, createWebHistory } from 'vue-router'

import Cart from '../components/Cart.vue';
import HomeView from '../views/HomeView.vue'
import MuziView from '../components/Muzi.vue'
import ZenyView from '../components/Zeny.vue'
import DetiView from '../components/Deti.vue'
import ZdravieView from '../components/Zdravie.vue'
import ZvierataView from '../components/Zvierata.vue'
import registracia from '../views/SignUpView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/muzi',
      name: 'Muzi',
      component: MuziView
    },
    {
      path: '/zeny',
      name: 'Zeny',
      component: ZenyView
    },
    {
      path: '/deti',
      name: 'Deti',
      component: DetiView
    },
    {
      path: '/zvierata',
      name: 'Zvierata',
      component: ZvierataView
    },
    {
      path: '/zdravie',
      name: 'Zdravie',
      component: ZdravieView
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    },
    {
      path: '/registracia',
      name: 'registracia',
      component: registracia,
    }
  ],
})

export default router
