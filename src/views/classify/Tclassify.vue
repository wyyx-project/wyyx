<template>
<keep-alive>
  <div class="classify">
    <header class="classify-header">分类</header>
    <ul class="classify-contain">
      <li class="classify-left">
        <Tclassify-left :categoryList="categoryList"></Tclassify-left>
      </li>
      <li class="classify-right">
        <router-view></router-view>
      </li>
    </ul>
  </div>
</keep-alive>
</template>

<script>
import TclassifyLeft from "@v/classify/cateCom/TclassifyLeft";
import { getListName } from "@p/Tclassify"
export default {
  data() {
    return {
      categoryList: []
    };
  },
  computed: {
    listData() {
      let { id } = this.$route.params
      return id
    }
  },
  async mounted() {
    let result = await getListName()
    // console.log(result.data.categoryList);
    this.categoryList = result.data.categoryList
  },
  components: {
    TclassifyLeft,
  },
  methods: {},
};
</script>

<style lang="stylus" scoped>

@import '~@a/stylus/ellipsis.styl'

.classify
  display flex
  flex-direction column
  height 100%
  .classify-header
    height 0.44rem
    color #000
    background-color #fafafa
    padding-left 0.12rem
    line-height 0.44rem
    font-size 0.16rem
  .classify-contain
    flex 1
    width 100%
    height calc(100% - 0.44rem)
    .classify-left
      width 21%
    .classify-right
      height 100%
      overflow auto
      width 78%
      padding 0.15rem
    li
      float left
</style>

<style lang="stylus">
@import '~@a/stylus/border.styl'
.classify-left
  height 100%
  width 22%
  border_1px(0 1px 0 0)
.van-sidebar[data-v-4f786164]
  width 100%
</style>
