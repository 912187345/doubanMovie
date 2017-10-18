import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 首页
import index from '../movie/choseModul.vue'

// movie
const mIndex = r => require.ensure([], () => r(require('@/movie/pages/index')), 'mIndex');
const celebrity = r => require.ensure([], () => r(require('@/movie/pages/celebrityDetail')), 'celebrity');
const mDetail = r => require.ensure([], () => r(require('@/movie/pages/detail')), 'mDetail');
const mSearch = r => require.ensure([], () => r(require('@/movie/components/search')), 'mSearch');
const list1 = r => require.ensure([], () => r(require('@/movie/components/list1')), 'list1');
const list2 = r => require.ensure([], () => r(require('@/movie/components/list2')), 'list2');
const list3 = r => require.ensure([], () => r(require('@/movie/components/list3')), 'list3');

// book
const bIndex = r => require.ensure([], () => r(require('@/movie/bookPage/index')), 'bIndex');
const bDetail = r => require.ensure([], () => r(require('@/movie/bookPage/bookDetail')), 'bDetail');

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
