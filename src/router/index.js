import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import GoodsList from '@v/index/goodList/GoodsList.vue'

const routes = [{
        path: '/',
        name: 'goodslist',
        component: GoodsList,
    },
    {
        path: '/goodsDetails',
        name: 'goodsDetails',
        component: () => import('@v/index/itemList/Zitem.vue')
    }


]


const router = new VueRouter({
    mode: 'hash',
    routes
})

export default router