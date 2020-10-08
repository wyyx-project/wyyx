<template>
  <div class="list-title" >
    <van-tabs title-active-color='red' sticky @click="clickHandler">
      <van-tab title="猜你喜欢">
        <listone></listone>
      </van-tab>
      <van-tab title="居家生活" name="b"><listtwo></listtwo></van-tab>
      <van-tab title="美食酒水" name="c"><listthree></listthree></van-tab>
      <van-tab title="个护清洁" name="d"><listfour></listfour></van-tab>
      <van-tab title="数码家电" name="e"><listfive></listfive></van-tab>
      <van-tab title="服饰鞋包" name="f"><listsix></listsix></van-tab>
      <van-tab title="运动旅行" name="g"><listseven></listseven></van-tab>
      <van-tab title="母婴亲子" name="h"><listeight></listeight></van-tab>
      <van-tab title="全球特色" name="i"><listnine></listnine></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";


import axios from 'axios'
import http from '@u/http.js'


import listone from './ListOne'
import listtwo from './ListTwo'
import listthree from './ListThree'
import listfour from './ListFour'
import listfive from './ListFive'
import listsix from './ListSix'
import listseven from './ListSeven'
import listeight from './ListEight'
import listnine from './ListNine'



Vue.use(Tab);
Vue.use(Tabs);

export default {
  data() {
    return {
      arr: [
        {
          nm:'猜你喜欢'
        },
        {
          nm:'居家生活'
        },
        {
          nm:'美食酒水'
        },
        {
          nm:'个护清洁'
        },
        {
          nm:'数码家电'
        },
        {
          nm:'服饰鞋包'
        },
        {
          nm:'运动旅行'
        },
      ]
    };
  },
  methods: {
    clickHandler(name){
      this.activeName=name
    }
  },
  components: {
    listone,
    listtwo,
    listthree,
    listfour,
    listfive,
    listsix,
    listseven,
    listeight,
    listnine
  },
  
};
</script>

<style lang='stylus'>
.list-title
  height max-content
  .van-tabs--line
    height max-content
    .van-tabs__wrap
      height 0.44rem
    .van-tabs__content
      height max-content
      overflow hidden
      overflow-y scroll
</style>
