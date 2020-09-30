<template>
  <div class="classifyBanner">
    <van-swipe class="my-swipe" indicator-color="white">
      <van-swipe-item 
        v-for="item in bannerItem"
        :key="item.id"
      >
        <img :src="item.picUrl">
      </van-swipe-item>
      
    </van-swipe>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";

Vue.use(Swipe);
Vue.use(SwipeItem);
export default {
  props: ['bannerItem'],
  data() {
    return {};
  },
};
</script>

<style lang="stylus" scoped>
.classifyBanner
  margin-bottom 0.1rem 
  .my-swipe .van-swipe-item
    color #fff
    font-size 20px
    line-height 0.96rem
    text-align center
    img   
      width 100%
      height 0.96rem
</style>
