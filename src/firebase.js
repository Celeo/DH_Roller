import Vue from 'vue'
import Firebase from 'firebase'
import VueFire from 'vuefire'
import config from './config.json'


Vue.use(VueFire)

export const firebaseApp = Firebase.initializeApp({
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  databaseURL: config.databaseURL,
  storageBucket: config.storageBucket,
  messagingSenderId: config.messagingSenderId
})
export const db = firebaseApp.database()
