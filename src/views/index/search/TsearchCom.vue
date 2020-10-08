<template>
  <div class="search-com" v-if="itemList.length">
    <!-- <searchBar v-if="itemList.length" ></searchBar> -->
    <div class="sear-res">
      <router-view :itemList="itemList"></router-view>
    </div>
  </div>
</template>

<script>
import searchBar from "@v/index/search/searchBar";
export default {
  props: ["itemList"],
  data() {
    return {};
  },
  components: {
    searchBar,
  },
};
</script>

<style lang="stylus" scoped>
.search-com
  height 100%
  .sear-res
    padding 0.1rem 0 0.3rem 0
    color #000
    height calc(100% - 0.4rem)
</style>
