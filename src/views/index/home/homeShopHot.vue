<template>
  <!-- 首页严选10W+爆款榜 -->
  <div class="shopHot">
    <img :src="images" @click="handleClick" />
    <van-skeleton avatar avatar-shape="square" :row="4" :loading="loading">
      <div class="shop">
        <ul>
          <li v-for="m in shophot" :key="m.rank">
            <p>Top{{ m.rank }}</p>
            <img :src="m.picUrl" />
            <div class="shopfoot">
              <div>{{ m.name }}</div>
              <p id="shopfoots"><span>￥</span>{{ m.retailPrice }}</p>
            </div>
          </li>
        </ul>
      </div>
    </van-skeleton>
  </div>
</template>

<script>
import Vue from "vue";
import { Skeleton } from "vant";
Vue.use(Skeleton);
import http from "@u/http";

export default {
  data() {
    return {
      images: "",
      shophot: [],
      loading: true,
    };
  },

  async mounted() {
    let result = await http.get("/api//xhr/index/indexV2.json",{});
    this.shophot = result.data.newcomerModule.hotStyleList.hotStyleItemList;
    this.images = result.data.newcomerModule.hotStyleList.titlePic;
    this.loading = false;
    // console.log(this.shophot);
  },

  methods: {
    handleClick() {
      this.$router.push("/shopHot");
    },
  },
};
</script>

<style lang='stylus' scoped>
@import '~@a/stylus/ellipsis.styl';

.shopHot {
  background: #fdfdfd;
  padding: 0 0.1rem 0 0;
}

.shopHot img {
  width: 94%;
  margin-left: 2%;
  display: block;
}

.shop {
  padding-left: 0.1rem;
  margin-bottom: 0.1rem;
  background: #fff;
  border_1px(0 0 1px 0);

  ul {
    margin: 3px;
    display: flex;
    overflow-x: scroll;

    li {
      width: 1.1rem;
      flex: 1;
      margin: 0 0.06rem 0 0.03rem;
    }

    p {
      background: #f8d5da;
      border-radius: 0.05rem 0.05rem 0 0;
      height: 0.33rem;
      line-height: 0.33rem;
      text-align: center;
      color: red;
    }

    img {
      margin: 0;
      width: 1.1rem;
      height: 1.1rem;
    }
  }
}

.shopfoot {
  height: 0.84rem;
  background: #f7f7f7;
}

.shopfoot div {
  height: 0.45rem;
  padding-top: 0.04rem;
  text-align: center;
  font-size: 0.14rem;
  ellipsis(100%, 2);
}

#shopfoots {
  background: #f7f7f7;
  font-size: 0.16rem;
  margin: 0 0 0.05rem 0;
  text-align: center;
}
</style>