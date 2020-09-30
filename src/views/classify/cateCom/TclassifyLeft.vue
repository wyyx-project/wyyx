<template>
  <div class="container">
    <van-sidebar v-model="activeKey" border>
      <van-sidebar-item
        v-for="li in listLeft"
        :key="li.id"
        :title="li.name"
        :to="'/TcateList/' + li.id"
      />
    </van-sidebar>
  </div>
</template>

<script>
import Vue from "vue";
import { Sidebar, SidebarItem } from "vant";

Vue.use(Sidebar);
Vue.use(SidebarItem);
export default {
  props: ["categoryList"],
  data() {
    return {
      activeKey: 0,
    };
  },
  computed: {
    listLeft() {
      return this.categoryList;
    },
  },
  beforeUpdate() {
    this.listLeft.forEach((item, index) => {
      if (item.id == this.$route.params.id) return (this.activeKey = index);
    });
  },
};
</script>

<style lang="stylus" scoped>
.container
  color #343434
.van-sidebar
  width 0.8rem
  .van-sidebar-item
    text-align center
    font-size 0.12rem
    padding 0.14rem 0rem
</style>

<style lang="stylus">
@import '~@a/stylus/ellipsis.styl'

.van-sidebar
  width 100%
  .van-sidebar-item--select
    .van-sidebar-item__text
      color #ee0a24
      font-size 0.14rem
  .van-sidebar-item
    background-color #fff
.van-sidebar-item__text
  font-weight 500
  ellipsis()
  color #333
  text-align center
  transition 0.3s
  font-size 0.13rem
</style>
