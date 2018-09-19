import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'

import Home from '@/pages/Home'
import Contact from '@/pages/Contact'
import About from '@/pages/About'

import Project from '@/components/Project'


Vue.use(VueRouter)
Vue.use(Meta)


export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/project',
          component: Project,
          alias: [
            '/INUClub',
            '/INUM',
            '/UnivCam',
            '/INUBus',
            '/Cafeteria',
          ]
        },
      ]
    },
    {
      path: '*',
      redirect: '/',
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
  ]
})
