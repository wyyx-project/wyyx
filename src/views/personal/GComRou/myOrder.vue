<template>
  <div class="g-order">
    <van-nav-bar title="我的订单" left-arrow @click-left="onClickLeft" />
    <van-tabs>
      <van-tab v-for="item in order" :title="item.nm" :key="item.id">
        <div class="order-content">
          <img src="http://yanxuan.nosdn.127.net/a6c0f7e39e7bae64154b941432ce3216.png" alt="">
          <p>还没有任何订单呢</p>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Vue from 'vue';
import { Tab, Tabs } from 'vant';
import { NavBar } from "vant";

Vue.use(Tab);
Vue.use(Tabs);
Vue.use(NavBar)
export default {
  data() {
    return {
      order:[
        {
          nm:'全部',
          id:'1001'
        },
        {
          nm:'待付款',
          id:'1002'
        },
        {
          nm:'待发货',
          id:'1003'
        },
        {
          nm:'已发货',
          id:'1004'
        },
        {
          nm:'待评价',
          id:'1005'
        },
      ]
    }
  },
  methods: {
    onClickLeft(){
      this.$router.push('/Tpersonal')
    }
  },
  components: {

  }
}
</script>

<style lang='stylus'>

.g-order
  .order-content
    overflow hidden
    width 100%
    height 5.75rem
    overflow-y scroll
    text-align center
    img 
      margin-top 1.3rem
      margin-left 1.08rem
      display block
      width 1.6rem
      height 1.6rem

</style>
