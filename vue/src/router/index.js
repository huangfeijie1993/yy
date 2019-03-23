// import Vue from 'vue'
// import Router from 'vue-router'
// import home from '@/components/home'
// import member from '@/components/member'
// import shopping from '@/components/shopping'
// import search from '@/components/search'
// // import grid  from "@/components/gird"
// import newslist from '@/components/newslist'
// import NewsInfo from '@/components/NewsInfo'
// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/home',
//       component: home
//     },
//     {
//       path: '/member',
//       component: member
//     },
//     {
//       path: '/search',
//       component: search
//     },
//     {
//       path: '/shopping',
//       component: shopping
//     },
//     {
//       path: '/home/newslist',
//       component: newslist
//     },
//     {
//       path: '/NewsInfo',
//       component: NewsInfo
//     }
//   ]
// })



import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/tabbar/Home'
import Meber from '../components/tabbar/Meber'
import Cart from '../components/tabbar/Cart'
import Search from '../components/tabbar/Search'
// import Newslist from '../components/news/Newslist'
// import NewsInfo from '../components/news/NewsInfo'
import Photolist from  '../components/photos/photolist'
import Photoinfo from  '../components/photos/Photoinfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/meber',
      component: Meber
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/search',
      component: Search
    },
    // {
    //   path: '/home/newslist',
    //   component: newslist
    // },
    // {
    //   path: '/home/newslist/NewsInfo',
    //   component: NewsInfo
    // },
    
    {
      path: '/home/photolist',
      component: Photolist
    },
    {
      path: '/home/photolist/photoinfo/:id',
      component: Photoinfo
    },
  ]
})
