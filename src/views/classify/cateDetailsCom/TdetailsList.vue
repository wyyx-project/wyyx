<template>
  <div class="t-itemListFloor" v-if="itemList.length">
    <header class="hd" v-if="frontName">
      <p class="desc">
        <span>{{frontName}} </span>
      </p>
    </header>
    <ul class="Tlist">
      <li class="item" v-for="item in itemList" :key="item.id">
        <div class="good">
          <div class="hd">
            <div class="wraper">
              <img
                :src="
                  item.listPicUrl +
                    '?type=webp&amp;imageView&amp;quality=65&amp;thumbnail=330x330'
                "
                alt="lazyload-image"
                class="swiper-lazy"
              />
            </div>
            <div class="promBannerWrap" v-if="item.promBanner">
              <div
                class="promBanner promBanner-10"
                :style="
                  'background-image: url(' +
                    item.promBanner.bannerContentUrl +
                    ');'
                "
                v-if="item.promBanner.valid"
              >
                <div
                  class="promTitle"
                  item.promBanner.bannerTitleUrl
                  :style="
                    'background-image: url(' +
                      item.promBanner.bannerTitleUrl +
                      ');'
                  "
                >
                  <div
                    :class="[
                      'activity_title',
                      { activity_titles: !item.promBanner.promoSubTitle },
                    ]"
                  >
                    <span style="vertical-align: middle;">{{
                      item.promBanner.promoTitle
                    }}</span>
                  </div>
                  <div
                    class="activity_subTitle"
                    v-if="item.promBanner.promoSubTitle"
                  >
                    <span>{{ item.promBanner.promoSubTitle }}</span>
                  </div>
                </div>
                <div class="promContent">{{ item.promBanner.content }}</div>
              </div>

              <div class="desc" v-if="!item.promBanner.valid">
                {{ item.simpleDesc }}
              </div>
            </div>
          </div>
          <div class="tagWraper new">
            <span
              class=" tag-status-new gradientPrice"
              v-for="tags in item.itemTagList"
              :key="tags.tyoe"
              >{{ tags.name }}</span
            >
          </div>
          <div class="name">{{ item.name }}</div>
          <div class="price">
            <span class="priceInner">
              <span class="curPrice"
                >¥{{ item.activityPrice || item.retailPrice }}</span
              >
              <span class="counterPrice">{{
                item.activityPrice && "¥" + item.retailPrice
              }}</span>
            </span>
          </div>
          <img
            class="promoLogo"
            src="https://yanxuan.nosdn.127.net/c172998e7fa50cadf020e743c33063f9.png"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["itemList", "frontName"],
  data() {
    return {};
  },
  computed: {},
  mounted() {
    
  }
};
</script>

<style lang="stylus" scoped>
@import '~@a/stylus/ellipsis.styl'

.t-itemListFloor
  height 100%
  background-color #fff
  >.hd
    display flex
    justify-content center
    align-items center
    margin-top 0.1rem
    height 0.56rem
    line-height: 1
    color #333
  .Tlist
    height calc(100% - 0.56rem)
    display flex
    flex-wrap wrap
    overflow auto
    .item
      width 50%
      padding 0 0.1rem 0 0.05rem
      position relative
      margin-bottom 0.2rem
      &:nth-child(odd)
        padding 0 0.05rem 0 0.1rem
      .hd
        margin-bottom 0.1rem
        position relative
        .wraper
          position: relative;
          padding-bottom 0.24rem
          .swiper-lazy
            width 100%
            display: block;
            border-radius: .02rem .02rem 0 0;
            background-color: #f4f4f4;
        .desc
          position: absolute;
          width 100%
          left 0
          bottom 0
          height 0.28rem
          color #9f8a60
          background #f1ece2
          font-size 0.12rem
          line-height 0.28rem
          padding 0 0.06rem
          ellipsis()
        .promBanner
          position: absolute;
          width 100%
          left 0
          bottom 0
          height 0.3rem
          padding-top 0.04rem
          background-repeat no-repeat
          background-clip content-box
          .promTitle
            float left
            position relative
            top -0.06rem
            left 0
            padding 0 0.08rem
            height 0.3rem
            max-width: 3.2rem;
            background-size: auto 100%;
            background-position: right .01333rem;
            float: left;
            border-top-left-radius: .05333rem;
            background-repeat no-repeat
            font-size 0.1rem
            color #fff
            font-weight bold
            line-height 1
            text-align center
            .activity_title
              transform scale(0.8)
              line-height 0.14rem
            .activity_titles
              line-height  0.28rem
              transform scale(1)
              font-size 0.18rem
            .activity_subTitle
              // transform scale(0.9)
          .promContent
            color #fff
            font-size 0.1rem
            transform scale(0.9)
            line-height 0.26rem
            padding  0  0.03rem
            // ellipsis()
      .name
        font-size 0.14rem
        line-height 0.24rem
        ellipsis(100%, 2)
      .price
        .priceInner
          .curPrice
            color #ca342e
            font-size 0.16rem
            font-weight bold
          .counterPrice
            color #999
            text-decoration line-through
            padding 0 0.08rem
      .tagWraper
        .tag-status-new
          margin-bottom: .09333rem;
          height: .16rem;
          padding: 0 .06rem;
          line-height: .16rem;
          text-align: center;
          color: #dd1a21;
          background: hsla(0,0%,100%,.9);
          border: 1px solid #dd1a21;
          font-size: .1rem;
          border-radius: .08rem;
          margin-right 0.1rem
          vertical-align: top;
          white-space: nowrap;

      .promoLogo
        position absolute
        width 0.4rem
        top 0
</style>
