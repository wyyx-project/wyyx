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
    <div :class="['search-contant', { show: showBool }]"></div>
    <TsearchCom :itemList='itemList'></TsearchCom>
  </div>
</template>

<script>
import TsearchCom from "@v/index/search/TsearchCom";
import TtopBar from "@c/TtopBar";
import Vue from "vue";
import { Search, Toast } from "vant";
import { searGoodByKey } from "@p/Tindex";

Vue.use(Search);
export default {
  data() {
    return {
      value: "",
      showBool: false,
      actionText: "取消",
      itemList:[]
    };
  },
  components: {
    TtopBar,
    TsearchCom,
  },
  computed: {
    params() {
      return {
        keyword: '',
        sortType: 0,
        descSorted: false,
        matchType: 0,
        itemId: 0,
      };
    },
  },
  methods: {
    onSearch(val) {
      Toast(val);
      this.loadData(val)
    },
    onCancel() {
      Toast("取消");
      this.showBool = false;
    },
    onFocus() {
      this.showBool = true;
    },
    onBlur() {},
    onInput(value) {
      this.actionText = "搜索";
      if (value === "") this.actionText = "取消";
    },
    async loadData(val) {
      this.params.keyword = val
      let result = await searGoodByKey(this.params)
      this.itemList = result.data.directlyList
      console.log(result.data.directlyList);
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
  // .search-contant.show
  //   display block
</style>
