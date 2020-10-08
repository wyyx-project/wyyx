<template>
      <div class="discounts">
        <van-row>
          <van-col span="4" v-for="item in disconts" :key="item.id">
            <span>{{item.num}}</span>
            <p>{{item.text}}</p>
            <p v-if="item.add">{{item.add}}</p>
          </van-col>
        </van-row>
      </div>
</template>

<script>
import Vue from 'vue';  
import { Col, Row } from 'vant';

Vue.use(Col);
Vue.use(Row);

export default {
  data() {
    return {
      disconts:[
        {
          id:101,
          num:'￥'+0,
          text:'回馈金',
        },
        {
          id:102,
          num:0,
          text:'红包',
        },
        {
          id:103,
          num:0,
          text:'优惠券',
        },
        {
          id:104,
          num:0+'(次)',
          text:'免邮权益',
        },
        {
          id:105,
          num:'￥'+0,
          text:'津贴',
        },
        {
          id:106,
          num:0,
          text:'礼品卡',
          add:'提货券'
        },
      ]
    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style lang='stylus'>
.discounts
  width 100%
  height .45rem
  .van-row
    display inline
  .van-col
    height .55rem
    text-align center
    span 
      margin-top .1rem
    p
      font-size .1rem
      transform:scale(0.8)
</style>
