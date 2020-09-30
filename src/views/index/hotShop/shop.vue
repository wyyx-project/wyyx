<template>
  <!-- 首页严选10W+爆款榜 -->
  <div class="shops">
    <router-link to="/shopHome"
      ><van-nav-bar title="严选10W+ 爆款榜" left-arrow border:false
    /></router-link>
    <ul>
      <li class="shop" v-for="item in shopHotList" :key="item.itemId">
        <div class="shopImg">
          <img :src="item.picUrl" alt="item.name" />
          <div class="shopTitle">
            <h3>{{ item.name }}</h3>
            <h6>{{ item.itemDesc }}</h6>
            <p><span>￥</span>{{ item.retailPrice }}</p>
          </div>
        </div>
        <div class="shopAssess">
          <p>
            <img
              src="https://yanxuan.nosdn.127.net/8a4f27aab5caf51a5f7d0d96008b1263"
              alt=""
            />
            <span>{{ item.evaluatorComment }}</span>
            <i>></i>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar, Toast } from "vant";
import http from "@u/http.js";

Vue.use(NavBar);
Vue.use(Toast);
export default {
  // https://miniapp.you.163.com/xhr/index/?page=1&size=20
  data() {
    return {
      shopHotList: [],
    };
  },
  async mounted() {
    let result = await http.get("/api//xhr/index/hotStyleList.json", {
      size: 20,
      page: 1,
    });
    this.shopHotList = result.data.hotStyleItemList;
    // console.log(this.shopHotList);
  },
};
</script>


<style lang='stylus' scoped>
@import '~@a/stylus/border.styl';
@import '~@a/stylus/ellipsis.styl';

.van-nav-bar {
  border_1px(0 0 2px 0);
}

.container {
  height: 100%;
}

ul {
  height: 100%;
  width: 100%;
}

ul {
  overflow-y: auto;
}

.shop {
  display: flex;
  flex-direction: column;
  height: 1.7rem;
  border_1px(0 0 2px 0);
  overflow: hidden;
}

.shops {
  height: 100%;
}

.shopImg {
  display: flex;
}

.shopImg img {
  width: 1.3rem;
  height: 1.3rem;
  padding: 0.1rem;
}

.shopTitle {
  flex: 1;
  margin: 0.2rem 0.1rem 0 0.12rem;
  width: 5.41333rem;
}

.shopTitle h3 {
  font-size: 0.16rem;
  max-height: 1rem;
  color: #333;
  width: 4.8rem;
  overflow: hidden;
  ellipsis(100%, 2);
}

.shopTitle h6 {
  margin-top: 0.1rem;
  font-size: 0.12rem;
}

.shopTitle p {
  color: red;
}

.shopAssess {
  display: flex;
  flex-direction: column;
  background: #ddd;
  width: 80%;
  margin: 0 auto;
  border-radius: 0.3rem;
  height: 0.3rem;
  line-height: 0.3rem;
}

.shopAssess img {
  position: relative;
  margin-left: 0.05rem;
  height: 0.24rem;
  border-radius: 0.1rem;
}

.shopAssess span {
  position: absolute;
  bottom: 0.1rem;
  left: 0.8rem;
  ellipsis(60%, 1);
  margin-left: 0.1rem;
}

.shopAssess i {
  float: right;
  padding-right: 0.1rem;
}
</style>


<style>
.van-nav-bar {
  height: 0.6rem;
}
.van-nav-bar__title {
  font-size: 0.18rem;
}
.van-icon {
  font-size: 0.24rem;
}
</style>