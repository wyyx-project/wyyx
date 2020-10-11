<template>
  <!-- 首页20元内入手好物 -->
  <div class="shopHots">
    <img :src="images" @click="handleClick" />
    <div id="most-popular" class="shop">
      <ul>
        <li v-for="m in shophot" :key="m.itemId">
          <div class="shophots">
            <img :src="m.picUrl" />
            <div class="shopfoot">
              <div>{{ m.name }}</div>
              <p id="shopfoots"><span>超值好货</span>￥{{ m.retailPrice }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import http from "@u/http";
import BScroll from "@better-scroll/core";

export default {
  data() {
    return {
      images: "",
      shophot: [],
    };
  },

  async mounted() {
    let result = await http.get("/api//xhr/index/indexV2.json");
    this.shophot =
      result.data.newcomerModule.thresholdGoodList.thresholdGoodItemList;
    this.images = result.data.newcomerModule.thresholdGoodList.titlePic;

    await this.$nextTick();
    new BScroll("#most-popular", {
      scrollX: true,
    });
  },

  methods: {
    handleClick() {
      console.log(0);
    },
  },
};
</script>

<style lang='stylus' scoped>
@import '~@a/stylus/ellipsis.styl';

.shopHots {
  background: #fdfdfd;
  padding: 0 0.1rem 0 0;
}

.shopHots img {
  width: 94%;
  margin-left: 2%;
  display: block;
}

.shop {
  padding-left: 0.3rem;
  margin-bottom: 0.15rem;
  background: #fff;
  border_1px(0 0 1px 0);

  ul {
    display: flex;
    width: max-content;

    li {
      width: 1.1rem;
      flex: 1;
      margin: 0 0.1rem 0 0.04rem;
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

.shophots{
    
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
  background: rgba(214, 65, 71, 1);
  font-size: 0.14rem;
  color: white;
  margin: 0 0 0.05rem 0;
  text-align: center;
}
</style>