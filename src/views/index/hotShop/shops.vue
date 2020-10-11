<template>
  <!-- 首页严选10W+爆款榜 -->
  <div class="shops">
    <router-link to="/shopHome"
      ><van-nav-bar title="严选10W+ 爆款榜" left-arrow border:false
    /></router-link>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        @load="onLoad"
        :finished="finished"
        finished-text="我也是有底线的"
      >
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
                <img :src="item.evaluatorAvatar" alt="" />
                <span>{{ item.evaluatorComment }}</span>
                <i>></i>
              </p>
            </div>
          </li>
        </ul>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar, Toast } from "vant";
import http from "@u/http.js";
import { List, PullRefresh } from "vant";

Vue.use(List);
Vue.use(PullRefresh);
Vue.use(NavBar);
Vue.use(Toast);
export default {
  // https://miniapp.you.163.com/xhr/index/?page=1&size=20
  data() {
    return {
      shopHotList: [],
      loading: false,
      finished: false,
      refreshing: false,
    };
  },

  created() {
    // 初始化翻页数据
    this.size = 12;
    this.page = 1;
  },
  // async mounted() {
  //   let result = await http.get("/api//xhr/index/hotStyleList.json", {
  //     size: this.size,
  //     page: this.page,
  //   });
  //   this.shopHotList = result.data.hotStyleItemList;
  //   // console.log(this.shopHotList);
  // },
  methods: {
    async loadData() {
      // 表示用户下拉，需要将Page的页码重置为0, 同时清空list，不影响上拉加载
      if (this.refreshing) {
        this.shopHotList = [];
        this.page = 1;
      }

      let result = await http.get("/api//xhr/index/hotStyleList.json", {
        size: this.size, // pageSize: 每页多少条
        page: this.size * this.page, // 分页的起始点
      });
      console.log(result);

      this.shopHotList = [...this.shopHotList, ...result.data.hotStyleItemList];

      this.loading = false;
      this.refreshing = false;
      this.page++;

      if (this.page < result.data.pagination.totalPage) {
        this.finished = true;
      }
    },
    onLoad() {
      this.loadData();
    },

    onRefresh() {
      this.loadData();
    },
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
  // background: #C6D1D3;
  overflow-y: auto;
}

.shop {
  cursor: pointer;
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