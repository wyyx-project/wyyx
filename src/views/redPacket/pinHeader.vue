<template>
  <div class="pin-header">
    <header>
      <div class="rule">规则</div>
      <div class="receive">
        领签到红包
      </div>
      <div>
        定时奖励
      </div>
    </header>
    <div class="accountWrap">
      <div class="my-account">
        <div class="wallet">
          <b class="myT">我的账户: </b>
          <i class="hao">￥</i>
          <span class="money">0.00</span>
          提现<i class="yo-ico">&#xe6b0;</i>
        </div> 
        <div class="sign-in">提醒我签到</div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="stylus" scoped>
.pin-header
  position relative
  display flex
  flex-direction column
  
  header
    position relative
    height 2.5rem
    background url('../../assets/img/pinBanner.png') no-repeat
    background-size cover
    .rule
      position absolute
      right 0
      top 0.5rem
      height 0.26rem
      line-height 0.26rem
      text-align center
      padding 0 0.1rem
      border-radius 0.2rem 0 0 0.2rem
      background rgb(236,77,41)
      color #fff
    .receive
      position absolute
      width 0.8rem
      height 0.8rem
      border-radius 50%
      text-align center
      color #fff
      top 50%
      left 50%
      margin-left -0.4rem
      margin-top -.4rem
      line-height 1
      box-shadow 0px 0px 1px 5px rgb(235,70,34)
      font-size 0.2rem
      font-weight bold
      background rgb(235,70,34)
      padding 0.1rem
      display flex
      align-items center
      animation inOut 4s ease infinite
  .accountWrap
    width 94%
    height 1.5rem
    position relative
    z-index 99
    top -0.5rem
    border-radius 0.1rem
    background #ffffff
    align-self center
    .my-account
      height 0.6rem
      line-height 0.6rem
      font-weight bolder
      padding 0 0.1rem
      display flex
      justify-content space-between
      align-items center
      .wallet
        display inline
        color rgb(236,80,44)
        font-size 0.14rem
        .myT
          color #333
        .money  
          font-size 0.2rem
          padding 0  0.02rem
        .yo-ico
          font-size 0.18rem
          position relative
          top -0.02rem
          left 0.02rem
      .sign-in
        height 0.3rem
        line-height 0.3rem
        color #fff
        padding 0 0.16rem
        background-image linear-gradient(to right, rgb(244,126,87), rgb(235,77,40))
        border-radius 0.3rem
    // .sign-in
@keyframes inOut {
  0% {margin-top: -.4rem}
  50% {margin-top: -.3rem}
  100% {margin-top: -.4rem}
}
</style>
