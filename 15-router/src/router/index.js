import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history' // default 'hash'
})

router.beforeEach((to, from, next) => {
  console.log("beforeEach, to:", to)
  next()
})

export default router