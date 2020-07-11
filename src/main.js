
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "assets/reset.css"
import "assets/border.css"
import "amfe-flexible/index"
Vue.config.productionTip = false
import 'assets/reset.css'
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
