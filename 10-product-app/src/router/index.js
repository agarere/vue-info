import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductList from "../components/products/ProductList"
import ProductPurchase from "../components/products/ProductPurchase"
import ProductSell from "../components/products/ProductSell"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: ProductList
  },
  {
    path: '/purchase',
    component: ProductPurchase
  },
  {
    path: '/sell',
    component: ProductSell
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router