import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 首页
import index from '../movie/choseModul.vue'

// movie
import mIndex from '../movie/pages/index'
import celebrity from '../movie/pages/celebrityDetail'
import mDetail from '../movie/pages/detail'
import mSearch from '../movie/components/search'
import list1 from '../movie/components/list1'
import list2 from '../movie/components/list2'
import list3 from '../movie/components/list3'

// book
import bIndex from '../movie/bookPage/index'
import bDetail from '../movie/bookPage/bookDetail'

export default new Router({
  mode: 'history',
  routes: [
    // 首页
    {
      path:'/',
      name:'index',
      component:index
    },
    // 电影 S
    {
      path: '/movie',
      name: 'mIndex',
      component: mIndex,
      meta: { keepAlive: true },
      children:[{
        path:'piaofang',
        name:'list1',
        component:list1,
        meta: { keepAlive: true }
      },
      {
        path:'shangying',
        name:'list2',
        component:list2,
        meta: { keepAlive: true }
      },{
        path:'TOP250',
        name:'list3',
        component:list3,
        meta: { keepAlive: true }
      }]
    },
    {
      path: '/search/:type',
      name: 'search',
      component: mSearch
    },
    // {
    //   path: '/movie/detail',
    //   name: 'mDetail',
    //   component: mDetail
    // },
    {
      path: '/movie/movieDetail',
      name: 'movieDetail',
      component: mDetail
    },
    { //影人详情
      path: '/movie/celebrity',
      name: 'celebrity',
      component: celebrity
    },
    // 电影 E

    // 图书 S
    {
      path:'/book',
      name:'bIndex',
      component: bIndex
    },
    {
      path:'/book/:bookId',
      name:'bDetail',
      component: bDetail
    }
    // 图书 E
  ]
})
