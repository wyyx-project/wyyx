<template>
  <div class="home">
    <div class="main">
      <router-view></router-view>
    </div>
    <footer>
      <Bottom></Bottom>
    </footer>
  </div>
</template>

<script>
import Bottom from "../components/Bottom";
export default {
  components: {
    Bottom,
  },
};
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

// export default {
//   name: 'Home',
//   components: {
//     HelloWorld
//   }

// }
</script>

<style lang="stylus" scoped>
@import '~@a/stylus/border.styl'
.home
  display flex
  flex-direction column
  height 100%
  .main
    height calc(100% - 0.48rem) 
    flex 1
  footer
    height 0.48rem
    border_1px(1px 0 0 0)
</style>