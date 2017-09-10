import Vue from 'vue'
import Router from 'vue-router'
// 引入页面
import Index from '@/pages/index/index.vue'
import Login from '@/pages/login/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },{
      path:'/index',
      component:Index
    },{
      path:'/login',
      component: Login
    }
  ]
})
