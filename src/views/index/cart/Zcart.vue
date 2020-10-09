<template>
  <div>
    <van-cell-group>
      <van-cell class="cell" title="购物车" />
    </van-cell-group>
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
    <van-submit-bar class="van-hairline--top" :price="price" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>

<script>
import Vue from "vue"
import { SwipeCell, Card, Button, CellGroup, Cell, SubmitBar } from "vant"
import http from '@u/http'


Vue.use(SwipeCell)
Vue.use(SubmitBar)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Card)
Vue.use(Button)
export default {
  data() {
    return {
        result:{},
        price:0,
        price1:0,
        num:0
    };
  },
  methods: {
    async handlerClick(a){
      let result =await http.get('http://10.9.65.210:8090/admin/cart/delCart',{id:a})
      this.onload()
    },
    onSubmit(){

    },
    async onload(){
      let result =await http.get('http://10.9.65.210:8090/admin/cart/showCart ',{})
      console.log(result)
      this.result = result.data
      this.result.forEach(element => {
      let num = element.num-0
      let price1 = element.price-0
      this.price += num*price1 
    });
    }
  },
  components: {

  },
  async mounted(){
    this.onload()
  }, 
};
</script> 


<style lang='stylus' scoped>
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
.custom-title {
  margin-right: 4px;
  vertical-align: middle;
  font-size: 12px;
}

.search-icon {
  font-size: 12px;
  line-height: inherit;
}
</style>
<style lang='stylus'>
.van-hairline--top
  bottom:.55rem
</style>
