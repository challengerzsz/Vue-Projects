import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TeestElementUI from '@/components/TestElementUI'

Vue.use(Router)

export default new Router({
  hashbang: true,
  history: true,
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'TeestElementUI',
      component: TeestElementUI
    }
  ]
})
