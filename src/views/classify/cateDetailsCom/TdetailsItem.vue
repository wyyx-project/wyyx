<template>
  <div></div>
  <!-- <TdetailsList ></TdetailsList> -->
</template>

<script>
import TdetailsList from "@v/classify/cateDetailsCom/TdetailsList"
export default {
  data() {
    return {

    }
  },
  beforeRouteEnter (){
    console.log(this);
  },
  components: {
    TdetailsList
  }
}
</script>

<style lang="stylus" scoped>

</style>
