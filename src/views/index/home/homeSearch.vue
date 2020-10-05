<template>
  <!-- 搜索框 -->
  <van-sticky>
    <!-- <van-button type="primary" url="https:www.baidu.com" to="/search"> -->
    <van-button type="primary">
      <van-search
        v-model.lazy="msg"
        shape="round"
        background="rgb(204, 151, 86)"
        placeholder="搜索商品"
      >
      </van-search>
    </van-button>
  </van-sticky>
</template>

<script>
import Vue from "vue";
import { Search, Sticky, Button } from "vant";
Vue.use(Search);
Vue.use(Sticky);
Vue.use(Button);

export default {
  components: {
    Search,
  },
  data() {
    return {
      msg: "",
    };
  },
};
</script>

<style>
.van-field__control {
  padding: 0 1.2rem 0 0;
}
.van-search{
  padding: 0 28px;
}
.van-button--normal {
  padding: 0;
  font-size: 14px;
}
.van-button--primary {
  width: 100%;
  color: #fff;
  background-color: #cc9756;
  border: 1px solid #cc9756;
}
</style>