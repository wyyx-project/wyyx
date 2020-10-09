<template>
  <van-swipe :autoplay="3000">
    <van-swipe-item v-for="(image, index) in images" :key="index">
      <img v-lazy="image"  />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import Vue from "vue";
import { Lazyload, Swipe, SwipeItem } from "vant";

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);

export default {
  data() {
    return {
      images: [
        "https://yanxuan.nosdn.127.net/80ef4d55b3bc32e4d13240d879ee0292.png?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/9cf2ed8bb2743bce6e8900049c6b2403.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/0ea2e26f3bf3f870ee48d3f5b35b58b3.jpeg?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/90c9a15847600bd948a1c806684b6e1e.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/2760d9324986ea9ac0a55ff210bbbb77.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/167f80e0eccce536be40c647c0b811d1.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
      ],
    };
  },
};
</script>

<style lang='stylus' scoped>
 .van-swipe{
   height 100%
 }
.van-swipe img {
  width 100%
  height 100%
  border-radius: 0.1rem;
}
</style>