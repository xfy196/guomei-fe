
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "assets/reset.css"
import "assets/border.css"
import "amfe-flexible/index"
import 'assets/reset.css'

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
