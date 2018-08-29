import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VTooltip from 'v-tooltip'
import VueScrollTo from 'vue-scrollto'


import '@/style/style.scss'


// https://www.npmjs.com/package/vue-markdown-loader


Vue.use(VTooltip)
Vue.use(VueScrollTo)
Kakao.init(process.env.KAKAO_KEY)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
