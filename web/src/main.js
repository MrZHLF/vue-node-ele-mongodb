import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import './assets/scss/style.scss'
import './assets/iconfont/iconfont.css'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import Card from './components/Card.vue'
Vue.component('m-card',Card)

import ListCard from './components/ListCard.vue'
Vue.component('m-list-card',ListCard)

Vue.use(VueAwesomeSwiper)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
