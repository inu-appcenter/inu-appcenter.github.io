import 'babel-polyfill'
import 'es6-promise/auto'
import 'event-source-polyfill'
import 'promise-polyfill/src/polyfill'

import Vue from 'vue'
import axios from 'axios'
import store from '@/store'
import App from '@/App.vue'
import router from '@/routes'
import VueI18n from 'vue-i18n'
import VTooltip from 'v-tooltip'
import VueRippler from 'vue-rippler'
import VueScrollTo from 'vue-scrollto'
import VueProgressiveImage from 'vue-progressive-image'
import {
  messages
} from './added'
import {
  globalVar
} from '@/globalVar'

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(VueI18n)
Vue.use(VTooltip)
Vue.use(VueRippler)
Vue.use(VueScrollTo)
Vue.use(VueProgressiveImage)
Kakao.init(process.env.KAKAO_KEY)

window.i18n = new VueI18n({
  locale: 'ko',
  messages,
});

new Vue({
  el: '#app',
  i18n,
  store,
  router,
  render: h => h(App),
});
