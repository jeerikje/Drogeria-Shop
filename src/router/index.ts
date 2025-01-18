import { createRouter, createWebHistory } from 'vue-router'

import Cart from '../views/Cart.vue';
import HomeView from '../views/HomeView.vue'
import MuziView from '../views/Muzi.vue'
import ZenyView from '../views/Zeny.vue'
import DetiView from '../views/Deti.vue'
import ZdravieView from '../views/Zdravie.vue'
import ZvierataView from '../views/Zvierata.vue'
import registracia from '../views/SignUpView.vue'

import darcekyView from '../views/DarcekyView.vue'
import kozmetikaView from '../views/KozmetikaView.vue'
import parfumyView from '../views/ParfumyView.vue'
import skincareView from '../views/SkincareView.vue'

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
      path: '/darceky',
      name: 'darceky',
      component: darcekyView,
    },
    {
      path: '/parfumy',
      name: 'parfumy',
      component: parfumyView,
    },
    {
      path: '/skincare',
      name: 'skincare',
      component: skincareView,
    },
    {
      path: '/kozmetika',
      name: 'kozmetika',
      component: kozmetikaView,
    }
  ],
})

export default router
