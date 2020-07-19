import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'
import cart from "./modules/cart"
import good from "./modules/good"
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [persistedState({storage: window.sessionStorage, paths: ["cart.carts"]})],
  state: {
    locationCity: '北京',
    isGoTop : true,
    shippingAddress : "北京市"
  },
  mutations: {
    changeCity(state, city) {
      state.locationCity = city;
    },
    modifyGoTop(state, payLoad){
      state.isGoTop = payLoad;
    },
    updateShippingAddress(state, address){
      state.shippingAddress = address
    }
  },
  actions: {
    modifyGoTop({commit}, payLoad){
      commit("modifyGoTop", payLoad);
    },
    updateShippingAddress({commit}, address){
      commit("updateShippingAddress", address);
    }
  },
  getters: {
    getNowCity(state){
      return state.locationCity;
    },
    getGoTop(state){
      return state.isGoTop
    },
    getShippingAddress(state){
      return state.shippingAddress
    }
  },
  modules: {
    cart,
    good
  }
})
