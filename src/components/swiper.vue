<template>
  <div class="wrapper">
    <swiper :options="swiperOption" class="swiper-container">
      <!-- slides -->
      <swiper-slide
        class="swiper-item"
        v-for="item of swiperList"
        :key="item.id"
      >
        <img class="swiper-img" :src="item.imgUrl" alt="item.id" />
      </swiper-slide>
      <!-- Optional controls ,显示小点-->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeSwiper",
  //es6的写法，相当于data:function(){return{swiperOption:{}}}
  data() {
    return {
      swiperOption: {
        // 参数选项,显示小点
        pagination: ".swiper-pagination",
        //循环
        loop: true,
        //每张播放时长3秒，自动播放
        autoplay: 2000,
        //滑动速度
        speed: 1000,
        delay:1000
      },
      //三张轮播，使用变量循环
      swiperList: [
        {
          id: "001",
          imgUrl:
            "https://yanxuan.nosdn.127.net/80ef4d55b3bc32e4d13240d879ee0292.png?type=webp&imageView&quality=75&thumbnail=750x0",
        },
        {
          id: "002",
          imgUrl:
            "https://yanxuan.nosdn.127.net/9cf2ed8bb2743bce6e8900049c6b2403.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        },
        {
          id: "003",
          imgUrl:
            "https://yanxuan.nosdn.127.net/0ea2e26f3bf3f870ee48d3f5b35b58b3.jpeg?type=webp&imageView&quality=75&thumbnail=750x0",
        },
    /*     {
          id: "004",
          imgUrl:
            "https://yanxuan.nosdn.127.net/90c9a15847600bd948a1c806684b6e1e.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        }, */
      ],
    };
  },
};
</script>
<style lang='stylus' scoped>
.wrapper >>>.swiper-pagination-bullet-active {
  background: red !important;
}
.swipes{
  background: #cc9756;

}
.wrapper {
  overflow: hidden;
  width: 100%;
  height: 95%;
  padding-bottom: 26.6666667%;
  background: #cc9756;

  .swiper-item {
    width: 100%;

    .swiper-img {
      width: 100%;
    }
  }
}
</style>
