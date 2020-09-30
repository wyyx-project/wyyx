<template>
  <div class="footer">
    <div class="gotop" v-show="gotop" @click="toTop">
      返回
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gotop: false,
    };
  },
  mounted() {
    // 此处true需要加上，不加滚动事件可能绑定不成功
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    handleScroll(e) {
      let scrolltop = e.target.scrollTop;
      scrolltop > 100 ? (this.gotop = true) : (this.gotop = false);
    },
    toTop() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      // 实现滚动效果
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    },
  },
};
</script>

<style>
.footer .gotop {
  text-align: center;
  position: fixed;
  right: 25px;
  bottom: 66px;
  cursor: pointer;
  padding: 0.2rem;
  border-radius: 50%;
  background: rgba(100, 100, 100,0.8);
  color: #000000;
}
</style>