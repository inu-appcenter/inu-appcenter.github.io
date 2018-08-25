import Vue from 'vue'
import App from './App.vue'
import router from './router'

// https://www.npmjs.com/package/vue-markdown-loader

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
