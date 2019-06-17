import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
// 当打包后app.js非常大（至少超过1Mb）的时候，可以使用异步组件，按需加载
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: ()=> import('@/pages/home/Home')
    },
    {
      path: '/city',
      name: 'City',
      component: ()=> import('@/pages/city/City')
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: ()=> import('@/pages/detail/Detail')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
