<template>
  <div class="red-packet">
      <pinHeader></pinHeader>
      <pinList :indexList="indexList" :avatars='avatars'></pinList>
  </div>
</template>

<script>
import pinHeader from '@v/redPacket/pinHeader'
import pinList from '@v/redPacket/pinList'

import { getIndexList, getRecommend } from '@p/TredPacket'

export default {
  data() {
    return {
      indexList:[],
      avatars:[],

    }
  },
  components: {
    pinHeader,
    pinList
  },
  computed: {
    params() {
      return {
        page: 1,
        size: 10
      }
    }
  },
  async mounted() {
    let indexRes = await getIndexList(this.params)
    let recommendRes = await getRecommend()
    this.indexList = indexRes.data.result
    this.avatars = recommendRes.data.avatars
  }
}
</script>

<style lang="stylus" scoped>
.red-packet
  background rgb(238,238,238)
  height 100%
  overflow auto
</style>
