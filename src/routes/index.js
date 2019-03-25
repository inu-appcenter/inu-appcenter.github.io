import Vue from 'vue';
import VueRouter from 'vue-router';
import Meta from 'vue-meta';

import Home from '@/pages/Home';
import Contact from '@/pages/Contact';
import About from '@/pages/About';

import Project from '@/components/Project';

Vue.use(VueRouter);
Vue.use(Meta);

export default new VueRouter({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      component: Home,
      children: [{
        path: '/project',
        component: Project,
        alias: [
          // '@/markdown/*' 에 위치한 마크다운 파일명과 일치하게, 확장자는 빼고, 아래에 등록해야합니다.
          '/INUM',
          '/INUClub',
          '/UnivCam',
          '/INUBus',
          '/Cafeteria'
        ],
      }, ],
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
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    };
  },
});
