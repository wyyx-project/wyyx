<template>
  <div>
    <van-grid :column-num="5">
      <van-grid-item
        v-for="(item, index) in shophotpic"
        :key="index"
        :icon="item.picUrls[0]"
        :text="item.title"
        @click="handlerClick(item)"
      />
    </van-grid>
  </div>
</template>

<script>
import Vue from "vue";
import { Grid, GridItem, Skeleton } from "vant";
import http from "@u/http";

Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Skeleton);
export default {
  components: {
    Skeleton,
  },
  data() {
    return {
      shophotpic: [],
      loading: true,
    };
  },
  methods:{
    handlerClick(a){
      let title = a.title
      // console.log(a)
      this.$router.push({path: '/goodslist', query:{title:a.title}})
    }
  },
  async mounted() {
    this.loading = false;
    let result = await http.get("/api//xhr/index/indexV2.json");
    this.shophotpic = result.data.newcomerModule.kingKongAreaV5;
  },
};
</script>

<style lang='stylus' scoped>
.van-grid-item__content {
  padding: 16px 8px;
}

</style>