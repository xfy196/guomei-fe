
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "assets/reset.css"
import "assets/border.css"
import "amfe-flexible/index"
<<<<<<< HEAD
Vue.config.productionTip = false
=======
import 'assets/reset.css'

Vue.config.productionTip = false

>>>>>>> master
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
