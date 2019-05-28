import Vue from 'vue'
import Router from 'vue-router'
import Getdata1 from '@/components/Getdata1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Getdata1',
      component: Getdata1
    },
    {
      path: '/order',
      name: 'order',
      component: order
    }
  ]
})
