import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'
import cart from "./modules/cart"
import good from "./modules/good"
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [persistedState({storage: window.sessionStorage})],
  state: {
    locationCity: '北京'
  },
  mutations: {
    changeCity(state, city) {
      state.locationCity = city;
    }
  },
  actions: {

  },
  getters: {
    getNowCity(state){
      return state.locationCity;
    }
  },
  modules: {
    cart,
    good
  }
})
