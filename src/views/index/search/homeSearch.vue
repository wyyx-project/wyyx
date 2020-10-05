<template>
  <div>
    <router-link to="/home"
      ><van-nav-bar title="搜索" left-arrow border:false
    /></router-link>
    <form action="/">
      <van-search
        v-model.trim="searchValue"
        class="search"
        show-action
        autofocus
        placeholder="请输入"
        @search="onSearch"
        @cancel="onCancel"
        @input="msg = $event.target.value"
      />
    </form>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar, Toast, Search } from "vant";
Vue.use(NavBar);
Vue.use(Toast);
Vue.use(Search);

// 节流函数
const delay = (function () {
  let timer = 0;
  return function (callback, ms) {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
})();

export default {
  data() {
    return {
      value: "",
      searchValue: "",
    };
  },
  watch: {
    //用来监听页面变量的改变
    //监听搜索，300ms执行一次fetchData方法（去搜索）
    searchValue() {
      delay(() => {
        this.fetchData();
      }, 300);
    },
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast("取消");
    }, //模糊查询被评价人
    async fetchData(val) {
      const res = await this.fetch({
        url: "/api/xhr/search/displayBar.json",
        method: "POST",
        params: { title: this.title },
      });
      this.search = res.data.list;
    },
  },
};
</script>


 
<style lang='stylus' scoped>
@import '~@a/stylus/border.styl';

.van-search {
  margin-bottom: 0.3rem;
  border_1px(0 0 1px 0);
}
</style>

<style>
.van-nav-bar .van-icon {
  font-weight: bold;
  font-size: 22px;
  color: #455a64;
}
.van-nav-bar__title {
  font-weight: bold;
  font-size: 22px;
}
</style>