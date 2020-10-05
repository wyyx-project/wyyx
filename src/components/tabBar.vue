<template>
  <div>
    <router-view />
    <van-tabbar
      v-model="active"
      active-color="#E76621"
      inactive-color="#000"
      route
    >
      <van-tabbar-item name="home" to="/home" icon="home-o"
        >首页</van-tabbar-item
      >
      <van-tabbar-item name="money" to="/money" icon="home-o"
        >领红包</van-tabbar-item
      >
      <van-tabbar-item name="sort" to="/sort" icon="orders-o"
        >分类</van-tabbar-item
      >
      <van-tabbar-item name="cartoon" to="/cartoon" icon="cart-o"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item name="self" to="/self" icon="manager-o"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
import Vue from "vue";

import { Tabbar, TabbarItem, Icon } from "vant";
Vue.use(Icon);
Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
  data() {
    return {
      active: "home",
    };
  },
};
</script>

<style>
</style>