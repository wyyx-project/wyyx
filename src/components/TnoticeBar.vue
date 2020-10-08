<template>
  <van-notice-bar :scrollable="false" color="#ddd" background="rgba(0,0,0,0.5)">
    <van-swipe
      vertical
      class="notice-swipe"
      :autoplay="3000"
      :show-indicators="false"
    >
      <van-swipe-item v-for="item in noticeList" :key="item.id" >
        <img
          class="notice-img"
          :src="item.picUrl"
          alt=""
        />
        <span class="notice-name">{{item.nickname}}</span>
        <span>刚刚参团，</span>
        <span class="notice-price">¥{{item.buyPrice}}</span>
        <span>带走了底价商品</span>
      </van-swipe-item>
    </van-swipe>
  </van-notice-bar>
</template>

<script>
import Vue from "vue";
import { NoticeBar, Swipe, SwipeItem } from "vant";

Vue.use(NoticeBar);
Vue.use(Swipe);
Vue.use(SwipeItem);
export default {
  props: ["noticeList"],
  data() {
    return {};
  },
};
</script>

<style lang="stylus" scoped>
@import '~@a/stylus/ellipsis.styl'
.van-notice-bar
  height 0.26rem
  width 2.8rem
  border-radius 0.2rem
  font-size 0.12rem
  z-index 9999
  .notice-swipe
    height 0.26rem
    line-height 0.26rem
    span
      display inline-block
      position relative
      top -0.08rem
    .notice-img
      width 0.2rem
      display inline-block
      vertical-align baseline
      margin-right 0.04rem
      position relative
      top -0.02rem
    .notice-name
      top 0.01rem
      display inline-block
      width 0.36rem
      white-space nowrap
      overflow hidden
      text-overflow ellipsis
</style>
