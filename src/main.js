import Vue from 'vue'
import router from './router'
import App from './App'
import Firebase from 'firebase'
import VueFire from 'vuefire'

import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'


Vue.use(VueFire)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  firebase: {
    // TODO
  }
})
