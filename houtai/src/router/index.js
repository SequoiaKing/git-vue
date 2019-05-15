import Vue from 'vue'
import Router from 'vue-router'
import leftlist from '@/components/leftlist'
import shangpinguanli from '@/components/shangpinguanli'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'leftlist',
      component: leftlist
    },
    {
      path:'/shangpinguanli',
      name: 'shangpinguanli',
      component: shangpinguanli
    }
  ]
})
