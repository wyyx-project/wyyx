<template>
  <div class="speel-mall">
    <div class="index-module">
      <div class="index-module__tlt-img"></div>

      <div class="pintuan_tabPanel_wrapper">
        <van-tabs type="card" v-model="active" swipe-threshold="5" replace>
          <van-tab
            replace
            v-for="tabItem in navList.tabList"
            :key="tabItem.id"
            :title="tabItem.name"
            :to="{path:'/spellGroup/spellMall/spellList', query: { tabId: tabItem.id, categoryId: null}}"
          ></van-tab>
          <van-tab
            replace
            v-for="cateItem in navList.categoryList"
            :key="cateItem.id"
            :title="cateItem.name"
            :to="{path:'/spellGroup/spellMall/spellList', query: { categoryId: cateItem.id, tabId: null}}"
          ></van-tab>
        </van-tabs>

        <div
          :class="['index-module_toggleWrap', { show: showBool }]"
          @click="clickHandler"
        >
          <i class="yo-ico">&#xe73a;</i>
        </div>

        <div :class="['index-module__linear', { show: showBool }]">
          全部类目
        </div>
        <div :class="['index-module__toggle', { show: showBool }]">
          <ul class="index-module__icon">
            <router-link
              tag="li"
              @click='clickHandler2'
              v-for="(tabItem, index) in navList.tabList"
              :key="tabItem.id"
              :to="{path:'/spellGroup/spellMall/spellList', query: { tabId: tabItem.id, categoryId: null, index : index}}"
              :class="['toggle__item', {active: tabItem.id === togIndex  }]"
            >
              {{ tabItem.name  }}
            </router-link>
            <router-link
              tag="li"
              v-for="(cateItem, index) in navList.categoryList"
              :key="cateItem.id"
              :class="['toggle__item', {active: cateItem.id === togIndex  }]"
              :to="{path:'/spellGroup/spellMall/spellList', query: { categoryId: cateItem.id, tabId: null, index: index += navList.tabList.length}}"
            >
              {{ cateItem.name }}
            </router-link>
          </ul>
        </div>
      </div>
    </div>
    <router-view :spellList="spellList"></router-view>
  </div>
</template>

<script>
import Vue from "vue";
import { Tab, Tabs, DropdownMenu, DropdownItem } from "vant";
import { getSpellList } from "@p/TredPacket";
Vue.use(DropdownMenu);
Vue.use(DropdownItem);

Vue.use(Tab);
Vue.use(Tabs);
export default {
  props: ["navList"],
  data() {
    return {
      active: 0,
      showBool: false ,
      spellList: [],
      togIndex: 0
    };
  },
  computed: {
    params() {
      return {
        tabId: this.$route.query.tabId,
        categoryId: this.$route.query.categoryId,
        page: 1,
        pageSize: 10,
      };
    },
  },
  async mounted() {
    // this.active = 
    let spellRes = await getSpellList(this.params);
    this.spellList = spellRes.data.result;
    // console.log(this.spellList);
    // if(this.$route.query.tabId) {
    //   this.active = 
    // }

    // console.log(this.$route.query.tabId);
    // console.log(this.$route.query.categoryId);
  },
  beforeUpdate() {
    let tabList = this.navList.tabList
    let categoryList = this.navList.categoryList

    this.$nextTick()
    if(this.$route.query.tabId) {
      tabList.forEach((item, index) => {
        if(this.$route.query.tabId == item.id) this.active = index
      })
    }


    if(this.$route.query.categoryId) {
      categoryList.forEach((item, index) => {
        if(this.$route.query.categoryId == item.id) this.active = index + tabList.length
      })
    }
  },
  async beforeRouteUpdate(to, from, next){
    this.spellList = []

    this.togIndex = Number(to.query.tabId || to.query.categoryId) // 下拉菜单选中哪一个
    this.showBool = false   // 点击下拉菜单后隐藏
    if(to.query.index) this.active = Number(to.query.index)

    this.params.tabId = to.query.tabId
    this.params.categoryId = to.query.categoryId
    let spellRes = await getSpellList(this.params);
    this.spellList = spellRes.data.result;

   
    next()
  },
  methods: {
    clickHandler() {
      this.showBool = !this.showBool;
    },
    clickHandler2() {
      console.log(0);
      this.showBool = false
    }
  },
};
</script>

<style lang="stylus" scoped>
@import '~@a/stylus/border.styl'
.speel-mall
  background-color rgb(238,238,238)
  .index-module
    background: url(https://yanxuan.nosdn.127.net/15858100273658117.png) no-repeat top center;
    background-size contain
    height 1.28rem
    padding-top 0.16rem
    position relative
    // z-index 9999
    .index-module__tlt-img
      margin: 0 auto .12rem;
      width: 2rem;
      height: 0.5rem;
      background: url(https://yanxuan.nosdn.127.net/15858100276428118.png) no-repeat center;
      background-size: 100%;
    .pintuan_tabPanel_wrapper
      padding 0 0.1rem
      height 0.5rem
      position sticky
      top 0.44rem
      z-index 99999
      .index-module_toggleWrap
        width 0.55rem
        height 0.5rem
        background-color #ffffff
        position absolute
        right 0.1rem
        top 0
        border-radius 0 0.1rem 0.1rem 0
        text-align center
        line-height 0.5rem
        font-size 0.2rem
        box-shadow -0.04rem 0 0.02rem 0.01rem  #ddd
        .yo-ico
          display inline-block
          transition all 0.3s
        // .yo-ico:hover
        //   transform rotate(180deg)
      .index-module_toggleWrap.show
        box-shadow none
        border-radius 0 0.1rem 0 0
        .yo-ico
          transform rotate(180deg)
      .index-module__linear
        display none
        width 3rem
        height 0.5rem
        background #ffffff
        line-height 0.5rem
        border-top-left-radius 0.1rem
        position absolute
        top 0
        font-size 0.16rem
        padding-left 0.2rem
      .index-module__linear.show
        display block
      .index-module__toggle
        display none
        padding 0.12rem 0.1rem 0
        background #ffffff
        border_1px(1px 0 0 0 )
        .index-module__icon
          display flex
          flex-flow wrap
          // justify-content space-between
          .toggle__item
            width 23%
            border_1px()
            text-align center
            height 0.3rem
            line-height 0.3rem
            font-size 0.12rem
            margin-bottom 0.1rem
            margin-right 0.06rem
          .toggle__item.active
            background-image linear-gradient(to right, rgb(255,7,8), rgb(255,70,83))
            color #fff
      .index-module__toggle.show
        display block
</style>
<style lang="stylus">
.speel-mall
  .van-tabs--card
    width 3rem
    .van-tabs__wrap
      height 0.5rem
      .van-tabs__nav--card
        border-radius 0.1rem 0 0 0.1rem
        height 0.5rem
        border none
        margin 0
        display flex
        align-items center
        padding-right 0.08rem
        .van-tab
          border none
          margin 0 0.1rem
          height 0.26rem
          color #000
        .van-tab.van-tab--active
          background-image linear-gradient(to right, rgb(255,7,8), rgb(255,70,83))
          border-radius 0.3rem
          color #fff
      .van-tabs__nav--complete
        padding 0 0.16rem 0 0.08rem
</style>
