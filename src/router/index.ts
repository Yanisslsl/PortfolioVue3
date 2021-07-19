import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import App from '../App.vue'
import About from '../views/About.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'App',
    component: App
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
