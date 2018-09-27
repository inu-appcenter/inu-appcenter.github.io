import 'babel-polyfill'
import 'event-source-polyfill'
import 'es6-promise/auto'

import Vue from 'vue'
import axios from 'axios'
import App from '@/App.vue'
import router from '@/routes'
import VueI18n from 'vue-i18n'
import VTooltip from 'v-tooltip'
import VueScrollTo from 'vue-scrollto'
import VueScrollReveal from 'vue-scroll-reveal'
import {globalVar} from '@/globalVar'

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(VTooltip)
Vue.use(VueScrollTo)
Vue.use(VueScrollReveal)

Kakao.init(process.env.KAKAO_KEY)

// set locale
Vue.use(VueI18n)

import {messages} from './added'
window.i18n = new VueI18n({
  locale: 'ko',
  messages
})

new Vue({
  el: '#app',
  i18n,
  router,
  render: h => h(App)
})
