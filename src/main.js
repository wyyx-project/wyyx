import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'


Vue.config.productionTip = false

import './assets/reset.css'



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
