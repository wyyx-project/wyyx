<template>
  <div>
    <van-list v-model="loading" @load="onLoad">
      <Tclassify-carousel :bannerItem="bannerItem"></Tclassify-carousel>
      <keep-alive>
        <Tclassify-list :cateItem="cateItem" :categoryL1Id='categoryL1Id'></Tclassify-list>
      </keep-alive>
    </van-list>
  </div>
</template>

<script>
import TclassifyCarousel from "@v/classify/cateCom/TclassifyCarousel";
import TclassifyList from "@v/classify/cateCom/TclassifyList";
import { getListItem } from "@p/Tclassify";

import Vue from "vue";
import { List } from "vant";

Vue.use(List);

export default {
  data() {
    return {
      cateItem: [],
      bannerItem: [],
      loading: false,
    };
  },
  computed: {
    params() {
      let obj = { categoryId: this.$route.params.id };
      return obj;
    },
    categoryL1Id() {
      return this.$route.params.id
    }
  },
  async beforeRouteUpdate(to, from, next) {
    this.params.categoryId = to.params.id;
    this.loading = true;
    this.onLoad();
    // console.log(this.cateItem);
    // console.log(result);
    next();
  },
  mounted() {},
  components: {
    TclassifyCarousel,
    TclassifyList,
  },
  methods: {
    async loadData() {
      let result = await getListItem(this.params);
      this.cateItem = result.data.category.categoryGroupList;
      this.bannerItem = result.data.category.focusBannerList;
    },
    onLoad() {
      this.loadData();
      this.loading = false;
    },
  },
};
</script>

<style lang="stylus" scoped></style>
