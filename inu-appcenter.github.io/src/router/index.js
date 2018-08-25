import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home'


Vue.use(VueRouter)



const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})


export default router
