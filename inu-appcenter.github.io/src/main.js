import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VTooltip from 'v-tooltip'

import UnivCam from './md/univcam.md'

import '@/style/style.scss'


// https://www.npmjs.com/package/vue-markdown-loader


Vue.use(VTooltip)
Kakao.init(process.env.KAKAO_KEY)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
