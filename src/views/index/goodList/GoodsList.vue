<template>
  <div class="container">
    <van-nav-bar
        title="网易严选 - 商品列表"
        left-arrow
        @click-left="onClickLeft"
      />
      <div class="banner">
        <main>
          <div class="main">
            <van-swipe :autoplay="3000">
              <van-swipe-item v-for="(image, index) in images" :key="index+image">
                <img v-lazy="image.picUrl" width="100%" />
              </van-swipe-item>
            </van-swipe>
          </div>
        </main>
        <footer>
          <div v-for="(item, index) in goodsModList" :key="item.category.id">
            <div class="itemsTitle">
              <span>{{ item.category.name }}</span>
              <p>{{ item.category.frontName }}</p>
            </div>
            <ul>
              <router-link
                :to="{ name: 'goodsDetails', query: { id: item.id } }"
                tag="li"
                event="mouseover"
                v-for="item in goodsModList[index].itemList"
                :key="item.id"
              >
                <img :src="item.listPicUrl" alt="" />
                <div class="itemsName">{{ item.name }}</div>
                <div class="retailPrice">
                  <span>￥{{ item.retailPrice }}</span>
                  <span v-if="item.counterPrice != null" class="counterPrice"
                    >￥{{ item.counterPrice }}</span
                  >
                </div>
                <div class="tag" v-if="item.itemTagList.length != 0">
                  <span v-for="(name, index) in item.itemTagList" :key="index">
                    {{ name.name }}
                  </span>
                </div>
              </router-link>
            </ul>
          </div>
        </footer>
      </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Swipe, SwipeItem, Lazyload, NavBar } from "vant";
import axios from "axios";
import { get } from "@u/Zhttp";
import HeaderTitle from "@c/ZHeader.vue";

Vue.use(NavBar);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
export default {
  data() {
    return {
      // abc: 0,
      images: [],
      goodsModList: [],
    };
  },
  components: {
    HeaderTitle,
  },
  methods: {
    onClickLeft(){
      this.$router.back()
    }
  },
  mounted() {
    axios
      .get("/data/foodBeverage.json")
      .then((res) => {
        // console.log(res.data.data)
        this.itemList = res.data.data.categoryItemList;

        res.data.data.currentCategory.bannerList.forEach((element) => {
          this.images.push(element);
        });
        this.itemList.forEach((element) => {
          this.goodsModList.push(element);
        });
        console.log(this.images);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  filters: {},
};
</script>

<style lang='stylus' scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  .banner {
    height: 10rem;
    overflow-y: scroll;

    .main {
      background: rgb(241, 241, 241);
      padding-bottom: 0.1rem;

      .van-swipe-item {
        color: #fff;
        font-size: 0.2rem;
        line-height: 1.5rem;
        text-align: center;

        img {
          height: 1.87rem;
        }
      }
    }

    footer {
      .itemsTitle span {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        line-height: 14px;
        color: rgb(42, 42, 42);
        font-size: 14px;
        margin-bottom: 0.09rem;
        margin-top: 0.12rem;
      }

      p {
        line-height: 14px;
        color: #b1b1b1;
        font-size: 14px;
        text-align: center;
        margin-bottom: 0.12rem;
      }

      ul {
        display: flex;
        flex-wrap: wrap;
        overflow-y: scroll;
        padding-left: 0.11rem;

        li {
          display: flex;
          width: 1.72rem;
          flex-direction: column;
          margin-bottom: 0.23rem;

          .itemsName {
            display: flex;
            width: 100%;
            justify-content: left;
            top: 0;
            font-size: 14px;
            color: 363636;
          }

          .retailPrice {
            color: #bc3846;
            font-size: 0.16rem;

            .counterPrice {
              padding-left: 0.04rem;
              color: #999;
              font-size: 0.14rem;
              text-decoration: line-through;
            }
          }

          .tag {
            span {
              display: inline-block;
              margin-left: -8px;
              float: left;
              color: #dd1a21;
              border-radius: 0.12rem;
              border: 1px solid #dd1a21;
              transform: scale(0.666);
              text-align: center;
              padding: 0.03rem 0.05rem;
            }
          }

          &:nth-child(2n+1) {
            margin-right: 0.11rem;
          }

          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
<style lang="stylus">
.van-swipe__indicator {
  width: 0.19rem;
  height: 0.02rem;
  border-radius: 20%;
}

.van-swipe__indicator--active {
  background: #fff;
}
.van-nav-bar .van-icon
  color #1c1c1c
.van-nav-bar__title
  font-size .14rem
  font-weight bolder
</style>
