import Vue from 'vue'
import axios from 'axios'
import App from '@/App.vue'
import store from '@/store'
import router from '@/routes'
import VueI18n from 'vue-i18n'
import VTooltip from 'v-tooltip'
import firebase from 'firebase/app'
import VueScrollTo from 'vue-scrollto'
import Ripple from 'vue-ripple-directive'
import VueScrollReveal from 'vue-scroll-reveal'
import {globalVar} from '@/globalVar'
import VueRippler from 'vue-rippler'

Vue.use(VueRippler)

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(VueI18n) // locale
Vue.use(VTooltip)
Vue.use(VueScrollTo)
Vue.use(VueScrollReveal)

Ripple.zIndex = 9999
Vue.directive('ripple', Ripple)

Kakao.init(process.env.KAKAO_KEY) // -> .env

let config = {
  apiKey: process.env.FIREBASE_API,
  authDomain: process.env.FIREBASE_ID + ".firebaseapp.com",
  databaseURL: "https://" + process.env.FIREBASE_ID + ".firebaseio.com",
  projectId: process.env.FIREBASE_ID,
  storageBucket: process.env.FIREBASE_ID + ".appspot.com",
  messagingSenderId: process.env.FIREBASE_MESSAGING
};
firebase.initializeApp(config); // -> .env

// set locale
import {messages} from './added'
window.i18n = new VueI18n({
  locale: 'ko',
  messages
})

new Vue({
  el: '#app',
  i18n,
  store,
  router,
  render: h => h(App)
})
