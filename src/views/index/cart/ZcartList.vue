<template>
  <div>
    <van-swipe-cell v-for="item in result" :key="item.goodsId">
      <van-card
        :num="item.num"
        :price="item.price / 100"
        :desc="item.goodinfo"
        :title="item.goodname"
        class="goods-card"
        :thumb="item.goodimg"
      />
      <template #right>
        <van-button
          square
          text="删除"
          type="danger"
          class="delete-button"
          @click="handlerClick(item._id)"
        />
      </template>
    </van-swipe-cell>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props:['result'],
  methods: {

  },
  components: {

  }
}
</script>

<style lang='stylus'>
.cell {
  font-size: 20px;
}

.goods-card {
  margin: 0;
  background-color: @white;
}

.delete-button {
  height: 100%;
}
</style>
