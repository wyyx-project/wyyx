<template>
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="更多内容, 敬请期待！！"
      @load="onLoad"
      offset="100"
    >
      <TdetailsList :itemList="$store.state.itemList" :frontName="frontName"></TdetailsList>
    </van-list>
  </van-pull-refresh>
</template>

<script>
import TdetailsList from "@v/classify/cateDetailsCom/TdetailsList";
import { getCateDatails, getCategory } from "@p/Tclassify";
import { mapState } from "vuex";

import Vue from "vue";
import { List, PullRefresh } from "vant";

Vue.use(List);
Vue.use(PullRefresh);

export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      frontName: ''
    };
  },
  computed: {
    params() {
      return {
        categoryL1Id: this.$route.query.id1,
        categoryL2Id: this.$route.query.id2,
        size: 10,
      };
    },
    cateParams() {
      return {
        categoryId: this.$route.query.id1,
      };
    },
  },
  components: {
    TdetailsList,
  },

  beforeRouteUpdate(to, from, next) {
    this.params.categoryL2Id = to.query.id2;
    this.$store.state.itemList = [];
    this.loading = true
    
    this.onLoad()
    next();
  },
  methods: {
    async loadData() {
      if (this.refreshing) {
        this.params.size = 10;
        this.$store.state.itemList = [];
      }
      let result = await getCateDatails(this.params);
      let frontRes = await getCategory(this.cateParams);
      let subCategoryList = frontRes.data.category.subCategoryList

      subCategoryList.forEach((item => {
        if(item.id == this.params.categoryL2Id) return this.frontName = item.frontName
      }))
      
      this.$store.state.itemList = result.data.itemList;

      this.loading = false;
      this.refreshing = false;
      this.params.size += 10;

      if (!result.data.hasMore) this.finished = true;
    },
    onLoad() {
      this.finished = false
      this.loadData();
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
  },
  beforeRouteLeave(to, from, next) {
    this.$store.state.itemList = [];
    next();
  },
};
</script>

<style lang="stylus">
.cate-details .van-list
  background-color rgb(238,238,238)
</style>
