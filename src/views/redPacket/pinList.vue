<template>
  <div class="pin-list-wrap">
    <div class="pinList-head">
      <h2>拼着买更省钱</h2>
      <router-link tag="div" to="/spellGroup" class="recommend">
        <img
          class="avatars"
          v-for="aItem in avatars"
          :key="aItem.id"
          :src="aItem"
          alt=""
        />
        
        <span class="friend">好友正在拼 ></span>
      </router-link>
    </div>
    <ul class="pin-list">
      <li class="pin-list-item" v-for="item in indexList" :key="item.id">
        <div class="hd">
          <img
            class="hd-img"
            :src="item.picUrl"
            alt=""
          />
          <div class="tags">
            <span class="tags-item" v-if='item.modeType === 1'>邀新</span>
            <span class="tags-item" v-if="item.userNum">{{item.userNum}}人拼</span>
          </div>
        </div>

        <div class="info">
          <div class="desc">
            {{item.title}}
          </div>
          <div class="recommend">
            <img
              v-for="avatar in item.recentUsers"
              :key='avatar.id'
              class="avatars"
              :src="avatar"
              alt=""
            />
            <span class="friend">已团{{item.joinUsers}}件</span>
          </div>
          <div class="price-wrap">
            <div class="price">
              <p class="oldPrice">￥{{item.originPrice}}</p>
              <p class="curPrice">￥{{item.price}}免邮</p>
            </div>
            <div class="pin">拼</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["indexList", 'avatars'],
  data() {
    return {};
  },
  mounted() {
    // console.log(this.indexList);
  },
};
</script>

<style lang="stylus" scoped>
@import '~@a/stylus/border.styl';
@import '~@a/stylus/ellipsis.styl'
.pin-list-wrap
  width 94%
  background #ffffff
  margin -0.4rem auto 0
  border-radius 0.1rem
  position relative
  z-index 999
  .pinList-head
    height 0.4rem
    padding 0 0.1rem
    display flex
    justify-content space-between
    align-items center
    line-height 1
  .pin-list
    padding 0rem 0.1rem 0.1rem
    display flex
    justify-content space-between
    flex-wrap wrap
    .pin-list-item
      height 3rem
      width 48%
      border_1px()
      margin-bottom 0.1rem
      .hd
        position relative
        .hd-img
          width 100%
        .tags
          position absolute
          bottom 0
          left 0
          .tags-item
            display block
            padding 0 0.04rem
            margin-bottom 0.06rem
            font-size 0.12rem
            height 0.16rem
            color #ffffff
            background-image linear-gradient(to right, rgb(244,126,87), rgb(235,77,40))
            border-radius 0 0.08rem 0.08rem 0
      .info
        padding 0.1rem 0.04rem
        font-size 0.12rem
        .desc
          height 0.35rem
          ellipsis(2)
        .price-wrap
          display flex
          justify-content space-between
          margin-top 0.06rem
          .price
            .oldPrice
              text-decoration line-through
              font-weight bold
              color #999
              font-size 0.14rem
            .curPrice
              color rgb(180,40,45)
              font-size 0.16rem
          .pin
            width 0.36rem
            height 0.36rem
            border-radius 50%
            line-height 0.36rem
            text-align center
            font-size 0.16rem
            box-shadow 0 0 1px 1px #999
            color #fff
            background rgb(221,50,50)
.recommend
  padding 0.04rem 0.02rem
  .avatars
    width 0.2rem
    border-radius 50%
    margin-right -0.04rem
    position relative
    top -0.02rem
    
  .friend
    margin-left 0.08rem
</style>
