<template>
    <div>
      <van-nav-bar
        title="商品详情"
        left-arrow
        @click-left="onClickLeft"
      />
      <div>
        <div class="conter">
          <img src="https://yanxuan-item.nosdn.127.net/b272a4d8335ad3a80563154e535abf31.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
          <div class="m-promBanner">
            <div class="title"><img src="https://yanxuan.nosdn.127.net/0770ea90ff0526062ccab81f02c259ac.png" alt=""></div>
            <div class="bannerContent"></div>
          </div>
          <div class="tips"><span>1231231231</span></div>
        </div>
      </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem, Lazyload, NavBar } from 'vant'
import axios from 'axios'
import {get} from '@u/Zhttp'
import HeaderTitle from '@c/ZHeader.vue'



Vue.use(NavBar);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
export default {
  data() {
    return {
      id:this.$route.query.id
    }
  },
  methods: {
    onClickLeft(){
      this.$router.back()
    }
  },
  components: {

  }
}
</script>

<style lang="stylus">
.conter
  height 4.17rem
  width 100%
  position relative
  img 
    width 100%
  .m-promBanner
    display flex
    width 100%
    height .6rem
    div.title
      width .55rem
      height .6rem
      





  div.tips
    background red
    width 100%
    height .3rem
    padding: .08rem .2rem
    background #FFF0DD
    color #F48F18
    bottom 0
    font-size 12px
    span 
      display inline-block
      width 100%
      height: .14rem;
      line-height: .14rem;
      text-align left
      margin-bottom .05rem
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight bold

    
    


  
</style>

<style lang='stylus'>
.van-nav-bar .van-icon
  color #1c1c1c
.van-nav-bar__title
  font-size .14rem
  font-weight bolder

</style>
