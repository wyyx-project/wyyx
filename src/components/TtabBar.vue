<template>
  <van-tabs v-model="active" swipeable animated>
    <van-tab
      v-for="item in cateDatails.categoryL2List"
      :key="item.id"
      :title="item.name"
      :to="{path:'/TcateDetails', query: { id1: categoryL1Id, id2: item.id}}"
      replace
      swipeable
    >
      <router-view ></router-view>
    </van-tab>
  </van-tabs>
</template>

<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";
import TdetailsItem from "@v/classify/cateDetailsCom/TdetailsItem"

Vue.use(Tab);
Vue.use(Tabs);

export default {
  props: ["cateDatails","activeIndex", "categoryL1Id"],
  data() {
    return {
      active: 0,
    };
  },
  components: {
    TdetailsItem
  },
  computed: {
    params() {
      return {
        // categoryL1Id: this.id1,
        // categoryL2Id: this.id2,
        // size: 20
      }
    },
    // active() {
    //   return this.activeIndex
    // }
  },
  watch: {
    activeIndex() {
      this.active = this.activeIndex - 1
    }
  },
  mounted() {
    
  },
  async beforeRouteEnter (to, from, next) {
    // this.categoryL1Id = to.params.id1
    // this.categoryL2Id = to.params.id2
    console.log(to);
  },
  updated() {
    // console.log(this.cateDatails);
  },
};
</script>

<style lang="stylus">
@import '~@a/stylus/border.styl'
.van-tabs--line
  height calc(100% - 0.44rem)
  .van-tabs__wrap
    height 0.32rem
    border_1px(0 0 1px 0)
    .van-tab
      font-size 0.14rem
      padding 0 0.16rem
    .van-tabs__line
      width 0.66rem
      height 0.02rem
      border-radius 0
  .van-tabs__content
    height calc(100% - 0.32rem)
    overflow auto
    .van-tab__pane-wrapper
      background-color rgb(238,238,238)
      .van-tab__pane
        height 100%
</style>

<style lang="stylus">
// .van-tabs--line
//   .van-tabs__wrap
//     height 0.44rem
</style>
