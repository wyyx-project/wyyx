<template>
    <van-tabbar route  active-color="#dd1a21" inactive-color="#666" v-model="active">
      <van-tabbar-item  to='/shopHome'>
        <span :class="{active: $route.matched[1].path === '/shopHome'}">首页 </span>
        <template #icon="props">
          <i :class="['yo-ico','home', {active: $route.matched[1].path === '/shopHome'}]">&#xe60a;</i>
        </template>
      </van-tabbar-item>
      <van-tabbar-item  to='/TredPacket' >
        <span :class="{active: $route.matched[1].path === '/TredPacket'}">领红包 </span>
        <template #icon="props">
          <i :class="['yo-ico','red', {active: $route.matched[1].path === '/TredPacket'}]">&#xe6a6;</i>
        </template>
      </van-tabbar-item>
      <van-tabbar-item to='/Tclassify'>
        <span :class="{active: $route.matched[1].path === '/Tclassify'}">分类</span>
        <template #icon="props">
          <i :class="['yo-ico','classify', {active: $route.matched[1].path === '/Tclassify'}]">&#xe609;</i>
        </template>
      </van-tabbar-item>
      <van-tabbar-item to='/cart'>
        <span :class="{active: $route.matched[1].path === '/cart'}">购物车</span>
        <template #icon="props">
          <i :class="['yo-ico','cart', {active: $route.matched[1].path === '/cart'}]">&#xe600;</i>
        </template>
      </van-tabbar-item>
      <van-tabbar-item to='/Tpersonal'>
        <span :class="{active: $route.matched[1].path === '/Tpersonal'}">个人</span>
        <template #icon="props">
          <i :class="['yo-ico','personal', {active: $route.matched[1].path === '/Tpersonal'}]">&#xe64d;</i>
        </template>
      </van-tabbar-item>
    </van-tabbar>
</template>

<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";

Vue.use(Tabbar);
Vue.use(TabbarItem);

export default {
  data() {
    return {
      active: 0,
    };
  },
  /* watch: {
  	//实时监听路由状态
    '$route.path'(){
      console.log(this);
      // handler(val){
      //   this.active=val;
      // },
      // immediate:true //立即执行
    }
  },
  mounted() {
    console.log(this);
  },
  methods: {
    clickh() {
      console.log(this);
    }
  } */
  mounted() {
    // console.log(this.$route);
  },
};
</script>

<style lang="stylus" scoped>

  .home
    font-size 0.18rem
  .classify   
    font-size 0.24rem
  .personal
    font-size 0.2rem
  i 
    line-height 0.22rem
  .active
    color #dd1a21
</style>
