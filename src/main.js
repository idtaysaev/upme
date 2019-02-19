import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './pwa/registerServiceWorker'
import './assets/scss/main.scss'
import { api } from '@/plugins/http-api'
import VueClipboard from 'vue-clipboard2'
import VueYandexMetrika from 'vue-yandex-metrika'

// Token
const token = localStorage.getItem('token')
if (token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

Vue.config.productionTip = false

// Vue clipboard
Vue.use(VueClipboard)

// Yandex Metrica
Vue.use(VueYandexMetrika, {
  id: 51418792,
  router: router,
  env: process.env.NODE_ENV
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
