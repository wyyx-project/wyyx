import Vue from 'vue'
import VueRouter from 'vue-router'


// import Home from '../views/Home.vue'

let Home = () =>  import(/* webpackChunkName: "home" */ '@v/Home.vue')

// 首页
let Tindex = () => import(/* webpackChunkName: "Tindex" */'@v/index/Tindex.vue')
let nihao = () => import(/* webpackChunkName: "nihao" */'@v/index/nihao.vue')

// 红包页
let Tred = () => import(/* webpackChunkName: "Tred" */'@v/red/Tred.vue')
//  分类页
let Tclassify = () => import(/* webpackChunkName: "Tclassify" */'@v/classify/Tclassify.vue')
let TcateList = () => import(/* webpackChunkName: "TcateList" */'@v/classify/cateCom/TcateList.vue')
let TcateDetails = () => import(/* webpackChunkName: "TcateDetails" */'@v/classify/TcateDetails.vue')
let TdetailsList = () => import(/* webpackChunkName: "TdetailsList" */'@v/classify/cateDetailsCom/TdetailsList.vue')
let TdetailsItem = () => import(/* webpackChunkName: "TdetailsItem" */'@v/classify/cateDetailsCom/TdetailsItem.vue')
let TtabBar = () => import(/* webpackChunkName: "TtabBar" */'@c/TtabBar.vue')
// 购物车页
let Tcart = () => import(/* webpackChunkName: "Tcart" */'@v/cart/Tcart.vue')
// 个人页
let Tpersonal = () => import(/* webpackChunkName: "Tpersonal" */'@v/personal/Tpersonal.vue')


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/Tindex',
    children: [
      {
        path: '/Tindex',
        name: 'Tindex',
        component: Tindex,
        children: [
          {
            path: '/nihao',
            name: 'nihao',
            component: nihao
          }
        ]
      },
      {
        path: '/Tred',
        name: 'Tred',
        component: Tred
      },
      {
        path: '/Tclassify',
        name: 'Tclassify',
        redirect: '/TcateList/11',
        component: Tclassify,
        children: [
          {
            path: '/TcateList/:id',
            name: 'TcateList',
            component: TcateList
          }
        ]

      },
      {
        path: '/Tcart',
        name: 'Tcart',
        component: Tcart
      },
      {
        path: '/Tpersonal',
        name: 'Tpersonal',
        component: Tpersonal
      },
    ]

  },
  {
    path: '/TcateDetails/',
    name: 'TcateDetails',
    component: TcateDetails,
    redirect: '/TdetailsItem/',
    children: [
      {
        path: '/TdetailsList/',
        name: 'TdetailsList',
        component: TdetailsList
      },
      {
        path: '/TdetailsItem/',
        name: 'TdetailsItem',
        component: TdetailsList
      },
      // {
      //   path: '/TtabBar/:id1/:id2',
      //   name: 'TtabBar',
      //   component: TtabBar,
      //   beforeEnter(to, from, next) {
      //     console.log(from);
      //     console.log(to);
      //     next()
      //   }
      // }
    ]
  }
  // {
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
