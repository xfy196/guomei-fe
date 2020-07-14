import Vue from 'vue'
import Vuex from 'vuex'
import cart from "./modules/cart"
import good from "./modules/good"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    locationCity: '北京'
  },
  mutations: {
    changeCity(state, city) {
      state.locationCity = city;
      console.log(state.locationCity);
    }
  },
  actions: {

  },
  modules: {
    cart,
    good
    
  }
})
