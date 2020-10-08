<template>
  <div class="g-nologin">
      <p v-if='!data' @click="clickIndex">点击登录账号</p>
      <p v-else>{{data.phone}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data:JSON.parse(localStorage.getItem('info'))
    };
  },
  methods: {
    clickIndex(){
      this.$router.push('/login')
    }
  },
  components: {},
};
</script>

<style lang='stylus'>

</style>
