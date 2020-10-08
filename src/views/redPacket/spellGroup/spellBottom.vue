<template>
  <van-tabbar v-model="active" active-color="rgb(221,26,33)">
    <van-tabbar-item  to="/spellGroup/spellMall" replace>
      <span>拼团商城</span>
      <template #icon="props">
        <i class="yo-ico">&#xe6d3;</i>
      </template>
    </van-tabbar-item>
    <van-tabbar-item to="/spellGroup/myGroup" replace>
      <span>我的团</span>
      <template #icon="props">
        <i class="yo-ico">&#xe611;</i>
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style lang="stylus" scoped>

</style>
