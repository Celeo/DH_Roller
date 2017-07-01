import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

import Landing from '@/components/Landing'
import Roller from '@/components/Roller'


Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/app',
      name: 'Roller',
      component: Roller
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/app') {
    if (store.getters.name === '') {
      next({ name: 'Landing' })
      return
    }
  }
  next()
})


export default router
