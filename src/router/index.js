import Vue from 'vue'
import Router from 'vue-router'
// @ == .. 返回上一级目录
import home from '@/components/home'
// import detail from '@/pages/detail'
import list from '@/pages/list'
Vue.use(Router)

// movie
import mIndex from '../movie/pages/index'
import mSearch from '../movie/components/search'
import mDetail from '../movie/pages/detail'
import list1 from '../movie/components/list1'
import list2 from '../movie/components/list2'
import list3 from '../movie/components/list3'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'mIndex',
      component: mIndex,
      meta: { keepAlive: true },
      children:[{
        path:'/piaofang',
        name:list1,
        component:list1,
        meta: { keepAlive: true }
      },
      {
        path:'/shangying',
        name:list2,
        component:list2,
        meta: { keepAlive: true }
      },{
        path:'/TOP250',
        name:list3,
        component:list3,
        meta: { keepAlive: true }
      }]
    },
    {
      path: '/search',
      name: 'search',
      component: mSearch
    },
    {
      path: '/detail',
      name: 'mDetail',
      component: mDetail
    },
    {
    	path: '/list',
    	name: 'list',
    	component: list
    },
    {
      path: '/movieDetail',
      name: 'movieDetail',
      component: mDetail
    }
  ]
})
