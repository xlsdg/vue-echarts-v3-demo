import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Demo01 from '@/components/Demo01'
import Demo02 from '@/components/Demo02'
import Demo03 from '@/components/Demo03'
import Demo04 from '@/components/Demo04'
import Demo05 from '@/components/Demo05'
import Demo06 from '@/components/Demo06'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }, {
    path: '/demo01',
    name: 'Demo01',
    component: Demo01
  }, {
    path: '/demo02',
    name: 'Demo02',
    component: Demo02
  }, {
    path: '/demo03',
    name: 'Demo03',
    component: Demo03
  }, {
    path: '/demo04',
    name: 'Demo04',
    component: Demo04
  }, {
    path: '/demo05',
    name: 'Demo05',
    component: Demo05
  }, {
    path: '/demo06',
    name: 'Demo06',
    component: Demo06
  }]
})
