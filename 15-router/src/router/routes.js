import HomeComponent from '../components/Home'
import UserComponent from '../components/User'
import ProductComponent from '../components/Product'

export const  routes = [

  {
    name: 'Home',
    path: '',
    component: HomeComponent
  },
  {
    name: 'User',
    path: '/user',
    component: UserComponent,
    children: [
      {
        path: ':id',
        component: UserComponent
      },
      {
        path: '*',
        redirect: '/'
      }
    ]
  },
  {
    name: 'Product',
    path: '/product',
    component: ProductComponent,
    beforeEnter: (to, from, next) => {
      console.log("in route, to:", to)
      next()
    }
  },
  {
    name: 'Order',
    path: '/order',
    component: () => import('../components/Order.vue'), // Lazy Loading
  }

]