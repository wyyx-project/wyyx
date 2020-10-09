<template>
  <div>
        <van-nav-bar title="积分管理" left-arrow @click-left="onClickLeft" />

  </div>
</template>

<script>
import Vue from "vue";
import { NavBar } from "vant";
Vue.use(NavBar)
export default {
  data() {
    return {

    }
  },
  methods: {
    onClickLeft(){
      this.$router.push('/Tpersonal')
    },
  },
  components: {

  }
}
</script>

<style>

</style>
