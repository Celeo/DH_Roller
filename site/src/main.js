import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App'

import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'


Vue.config.productionTip = false

const lastUsedName = window.sessionStorage.getItem('name')
if (lastUsedName) {
  store.commit('SET_NAME', lastUsedName)
}

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
