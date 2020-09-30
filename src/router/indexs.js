import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import home from '@v/Home/shopHome.vue'
// import search from '@v/Home/search/homeSearch'
// import cartoon from '@v/Cart/CarToon.vue'
// import self from '@v/Self/self.vue'
// import sort from '@v/Sort/sort.vue'
import page404 from '@v/Others/page404.vue'
// import ad from '@v/Others/ad.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
    // children: [
    //   {
    //     path: '/search',
    //     name: 'search',
    //     component: () => import(/* webpackChuckName: 'search' */'@v/Home/search/homeSearch.vue')
    //   },
    // ]
  },
  {
    path: '/home',
    name: 'home',
    component: home,
  },
  {
    path: '/search',
    name: 'search',
    component: () => import(/* webpackChuckName: 'search' */'@v/Home/search/homeSearch.vue')
  },

  {
    path: '/money',
    name: 'money',
    /* 魔法注释 路由懒加载*/
    component: () => import(/* webpackChuckName: 'money' */'@v/Money/money.vue')
  },
  {
    path: '/cartoon',
    name: 'cartoon',
    /* 魔法注释 路由懒加载*/
    component: () => import(/* webpackChuckName: 'cartoon' */'@v/Cart/CarToon.vue')
  },
  {
    path: '/self',
    name: 'self',
    /* 魔法注释 路由懒加载*/
    component: () => import(/* webpackChuckName: 'self' */'@v/Self/self.vue')
  },
  {
    path: '/sort',
    name: 'sort',
    /* 魔法注释 路由懒加载*/
    component: () => import(/* webpackChuckName: 'sort' */'@v/Sort/sort.vue')
  },
  {
    path: '/shopHot',
    name: 'shopHot',
    /* 魔法注释 路由懒加载*/
    component: () => import(/* webpackChuckName: 'sort' */'@v/Home/hotShop/shop.vue')
  },
  // 里面有个ad
  // {
  //   path: '/sort',
  //   // 别名
  //   alias: '/v',
  //   name: 'sort',
  //   /* 魔法注释 路由懒加载*/
  //   components: {
  //     default: sort,
  //     v2: ad
  //   }
  // },
  {
    path: '*',
    component: page404
  }
]

const router = new VueRouter({
  mode: 'history',// 模式 两个 hash/history
  // base: process.env.BASE_URL,
  routes
})


// 全局守卫

// router.beforeEach((to, from, next) => {
//   console.log('beforeEach')
//   next()
// })

// router.afterEach((to, from) => {
//   console.log('afterEach')
// })


export default router
