import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/pages/home'
import about from '@/pages/about'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: home
    },
    {
      path: '/about',
      component: about
    },
    {
      path: '/',
     redirect: '/home'
    }
  ]
})
