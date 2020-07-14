import Vue from 'vue'
import Vuex from 'vuex'

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
    
  }
})
