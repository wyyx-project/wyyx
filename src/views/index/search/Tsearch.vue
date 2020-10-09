<template>
  <div class="Tsearch">
    <TtopBar topTitle="搜索"></TtopBar>
    <form action="/" class="search-form">
      <van-search
        v-model="value"
        show-action
        autofocus
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
        @focus="onFocus"
        @blur="onBlur"
        @input="onInput"
        :action-text="actionText"
      />
    </form>
    <div :class="['search-contant', { show: showBool }]">
      <ul class="sear-list">
        <li
          class="sear-item"
          v-for="(item, index) in keywordList"
          :key="index"
          @click="clickHandle(item.keyword)"
        >
          {{ item.keyword }}
        </li>
      </ul>
    </div>
    <div class="sear-bar" v-if="itemList.length">
      <div
        :class="['sear-bar-item', { active: index === 1 }]"
        @click="showGood(1)"
      >
        综合
      </div>
      <div
        :class="['sear-bar-item', { active: index === 2 }]"
        @click="showGood(2)"
      >
        价格
      </div>
    </div>
    <div class="goodList">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        offset="100"
        @load="onLoad"
        v-if="itemList.length"
      >
        <TdetailsList :itemList="itemList"></TdetailsList>
      </van-list>
    </div>
  </div>
</template>

<script>
import TsearchCom from "@v/index/search/TsearchCom";
import TtopBar from "@c/TtopBar";
import TdetailsList from "@v/classify/cateDetailsCom/TdetailsList.vue";
import Vue from "vue";
import { Search, Toast, List } from "vant";
import { searGoodByKey, getKeyword } from "@p/Tindex";

Vue.use(Search);
Vue.use(List);
export default {
  data() {
    return {
      value: "",
      showBool: false,
      actionText: "取消",
      itemList: [],
      keywordList: [],
      index: 1,
      loading: false,
      finished: false,
    };
  },
  components: {
    TtopBar,
    TdetailsList,
  },
  computed: {
    params() {
      return {
        keyword: "",
        sortType: 0,
        descSorted: false,
        matchType: 0,
        itemId: 0,
      };
    },
  },
  methods: {
    onSearch(val) {
      this.showBool = false;
      this.index = 1
      Toast(val);
      this.loadData(val);
    },
    onCancel() {
      this.showBool = false;
      Toast("取消");
    },
    onFocus() {
      this.showBool = true;
    },
    onBlur() {
      // this.showBool = false;
    },
    async onInput(value) {
      if (value === "") {
        
        this.keywordList = [];
      } else {
        this.keywordList = [];
        let result = await getKeyword(value);
        this.keywordList = result.data.keywordVOList;
      }
    },
    async loadData(val) {
      this.itemList = [];
      this.finished = false
      this.params.itemId = 0;
      this.params.keyword = val;
      let result = await searGoodByKey(this.params);
      this.itemList = result.data.directlyList;
    },
    clickHandle(key) {
      Toast(key);
      this.showBool = false;
      this.loadData(key);
    },
    sortGood(sortType, descSorted) {
      this.params.sortType = sortType;
      this.params.descSorted = descSorted;
      this.itemList = [];
      this.loadData(this.params.keyword);
    },
    showGood(index) {
      if (this.index === index) {
        if (index === 1) return;
        if (!this.params.descSorted) {
          Toast("降序");
          this.sortGood(1, true);
        } else {
          Toast("升序");
          this.sortGood(1, false);
        }
      } else {
        this.index = index;
        if (this.index === 1) {
          this.sortGood(0, false);
        }
        if (this.index === 2) {
          Toast("升序");
          this.sortGood(1, false);
        }
      }
    },
    async continue() {
      // console.log(this.itemList.splice(this.itemList.length - 1, 1)[0]);
      this.params.itemId = this.itemList.splice(
        this.itemList.length - 1,
        1
      )[0].id;
      let result = await searGoodByKey(this.params);
      this.itemList = [...this.itemList, ...result.data.directlyList];

      this.loading = false;

      if (!result.data.hasMore) {
        this.finished = true;
      }
    },
    onLoad() {
      this.finished = false;
      this.continue();
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~@a/stylus/border.styl'
.Tsearch
  height 100%
  .van-search--show-action
    padding 0.1rem
  .search-form
    border_1px(0 0 2px 0)
  .search-contant
    display none
    background-color #fff
    height 100%
    .sear-list
      padding 0.1rem 0.2rem
      .sear-item
        line-height 0.5rem
  .search-contant.show
    display block
  .goodList
    height calc(100% - 0.4rem - 0.5rem)
    padding 0.1rem 0 0.5rem 0
    overflow auto


.sear-bar
  height 0.4rem
  line-height 0.4rem
  font-size 0.14rem
  background-color rgb(250,250,250)
  border_1px(0 0 2px 0)
  display flex
  .sear-bar-item
    width 50%
    text-align center
  .sear-bar-item.active
    color #dd1a21
</style>
<style lang="stylus">
.Tsearch
  .van-list
    .Tlist
      // height 100%
</style>
