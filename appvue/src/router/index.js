import Vue from 'vue'
import Router from 'vue-router'
import dashboard from '@/views/my-header/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: dashboard
    }
  ]
})
