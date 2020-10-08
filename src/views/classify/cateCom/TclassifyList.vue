<template>
  <div class="subCateContainer">
    <div class="cateList" v-for="item in cateItem" :key="item.id">
      <div class="hd" v-if="item.name">{{ item.name }}</div>
      <ul class="list">
        <router-link
          tag="li"
          class="cateItem"
          v-for="li in item.categoryList"
          :key="li.id"
          :to="{path:'/TcateDetails', query: { id1: categoryL1Id, id2: li.id}}"
        >
        <!-- :to="'/TcateDetails/' + categoryL1Id  +'/'+ li.id" -->
          <div class="cateImgWrapper u-icon-hd-water">
            <img :src="li.prettyBannerUrl" class="cateImg" />
          </div>
          <div class="name">{{ li.name }}</div>
        </router-link>
      </ul>
    </div>

    <div></div>
  </div>
</template>

<script>
export default {
  props: ["cateItem","categoryL1Id"],
  data() {
    return {
    };
  },
  beforeRouteLeave(to, from, next){
    console.log("真要离开？");
  },
};
</script>

<style lang="stylus" scoped>
@import '~@a/stylus/ellipsis.styl'
.subCateContainer
  .hd
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: 3.5rem;
    margin-bottom: 0.12rem;
    line-height .3rem
    text-align: left;
    font-size: 0.14rem;
    font-weight: 700;
    color: #333;
    border-bottom: 1px solid #d9d9d9;
  .list
    display flex
    flex-wrap wrap
    .cateItem
      width 0.72rem
      margin-right 0.14rem
      height 1.08rem
      font-size 0.12rem
      text-align center
      margin-bottom 0.04rem
      img
        width 0.72rem
        height 0.72rem
        margin-bottom 0.02rem
      .name
        height 0.34rem
        ellipsis(100%, 2)
        color #333
</style>


