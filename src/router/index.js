import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import { useHttpStore } from '@/stores/httpStore.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products',
      name: 'products',
      component:()=>import('../views/product/ProductList.vue')
    },
    {
      path: '/services',
      name: 'services',
      component:()=> import ('../views/service/ServiceList.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component:()=>import('../views/cart/CartView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component:()=>import('../views/login/LoginConnexion.vue')
    },
    {
      path: '/register',
      name: 'register',
      component:()=>import('../views/login/RegisterView.vue')
    },
    {
      path: '/profil',
      name: 'profil',
      component:()=>import('../views/user/UserProfil.vue')
    },
    {
      path: '/product/:id',
      name: 'product',
      component:()=>import('../views/product/ProductView.vue')
    },
    {
      path: '/success_order',
      name: 'successOrder',
      component:()=>import('../views/cart/SuccessOrder.vue'),
      beforeEnter: (to, from, next)=>{
        console.log(useHttpStore().$state.authenticated)
        if (useHttpStore().$state.authenticated === false) {
          next("login")
        }else {
          next()
        }
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/about/AboutView.vue')
    }
  ]
})

export default router
