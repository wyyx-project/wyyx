<template>
  <div>
    <van-empty description="还没有商品哦~">
      <van-button round type="danger" class="bottom-button"> 速去购买 </van-button>
    </van-empty>
  </div>
</template>

<script>
import Vue from "vue";
import { Empty } from "vant";

Vue.use(Empty);
export default {
  data() {
    return {};
  },
  methods: {},
  components: {},
};
</script>

<style>
.bottom-button {
  width: 160px;
  height: 40px;
}
</style>
