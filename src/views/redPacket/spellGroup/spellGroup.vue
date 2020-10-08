<template>
  <div class="spell-group">
    <TtopBar topTitle="网易严选拼团"></TtopBar>
    <div class="spell-main">
      <router-view :navList="navList"></router-view>
    </div>
    <div class="notice">
      <TnoticeBar :noticeList="noticeList"></TnoticeBar>
    </div>
    <footer>
      <spellBottom></spellBottom>
    </footer>
  </div>
</template>

<script>
import TtopBar from "@c/TtopBar";
import spellBottom from "@v/redPacket/spellGroup/spellBottom";
import { getNavList, getNoticeInfo } from "@p/TredPacket";
import TnoticeBar from "@c/TnoticeBar";
export default {
  data() {
    return {
      navList: [],
      noticeList: [],
    };
  },
  components: {
    TtopBar,
    spellBottom,
    TnoticeBar,
  },
  async mounted() {
    let res = await getNavList();
    this.navList = res.data;

    let noticeRes = await getNoticeInfo();
    this.noticeList = noticeRes.data.groupList;
    // console.log(this.noticeList);
  },
};
</script>

<style lang="stylus" scoped>
@import '~@a/stylus/border.styl'
.spell-group
  height 100%
  display flex
  flex-direction column
  justify-content space-between
  position relative
  .spell-main
    height calc(100% - 0.44rem - 0.48rem)
    overflow auto
    flex 1
  footer
    height 0.48rem
    border_1px(1px 0 0 0)
  .notice
    position absolute
    left 0.1rem 
    top 0.6rem
</style>
