<template>
  <div class="sear-bar">
      <div :class="['sear-bar-item', { active: index === 1 }]">综合</div>
      <div :class="['sear-bar-item', { active: index === 2 }]">价格</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 1
    }
  },
}
</script>

<style lang="stylus" scoped>
@import '~@a/stylus/border.styl'
.sear-bar
  height 0.4rem
  line-height 0.4rem
  font-size 0.14rem
  background-color rgb(250,250,250)
  border_1px(0 0 2px 0)
  display flex
  .sear-bar-item
    width 50%
    text-align center
  .sear-bar-item.active
    color #dd1a21
</style>
