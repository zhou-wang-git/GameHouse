import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Play from '../views/Play.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/play/:gameId',
    name: 'Play',
    component: Play
  }
]

const router = createRouter({
  history: createWebHistory(), // ✅ 正确写法，避免 undefined 报错
  routes
})

export default router
