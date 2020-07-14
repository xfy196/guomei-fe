import Vue from 'vue'
import Vuex from 'vuex'
import cart from "./modules/cart"
import good from "./modules/good"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cart,
    good
  }
})
