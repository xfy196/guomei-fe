import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Shop from '../views/Shop.vue'
import Message from '../views/Message.vue'
import Cart from '../views/Cart.vue'
import Mine from '../views/Mine.vue'
import FoodList from '../views/FoodList'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/Message',
    name: 'Message',
    component: Message
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/Mine',
    name: 'Mine',
    component: Mine
  },
  {
    path: '/FoodList',
    name: 'FoodList',
    component: FoodList
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
