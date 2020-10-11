import Vue from 'vue'
import VueRouter from 'vue-router'


// import Home from '../views/Home.vue'

let Home = () => import(/* webpackChunkName: "home" */ '@v/Home.vue')

// 首页
let shopHome = () => import(/* webpackChunkName: "shopHome" */'@v/index/shopHome.vue')


// 红包页
let TredPacket = () => import(/* webpackChunkName: "Tred" */'@v/redPacket/Tred.vue')
//  分类页
let Tclassify = () => import(/* webpackChunkName: "Tclassify" */'@v/classify/cateCom/Tclassify.vue')

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
    redirect: '/shopHome',
    children: [
      {
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
        component: Tclassify,
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
    path: '/shopHot',
    name: 'shopHot',
    /* 魔法注释 路由懒加载*/
    component: () => import(/* webpackChuckName: 'sort' */'@v/index/hotShop/shop.vue')
  },



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
