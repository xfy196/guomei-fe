import Vue from 'vue'
import App from './App.vue'
import "./assets/reset.css"
import "amfe-flexible/index"
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
