<template>
  <div>
    <van-grid v-if="data" :column-num="3">
      <van-grid-item 
        v-for="value in list"
        :key="value.id"
        :icon="value.photo"
        :text="value.text"
        :to="value.to"
      />
    </van-grid>
    <van-grid v-else :column-num="3">
      <van-grid-item 
        v-for="value in list"
        :key="value.id"
        :icon="value.photo"
        :text="value.text"
        to="/login"
      />
    </van-grid>
  </div>
</template>

<script>
import Vue from "vue";
import { Grid, GridItem } from "vant";
Vue.use(Grid);
Vue.use(GridItem);
export default {
  data() {
    return {
      data:JSON.parse(localStorage.getItem('info')),
      list: [
        {
          id: 1001,
          text: "我的订单",
          photo: require("./PerImg/wodedingdan.png"),
          to:'/order'
        },
        {
          id: 1002,
          text: "周六一起拼",
          photo: require("./PerImg/wodepintuan.png"),
          to:'/spellGroup/spellMall'
        },
        {
          id: 1003,
          text: "领红包",
          photo: require("./PerImg/qiandaolinghongbao.png"),
          to:'/TredPacket'
        },
        {
          id: 1004,
          text: "我的积分",
          photo: require("./PerImg/wodejifen.png"),
          to:'/integral'
        },
        {
          id: 1005,
          text: "地址管理",
          photo: require("./PerImg/dizhiguanli.png"),
          to:'/address'
        },
        {
          id: 1006,
          text: "账号安全",
          photo: require("./PerImg/zhanghaoanquan.png"),
          to:'/account'
        },
        {
          id: 1007,
          text: "联系客服",
          photo: require("./PerImg/lianxikefu.png"),
          to:'/servyce'
        },
        {
          id: 1008,
          text: "用户反馈",
          photo: require("./PerImg/yonghufankui.png"),
          to:'/retroaction'
        },
        {
          id: 1009,
          text: "帮助中心",
          photo: require("./PerImg/bangzhuzhongxin.png"),
          to:'/help'
        },
        {
          id: 1010,
          text: "退换售后",
          photo: require("./PerImg/tuihuanshouhou.png"),
          to:'/aftermarket'
        },
      ],
    };
  },
  methods: {},
  components: {},
};
</script>

<style>
</style>
