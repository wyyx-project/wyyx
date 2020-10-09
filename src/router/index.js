import Vue from 'vue'
import VueRouter from 'vue-router'


// import Home from '../views/Home.vue'

let Home = () => import( /* webpackChunkName: "home" */ '@v/Home.vue')

// 首页
let shopHome = () => import( /* webpackChunkName: "shopHome" */ '@v/index/shopHome.vue')

// 红包页
let TredPacket = () => import( /* webpackChunkName: "Tred" */ '@v/redPacket/Tred.vue')
//  分类页
let Tclassify = () => import( /* webpackChunkName: "Tclassify" */ '@v/classify/cateCom/Tclassify.vue')
let TcateList = () => import( /* webpackChunkName: "TcateList" */ '@v/classify/cateCom/TcateList.vue')
let TcateDetails = () => import( /* webpackChunkName: "TcateDetails" */ '@v/classify/cateDetailsCom/TcateDetails.vue')
let TdetailsList = () => import( /* webpackChunkName: "TdetailsList" */ '@v/classify/cateDetailsCom/TdetailsList.vue')
let TdetailsItem = () => import( /* webpackChunkName: "TdetailsItem" */ '@v/classify/cateDetailsCom/TdetailsItem.vue')
// let TtabBar = () => import( /* webpackChunkName: "TtabBar" */ '@c/TtabBar.vue')
// 购物车页
let Tcart = () => import( /* webpackChunkName: "Tcart" */ '@v/cart/Tcart.vue')
// 个人页
let Tpersonal = () => import( /* webpackChunkName: "Tpersonal" */ '@v/personal/Tpersonal.vue')


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/shopHome',
    children: [{
        path: '/shopHome',
        name: 'shopHome',
        component: shopHome,
      },
      {
        path: '/TredPacket',
        name: 'TredPacket',
        component: TredPacket
      },
      {
        path: '/Tclassify',
        name: 'Tclassify',
        redirect: '/TcateList/11',
        component: Tclassify,
        children: [{
          path: '/TcateList/:id',
          name: 'TcateList',
          component: TcateList
        }]
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import('@v/index/cart/Zcart.vue'),
        children: [{
          path: '/cartList',
          name: 'cartList',
          component: () => import('@v/index/cart/ZcartList.vue')
        }, ]
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
    children: [{
        path: '/TdetailsList/',
        name: 'TdetailsList',
        component: TdetailsList
      },
      {
        path: '/TdetailsItem/',
        name: 'TdetailsItem',
        component: TdetailsItem
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
  },
  {
    path: '/spellGroup',
    name: 'spellGroup',
    redirect: "/spellGroup/spellMall",
    component: () => import('@v/redPacket/spellGroup/spellGroup.vue'),
    children: [{
        path: '/spellGroup/spellMall',
        name: 'spellMall',
        redirect: {
          path: '/spellGroup/spellMall/spellList',
          query: {
            tabId: 0,
            categoryId: null
          }
        },
        component: () => import('@v/redPacket/spellGroup/spellMall.vue'),
        children: [{
          path: '/spellGroup/spellMall/spellList',
          name: 'spellList',
          component: () => import('@v/redPacket/spellGroup/spellList.vue'),

        }]
      },
      {
        path: '/spellGroup/myGroup',
        name: 'spellGroup/myGroup',
        component: () => import('@v/redPacket/spellGroup/myGroup.vue'),
      }
    ]
  },
  {
    path: '/search',
    name: 'search',
    redirect: "search/TdetailsList",
    component: () => import('@v/index/search/Tsearch.vue'),
    children: [{
      path: '/search/TdetailsList',
      name: 'search/TdetailsList',
      component: TdetailsList
    }]
  },
  {
    path: '/goodslist',
    name: 'goodslist',
    component: () => import('@v/index/goodList/GoodsList.vue'),
  },
  {
    path: '/goodsDetails',
    name: 'goodsDetails',
    component: () => import('@v/index/itemList/Zitem.vue'),
    children: [{
      path: '/TdetailsList/',
      name: 'TdetailsList',
      component: TdetailsList
    }, ]
  },
  // {
  //   path: '/cart',
  //   name: 'cart',
  //   component: () => import('@v/index/cart/Zcart.vue'),
  //   children: [{
  //     path: '/cartList',
  //     name: 'cartList',
  //     component: () => import('@v/index/cart/ZcartList.vue')
  //   }, ]
  // },

  {
    path: '/login',
    name: 'login',
    component: () => import( /* webpackChunkName: "index" */ '@v/personal/GComRou/login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import( /* webpackChunkName: "register" */ '@v/personal/GComRou/register.vue')
  },
  {
    path: '/order',
    name: 'order',
    component: () => import( /* webpackChunkName:"order" */ '@v/personal/GComRou/myOrder.vue')
  },
  {
    path: '/group',
    name: 'group',
    component: () => import( /* webpackChunkName:"group" */ '@v/personal/GComRou/myGroup.vue')
  },
  {
    path: '/redpacket',
    name: 'redpacket',
    component: () => import( /* webpackChunkName:"redpacket" */ '@v/personal/GComRou/myRedpacket.vue')
  },
  {
    path: '/integral',
    name: 'integral',
    component: () => import( /* webpackChunkName:"integral" */ '@v/personal/GComRou/myIntegral.vue')
  },
  {
    path: '/address',
    name: 'address',
    component: () => import( /* webpackChunkName:"address" */ '@v/personal/GComRou/myAddress.vue'),
  },
  {
    path: '/account',
    name: 'account',
    component: () => import( /* webpackChunkName:"group" */ '@v/personal/GComRou/myAccount.vue')
  },
  {
    path: 'rvice',
    name: 'service',
    component: () => import( /* webpackChunkName:"account" */ '@v/personal/GComRou/myService.vue')
  },
  {
    path: '/retroaction',
    name: 'retroaction',
    component: () => import( /* webpackChunkName:"feedback" */ '@v/personal/GComRou/myRetroaction.vue')
  },
  {
    path: '/help',
    name: 'help',
    component: () => import( /* webpackChunkName:"help" */ '@v/personal/GComRou/myHelp.vue')
  },
  {
    path: '/aftermarket',
    name: 'aftermarket',
    component: () => import( /* webpackChunkName:"aftermarket" */ '@v/personal/GComRou/myAftermarket.vue')
  },
  {
    path: '/addAddress',
    name: 'addAddress',
    component: () => import( /* webpackChunkName:"addAddress" */ '@v/personal/GComRou/addAddress.vue')
  }





]


const router = new VueRouter({
  mode: 'history',
  routes
})

export default router