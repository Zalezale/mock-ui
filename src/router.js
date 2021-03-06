import Vue from 'vue'
import Router from 'vue-router'
import submit from './views/submitApi.vue'
import tip from './views/tip.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/submit',
      name: 'submit',
      component: submit
    },
    {
      path: '/',
      name: 'tip',
      component: tip
    },
    {
      path: '/use',
      name: 'use',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/useApi.vue')
    }
  ]
})
