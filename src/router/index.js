import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/color',
    name: 'Color',
    component: () => import('../views/Color.vue')
  },
  {
    path: '/total',
    name: 'Total',
    component: () => import('../views/Total.vue')
  },
  {
    path: '/brand',
    name: 'Brand',
    component: () => import('../views/Brand.vue')

  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
