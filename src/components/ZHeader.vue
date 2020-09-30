<template>
  <header>
    <svg t="1600949078933" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3921" width="20" height="20"><path d="M806.975517 77.92607 729.024479 0 294.950553 434.048958 294.950553 434.048958 217.024483 511.999996 294.950553 589.926066 294.950553 589.926066 729.024479 1023.999993 806.975517 946.073923 372.901591 511.999996Z" p-id="3922" fill="#2c2c2c"></path></svg>
    <span>{{title}}</span>
  </header>
</template>

<script>
export default {
  data() {
    return {
        
    }
  },
  props:{
      title:{
          type:String,
          required: true
      }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style lang='stylus' scoped>
header 
    padding-left .1rem
    display flex
    align-items center
    height .44rem
    width 100%
    line-height .44rem
    font-size .14rem
    color #333
    span 
      flex 1
      padding-right .2rem
      text-align center
      font-weight bold
      line-height .14rem
      color #333
</style>
