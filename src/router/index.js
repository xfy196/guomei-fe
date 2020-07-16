import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Shop from '../views/Shop.vue'
import Message from '../views/Message.vue'
import Cart from '../views/Cart.vue'
import Mine from '../views/Mine.vue'
import List from '@/List/List'
import Category from 'views/Category.vue'
import Location from 'views/Location.vue'
import Address from 'views/Address.vue'
import AddNewAddress from 'views/AddNewAddress.vue'
import SelectCity from 'views/SelectCity.vue'
import Search from 'views/Search.vue'
import Login from '@/Login/login'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/shop',
    name: 'shop',
    component: Shop
  },
  {
    path: '/message',
    name: 'message',
    component: Message
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/mine',
    name: 'mine',
    component: Mine
  },
  {
    path: '/list',
    name: 'list',
    component: List
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path : "/categories",
    name : "categories",
    component : Category
  },
  {
    path : "/location",
    name : "location",
    component : Location
  },
  {
    path : "/address",
    name : "address",
    component : Address,
  },
  {
    path : "/addNewAddress",
    name : "addNewAddress",
    component : AddNewAddress,
  },
  {
    path : "/selectCity",
    name : "selectCity",
    component : SelectCity,
  },
  {
    path : "/search",
    name : "search",
    component : Search,
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
