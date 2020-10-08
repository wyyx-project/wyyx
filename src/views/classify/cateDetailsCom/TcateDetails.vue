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

import { getCategory } from "@p/Tclassify";

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
    cateParams() {
      return {
        categoryId: this.$route.query.id1,
      };
    },
  },
  async mounted() {
    console.log();
    let cateRes = await getCategory(this.cateParams);
    // 头部标题
    this.topTitle = cateRes.data.category.name;
    // 分类详细数据
    this.cateDatails = cateRes.data.category.subCategoryList;
    
    this.cateDatails.forEach((item, index) => {
      if (item.id == this.$route.query.id2) return (this.activeIndex = index);
    });
  },
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
