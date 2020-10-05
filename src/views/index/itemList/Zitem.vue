<template>
    <div class="zItem">
      <van-nav-bar
        title="商品详情"
        left-arrow
        @click-left="onClickLeft"
        fixed=true
      />
      <div class="zconter">
        <div class="conter">
          <img src="https://yanxuan-item.nosdn.127.net/b272a4d8335ad3a80563154e535abf31.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
          <div class="m-promBanner">
            <div class="title"></div>
            <div class="bannerContent">
              <div class="col1">
                <div class="mt12">限时购</div>
                <div class="mr8">89</div>
              </div>
              <div class="status">
                <div class="col2">
                  <div class="text">12312312</div>
                  <div class="text">123123123</div>
                </div>
              </div>
            </div>
          </div>
          <div class="nameBox">
            <div class="goodsInfo">
              <div class="goodsName">5D玻尿酸 比利时温泉保湿面膜10片/盒</div>
              <div class="desc">推荐理由</div>
            </div>
            <div class="comment">
                <div class="num">99.8%</div>
                <div class="com">好评率</div>
            </div>
          </div>
          <div class="rcmdBanner">
            <ul>
              <li>12312312</li>
            </ul>
          </div>
        </div>
      </div>
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
        <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
        <van-goods-action-icon icon="shop-o" text="店铺" @click="onClickIcon" />
        <van-goods-action-button
          type="danger"
          text="立即购买"
          @click="onClickButton"
        />
      </van-goods-action>
    </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem, Lazyload, NavBar,Toast,GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant'
import axios from 'axios'
import {get} from '@u/Zhttp'
import HeaderTitle from '@c/ZHeader.vue'



Vue.use(NavBar)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)
Vue.use(GoodsAction)
Vue.use(GoodsActionButton)
Vue.use(GoodsActionIcon)
export default {
  data() {
    return {
      id:this.$route.query.id
    }
  },
  methods: {
    onClickLeft(){
      this.$router.back()
    },
    onClickIcon(){

    },
    onClickButton(){

    }
  },
  components: {

  }
}
</script>

<style lang="stylus">

  .zconter
    overflow-y: scroll
    width 100%
    .conter
      position relative
      img 
        width 100%
      .m-promBanner
        display flex
        width 100%
        height .6rem
        div.title
          width .55rem
          height .6rem
          background-image:url("https://yanxuan.nosdn.127.net/0770ea90ff0526062ccab81f02c259ac.png");
          background-repeat:no-repeat;
          background-size:100% 100%;
          border_1px(0 1px 0 0)
        .bannerContent
          display flex
          flex 1
          padding-right: .2rem
          background-image url("https://yanxuan.nosdn.127.net/aee487bbec398d6c790d2e2a320da5e6.png")
          background-size 100% 100%;
          background-repeat: no-repeat;
          .col1
            width 2.1rem
            height 100%
            display flex
            flex-direction column
            padding-left .08rem
            .mt12
              margin-top .08rem
              font-size .12rem
              font-weight bold
              color #fff
              width 100%
              height .24rem
            .mr8
              flex 1
              height 100%
              line-height 100%
              font-size .24rem
              font-weight bold
              color #fff
          .status
            display flex
            flex 1
            flex-direction row
            padding .07rem
            width 100%
            .col2
              width 100%
              .text
                color #fff
                width 100%
      .nameBox
        display flex
        flex-direction row
        padding .090rem 0 0 .15rem
        .goodsInfo
          width 2.71rem
          padding-right .12rem
          display flex
          flex-direction column
          .goodsName
            display inline-block
            height .48rem
            font-size: .16rem;
            color: #333;
            margin-bottom: .02rem;
            font-weight: 700;
          .desc
            font-size: .12rem;
            line-height: .24rem;
            color: #333;
            font-weight: lighter;
        .comment
          flex 1
          padding-left .1rem
          .num
            font-weight: 700;
            font-size: .14rem;
            height: .2rem;
            line-height .3rem
            color: #DD1A21;
            text-align: center;
          .com
            font-family: PingFangSC-Light;
            line-height: .24rem;
            font-size: .12rem;
            color: #7F7F7F;
            text-align center
      .rcmdBanner
        margin 0 .15rem
        border_1px(1px)
        background #FAFAFA
        padding .07rem .1rem
        ul li
          font-family: PingFangSC-Regular;
          font-size: .14rem;
          color: #333;


    
  
</style>

<style lang='stylus'>
.van-nav-bar .van-icon
  color #1c1c1c
.van-nav-bar__title
  font-size .14rem
  font-weight bolder

</style>
