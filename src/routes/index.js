import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'

Vue.use(VueRouter)
Vue.use(Meta)

import Home from '@/pages/Home'
import Contact from '@/pages/Contact'
import About from '@/pages/About'

import Project from '@/components/Project'
import PostEntries from '@/statics/data/post.json'

const postRoutes = Object.keys(PostEntries).map(section => {
  const children = PostEntries[section].map(child => ({
    path: `${child.id}`,
    name: child.id,
    component: resolve => require([`@/markdown/${child.id}.md`], resolve),
  }))
  return {
    path: `/${section}`,
    name: section,
    component: Project,
    children,
  }
})

export default new VueRouter({
  mode: 'history',
  functional: true,
  routes: [
    ...postRoutes,
    {
      path: '*',
      redirect: '/',
    },
    {
      path: '/post',
      redirect: '/',
    },
    {
      path: '/',
      name: 'home',
      component: Home,
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
  ],

  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition)
      return savedPosition
    else {
      return {
        x: 0,
        y: 0,
      }
    }
  },
})
