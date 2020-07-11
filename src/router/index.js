import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/Home.vue'
import Shop from 'views/Shop.vue'
import Message from 'views/Message.vue'
import Cart from 'views/Cart.vue'
import Mine from 'views/Mine.vue'
import Category from 'views/Category.vue'

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
    path : "/categories",
    name : "categories",
    component : Category
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
