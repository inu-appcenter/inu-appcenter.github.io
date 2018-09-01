import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import VTooltip from 'v-tooltip'
import VueScrollTo from 'vue-scrollto'
import VueClipboard from 'vue-clipboard2'
import Toasted from 'vue-toasted'
import VueProgressBar from 'vue-progressbar'
import * as VueGoogleMaps from 'vue2-google-maps'
import {globalVar} from '@/globalVar'

import '@/style/style.scss'

// https://www.npmjs.com/package/vue-markdown-loader

Vue.use(VTooltip)
Vue.use(VueScrollTo)
Vue.use(VueClipboard)
Vue.use(Toasted)
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.GOOGLE_API,
    libraries: 'places',
  },
})
Vue.use(VueProgressBar, {
  color: '#034A9A',
  failedColor: 'red',
  height: '2px'
})

Kakao.init(process.env.KAKAO_KEY)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
