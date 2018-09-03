import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import VTooltip from 'v-tooltip'
import VueScrollTo from 'vue-scrollto'
import VueClipboard from 'vue-clipboard2'
import Toasted from 'vue-toasted'
import VueProgressBar from 'vue-progressbar'
import VueScrollReveal from 'vue-scroll-reveal'
import * as VueGoogleMaps from 'vue2-google-maps'
import firebase from 'firebase/app'
import {globalVar} from '@/globalVar'

// https://www.npmjs.com/package/vue-markdown-loader

Vue.use(Toasted)
Vue.use(VTooltip)
Vue.use(VueScrollTo)
Vue.use(VueClipboard)
Vue.use(VueScrollReveal)

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.GOOGLE_API,
    libraries: 'places',
  },
})

Vue.use(VueProgressBar, {
  color: '#034A9A',
  height: '2px'
})

Kakao.init(process.env.KAKAO_KEY)

let config = {
  apiKey: process.env.FIREBASE_API,
  authDomain: process.env.FIREBASE_ID + ".firebaseapp.com",
  databaseURL: "https://" + process.env.FIREBASE_ID + ".firebaseio.com",
  projectId: process.env.FIREBASE_ID,
  storageBucket: process.env.FIREBASE_ID + ".appspot.com",
  messagingSenderId: process.env.FIREBASE_MESSAGING
};
firebase.initializeApp(config);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
