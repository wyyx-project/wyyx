<template>
  <div class="g-address">
    <van-nav-bar title="地址管理" left-arrow @click-left="onClickLeft" />
    <!-- <div class="address-content">
      <img src="./GComImg/address.png" alt="">
      <p>收货地址在哪里</p>
    </div>
    <van-cell is-link @click="showPopup">新增地址</van-cell>
    <van-popup
      v-model="show"
      closeable
      position="bottom"
      :style="{ height: '30%' }"
    >
    </van-popup> -->
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>
import Vue from 'vue';
import { Popup,Cell} from 'vant';
import { NavBar } from "vant";
import { AddressList } from 'vant';

Vue.use(AddressList);
Vue.use(Popup);
Vue.use(NavBar);
Vue.use(Cell)
export default {
  data() {
    return {
       show: false,
       chosenAddressId: '1',
        list: [
          {
            id: '1',
            name: '张三',
            tel: '13000000000',
            address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
            isDefault: true,
          },
          {
            id: '2',
            name: '李四',
            tel: '1310000000',
            address: '浙江省杭州市拱墅区莫干山路 50 号',
          },
        ],
    }
  },
  methods: {
    onClickLeft(){
      this.$router.push('/Tpersonal')
    },
    showPopup() {
      this.show = true;
    },
    onAdd() {
      this.$router.push('/addAddress')
    },
    onEdit(item, index) {
      // Toast('编辑地址:' + index);
    },
  },
  components: {

  }
}
</script>

<style lang='stylus'>
.address-content {
  width: 100%;
}
</style>
