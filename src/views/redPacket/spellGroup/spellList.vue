<template>
  <ul class="spell-list" @click="clickHandle">
    <li class="spell-item" v-for="item in spellList" :key="item.id">
      <div class="hd">
        <img class="spell-item-img" :src="item.picUrl" alt="" />
        <!-- <span class="tags">邀新团</span> -->
      </div>
      <div class="spell__goods__detail">
        <div class="spell__name">
          <span class="spell__depr">
            降！¥{{ parseFloat((item.originPrice - item.price).toFixed(1)) }}
          </span>
          <span class="spell__desc">{{ item.title }}</span>
        </div>
        <div class="spell__users">
          <span>2人团</span>
          <div class="recommend" >
            <img
              v-for="avatar in item.recentUsers" 
              :key="avatar.id"
              class="avatars"
              :src="avatar"
              alt=""
            />
            <span class="friend">{{item.joinUsers}}人已拼</span>
          </div>
        </div>
        <div class="spell__price">
          <div class="price__item">
            <span class="cur__price">¥{{item.price}}</span>
            <span class="old__price">¥{{item.originPrice}}</span>
          </div>
          <div class="spsell__btn">去开团</div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["spellList"],
  data() {
    return {};
  },
  mounted() {},
  methods: {
    clickHandle() {
      // console.log(this.spellList);
    },
  },
  
};
</script>

<style lang="stylus" scoped>
@import '~@a/stylus/ellipsis.styl'
.spell-list
  padding 0.1rem 0.1rem
  width 100%
  display flex
  flex-wrap wrap
  min-height 4.46rem
  justify-content space-between
  .spell-item
    width 1.7rem
    height 3rem
    overflow hidden
    border-radius 0.1rem
    margin-bottom 0.1rem
    background-color #fff
    .hd
      position relative
      .spell-item-img
        width 100%
      .tags
        position absolute
        top 0.2rem
        left 0
        padding 0 0.06rem 0 0.04rem
        font-size 0.12rem
        height 0.16rem
        color #ffffff
        background-image linear-gradient(to right, rgb(244,126,87), rgb(235,77,40))
        border-radius 0 0.08rem 0.08rem 0
    .spell__goods__detail
      padding 0.1rem
      .spell__name
        font-size 0.12rem
        ellipsis(2)
        .spell__depr
          display inline-block
          background-color: rgb(255, 82, 82);
          color #fff
          padding 0 0.04rem
          border-radius 0.1rem
          height 0.16rem
          line-height 0.16rem
          margin-right 0.04rem
          position relative
          top -0.02rem
        .spell__desc
          font-size 0.14rem
      .spell__users
        margin-top 0.08rem
        height 0.2rem
        display flex
        justify-content space-between
        align-items center
        color #7f7f7f
        font-size 0.12rem
      .spell__price
        height 0.26rem
        margin-top 0.1rem
        display flex
        justify-content space-between
        align-items center
        .cur__price
          font-size 0.2rem
          color #dd1a21
          font-weight bold
          padding-right 0.04rem
        .old__price
          font-size 0.12rem
          color #7f7f7f
          text-decoration line-through
        .spsell__btn
          background-image: linear-gradient(261deg,#ff505e 0%,red 100%);
          color #fff
          padding 0 0.06rem
          border-radius 0.16rem
          height 0.26rem
          line-height 0.26rem
.recommend
  display inline-block
  padding 0.02rem 0.02rem
  .avatars
    width 0.18rem
    border-radius 50%
    margin-right -0.08rem
    position relative
    top -0.02rem
  .friend
    margin-left 0.08rem
</style>
