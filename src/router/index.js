import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home'
import Contact from '../pages/Contact'
import About from '../pages/About'


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
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
  ]
})


export default router
