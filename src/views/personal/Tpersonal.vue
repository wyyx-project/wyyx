<template>
  <div class="per-container">
    <p  class="title">个人中心</p>
    <div class="index">
      <span class="yo-ico yo-img">&#xe621;</span>
      <div class="in-title">
        <p v-if="!data">未登录</p>
        <p v-else>{{data.nickname}} <button class="g-exit" @click='exitHandler'>退出登录</button></p>
        <login></login>
      </div>
      <span class="yo-ico QR">&#xe69a;</span>
    </div>
    <div class="captial-banner">
      <div class="my-capital">
        <span>我的资产</span>
      </div>
      <property></property>
    </div>
    <aboutmy></aboutmy>
  </div>
</template>

<script>
import Vue from 'vue';
import { Grid, GridItem } from 'vant';  
import { Col, Row } from 'vant';
import login from './Gcomponents/login'
import property from './Gcomponents/myproperty'
import aboutmy from './Gcomponents/aboutMy'

Vue.use(Col);
Vue.use(Row);

Vue.use(Grid);
Vue.use(GridItem);

export default {
  data() {
    return {
      data:JSON.parse(localStorage.getItem('info'))
    }
  },
  methods: {
    exitHandler(){
      window.confirm('您确定要退出吗？');
      localStorage.removeItem('info');
      window.location.reload()
    }
  },
  components: {
    login,
    property,
    aboutmy
  },
  mounted() {
    
  },
}
</script>

<style lang='stylus'>
@import '~@a/stylus/border.styl';
font  
  vertical-align baseline
.per-container
  background rgb(255,255,255)
  height 100%
  width 100%
  .title 
    font-size .1rem
    width 100%
    height .25rem
    font-weight 500
    margin-left .1rem
    margin-top .1rem
  .index
    background rgb(245,208,135)
    height .9rem
    width 100%
    display flex
    position relative
    span
      font-size .44rem
      margin-left .1rem
      display inline-block
      line-height .9rem
      margin-right .1rem
    .in-title
      display flex
      justify-content center
      flex-direction column
    .QR
      font-size .1rem
      line-height .1rem   
      position absolute
      margin-right 0
      top .08rem
      right .08rem
  .captial-banner
    width 100%
    height .9rem
    margin-left .05rem
    .my-capital
      width 100%
      height .35rem
      border_1px(0 0 1px 0)
      span 
        line-height .3rem
        text-align center
.yo-img
  margin-top -0.01rem
</style>
