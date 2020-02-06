import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  modes: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home/Home.vue')
    },
    {
      path: '/resume',
      name: 'resume',
      component: () => import('../views/resume/Resume.vue')
    }
  ]
})
