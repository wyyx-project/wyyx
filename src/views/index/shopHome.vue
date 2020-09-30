<template>
  <div class="container">
    <header>网易严选</header>
    <div class="main">
      <div class="banner">
        <!-- 搜索框 -->
        <router-link to="/search">
          <home-search></home-search>
        </router-link>
        <!-- 轮播图 -->
        <div class="swipes">
          <home-swipe></home-swipe>
        </div>
      </div>
      <!-- 轮播图下的图片 -->
      <div class="shopLogo">
        <img :src="images" alt="" />
      </div>
      <div class="home-shop">
        <home-shop-pic></home-shop-pic>
        <home-shop-hot></home-shop-hot>
        <home-shop-hots></home-shop-hots>
      </div>
      <list-title></list-title>
    </div>

    <back-top></back-top>
    <footer>
      <tabBar @select-item="onClickTabBarItem" />
    </footer>
  </div>
</template>

<script>
import Vue from "vue";
import http from "@u/http";
import homeSearch from "./home/homeSearch";
import homeSwipe from "./home/homeSwipe";
import homeShopPic from "./home/homeShopPic";
import homeShopHot from "./home/homeShopHot";
import homeShopHots from "./home/homeShopHots";
import listTitle from "./comL/listTitle.vue";
import tabBar from "@c/tabBar.vue";
import backTop from "@c/backTop.vue";

export default {
  components: {
    homeSearch,
    homeSwipe,
    homeShopPic,
    homeShopHot,
    homeShopHots,
    backTop,
    tabBar,
    listTitle,
  },
  data() {
    return {
      item: 0,
      images: "https://yanxuan.nosdn.127.net/15815763431141846.png",
    };
  },

  async mounted() {
    let result = await http.get("/api//xhr/index/indexV2.json", {
      type: 0,
      size: 20,
      lastItemId: "1506032",
    });

    let imgUrl = result.data.newcomerModule.commonConfigModule.brandDescPicUrl;
    // console.log(imgUrl);
  },
  methods: {
    onClickTabBarItem: function (tag) {
      this.item = tag;
    },
  },
};
</script>

<style lang='stylus' scoped>
.container {
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
}

header {
  height: 0.4rem;
  background: rgb(204, 151, 86);
  text-align: left;
  padding-left: 0.1rem;
  margin-top: 0.01rem;
  line-height: 0.4rem;
  font-size: 0.2rem;
  font-weight: bold;
  color: #fff;
}

.home-shop {
  overflow: hidden;
}

.main {
  flex: 1;
}

.banner {
  background: rgb(204, 151, 86);
  height: 2.2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.swipes {
  flex: 1;
  margin: 0 auto;
  width: 96%;
  height: 96%;
}

.prefecture {
  background: #E1E4E8;
}

.shopLogo img {
  width: 100%;
  margin-top: 5%;
}
</style>
