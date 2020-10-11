import Vue from 'vue'
import App from './App.vue'

import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/swiper-bundle.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false

import './assets/reset.css'



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
