import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/Home.vue'
import Shop from 'views/Shop.vue'
import Message from 'views/Message.vue'
import Cart from 'views/Cart.vue'
import Mine from 'views/Mine.vue'
import List from 'views/List.vue'
import Category from 'views/Category.vue'
import Location from 'views/Location.vue'
import Address from 'views/Address.vue'
import AddNewAddress from 'views/AddNewAddress.vue'
import SelectCity from 'views/SelectCity.vue'
import Detail from 'views/Detail.vue'
import Search from 'views/Search.vue'
import Login from 'views/Login.vue'
import NotFound from "views/404.vue"

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
    path : "/list",
    name : "list",
    component : List
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail,
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
  {
    path : "/*",
    name : 404,
    component : NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
