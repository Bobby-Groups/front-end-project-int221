import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'


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
<<<<<<< HEAD
    path: '/brand',
    name: 'Brand',
    component: () => import('../views/Brand.vue')

=======
    path: '/team',
    name: 'About',
    component: About
>>>>>>> 06a60f5c891d5a1fbea50971b5c02f7bbe757bb6
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
