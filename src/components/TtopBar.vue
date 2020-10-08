<template>
  <div class="top-bar">
      <header class="">
        <h1>{{topTitle}}</h1>
        <i class="yo-ico" @click="clickHeandler">&#xe506;</i>
      </header>
  </div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';

Vue.use(Icon);
export default {
  props:['topTitle'],
  data() {
    return {

    }
  },
  mounted(){
    
  },
  methods: {
    clickHeandler(){
      this.$router.back()
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@a/stylus/border.styl'
.top-bar
  border_1px(0 0 1px 0)
  header  
    display flex
    height 0.44rem
    color #000
    background-color #fafafa
    line-height 0.44rem
    font-size 0.16rem
    h1
      width 100%
      position absolute
      text-align center
      font-weight 500
    .yo-ico
      position relative
      padding-left 0.12rem
      margin-right 0.16rem
      display inline-block
      
</style>
