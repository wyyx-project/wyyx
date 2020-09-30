<template>
  <div class="cate-details">
    <TtopBar :topTitle="topTitle"></TtopBar>
    <!-- <router-view></router-view> -->
    <TtabBar :cateDatails="cateDatails" :activeIndex="activeIndex" :categoryL1Id="params.categoryL1Id"></TtabBar>
  </div>
</template>

<script>
import TtopBar from "@c/TtopBar";
import TtabBar from "@c/TtabBar";

import { getCateDatails } from "@p/Tclassify";

export default {
  data() {
    return {
      cateDatails: [],
      topTitle: "",
      categoryL2List: [],
      activeIndex: "",
    };
  },
  computed: {
    params() {
      return {
        categoryL1Id: this.$route.query.id1,
        categoryL2Id: this.$route.query.id2,
        size: 40,
      };
    },
    // activeIndex() {
    //   return this.categoryL2List.forEach((item, index) => {
    //     if (item.id === this.categoryL2Id) return index;
    //   });
    // },
  },
  async mounted() {
    let result = await getCateDatails(this.params);
    // 头部标题
    this.topTitle = result.data.title;
    // 分类详细数据
    this.cateDatails = result.data;
    this.categoryL2List = result.data.categoryL2List;
    // console.log(this.categoryL2List);
    // console.log(this.$route.query.id2);
    this.categoryL2List.forEach((item, index) => {
      if (item.id == this.$route.query.id2) return (this.activeIndex = index);
    });
    // console.log(this.activeIndex);
  },
  // async beforeRouteEnter (to, from, next) {
  //   // this.categoryL1Id = to.params.id1
  //   // this.categoryL2Id = to.params.id2
  //   console.log(to);

  //   // console.log(to.params.id1);
  // },
  components: {
    TtopBar,
    TtabBar,
  },
};
</script>

<style lang="stylus" scoped>
.cate-details
  height 100%
</style>
