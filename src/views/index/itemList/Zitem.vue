<template>
    <div class="zItem">
      <van-nav-bar
        title="商品详情"
        left-arrow
        @click-left="onClickLeft"
      />
      <div class="zconter">
        <div class="conter">
          <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index+image">
              <img v-lazy="image" width="100%" />
            </van-swipe-item>
          </van-swipe>
          <div class="m-promBanner">
            <div class="title"></div>
            <div class="bannerContent">
              <div class="col1">
                <div class="mt12" v-if="this.result.promotionTag">{{this.result.promotionTag.desc}}</div>
                <div class="mr8">{{this.result.activityPrice}}</div>
              </div>
              <div class="status">
                <div class="col2">
                  <div class="text" v-if="this.result.updateTime">距离结束<van-count-down millisecond :time="24000000" format="HH:mm:ss:SS" /></div>
                </div>
              </div>
            </div>
          </div>
          <div class="nameBox">
            <div class="goodsInfo">
              <div class="goodsName">{{this.result.name}}</div>
              <div class="desc">推荐理由</div>
            </div>
            <div class="comment">
                <div class="num" v-if="this.result.itemStar">{{this.result.itemStar.goodCmtRate}}</div>
                <div class="com">好评率</div>
            </div>
          </div>
          <div class="rcmdBanner">
            <ul>
              <li 
              v-for="item in this.result.recommendReasons"
              :key = 'item'
              >{{item}}</li>
            </ul>
          </div>
          <div class="listItem-custom">
              <div class="oyo van-hairline--bottom">
                <div class="tt">优惠</div>
                <div class="tagList">每满200减20</div>
              </div>
              <div class="u-icon">
                <img src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/address-right-f33ab6b984.png?imageView&type=webp" alt="">
              </div>
          </div>
          <div class="blank"></div>
          <div class="listItem-custom" @click="show = true">
              <div class="oyo van-hairline--bottom">
                <div class="tt">请选择规格数量</div>
              </div>
              <div class="u-icon">
                <img src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/address-right-f33ab6b984.png?imageView&type=webp" alt="">
              </div>
          </div>
          <div class="listItem-custom" @click="show1 = true">
              <div class="oyo van-hairline--bottom">
                <div class="tt">请选择地址</div>
                <div class="tagList">{{this.address}}</div>
              </div>
              <div class="u-icon">
                <img src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/address-right-f33ab6b984.png?imageView&type=webp" alt="">
              </div>
          </div>
          <div class="listItem-custom" @click="show2 = true">
              <div class="oyo van-hairline--bottom">
                <div class="tt">服务</div>
                <div class="tagList" v-if="this.result.policyList">{{this.result.policyList[0].title}}</div>
              </div>
          </div>
          <div>
            <van-sku
              v-model="show"
              :sku="sku"
              :goods="goods"
              :goods-id="id"
              :quota="0"
              :quota-used="0"
              :hide-stock="true"
              @buy-clicked="onBuyClicked"
            />
          </div>
          <van-popup position="bottom" v-model="show1">
            <van-area
            title="标题"
            :area-list="areaList"
            :columns-placeholder="['请选择', '请选择', '请选择']"
            @confirm="confirm"
            @cancel="cancel"
          />
          </van-popup>
          <van-popup position="bottom" v-model="show2" v-if="this.result.policyList">
            {{this.result.policyList[0].content}}
          </van-popup>
          <div id="wzt">
            
          </div>
        </div>
      </div>
      
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服"/>
        <van-goods-action-icon icon="cart-o" text="购物车"/>
        <van-goods-action-icon icon="shop-o" text="店铺"/>
        <van-goods-action-button
          type="warning"
          text="加入购物车"
          @click="show = true"
        />
        <van-goods-action-button
          type="danger"
          text="立即购买"
          @click="show = true"
        />
        
      </van-goods-action>
    </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem, Lazyload, NavBar,Toast,GoodsAction, GoodsActionIcon, GoodsActionButton,ActionSheet,CellGroup,Cell,CountDown, Sku, Area, Popup} from 'vant'
import axios from 'axios'
import http from '@u/http'
import HeaderTitle from '@c/ZHeader.vue'
import areaList from '../../../../public/data/area.js'

Vue.use(Sku)
Vue.use(Popup)
Vue.use(Area)
Vue.use(Cell)
Vue.use(CountDown)
Vue.use(CellGroup)
Vue.use(NavBar)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)
Vue.use(GoodsAction)
Vue.use(ActionSheet)
Vue.use(GoodsActionButton)
Vue.use(GoodsActionIcon)
export default {
  data() {
    return {
      id:this.$route.query.id,
      data:'',
      address:'',
      show:false,
      show1:false,
      show2:false,
      result:{},
      images:[],
      goodslist:[],
      areaList:{},
      sku: {
        tree: [
          {
            k: '颜色', // skuKeyName：规格类目名称
            k_s: 's1',
            v: [],
            largeImageMode: false, //  是否展示大图模式
          }
        ],
        list: [],
        price: '1.00', // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        messages: [
          {
            // 商品留言
            datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
            multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
            name: '留言', // 留言名称
            type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
            required: '0', // 是否必填 '1' 表示必填
            placeholder: '' // 可选值，占位文本
          }
        ],
        hide_stock: false // 是否隐藏剩余库存
      },
      goods: {
         picture: 'https://img.yzcdn.cn/1.jpg'
      },
      messageConfig: {
        // 数据结构见下方文档
      }
    }
  },
  methods: {
    onClickLeft(){
      this.$router.back()
    },
    convertKey (arr, key) {
      let newArr = [];
      arr.forEach((item, index) => {
        let newObj = {};
        for (var i = 0; i < key.length; i++) {
          newObj[key[i]] = item[Object.keys(item)[i]]
        }
        newArr.push(newObj);
      })
      return newArr;
    },
    skuPropSelected(){

    },
    async onBuyClicked(v){
      let abc =await http.post('http://10.9.65.210:8090/admin/cart/addCart',{
        goodid:v.selectedSkuComb.id,
        price:v.selectedSkuComb.price,
        goodimg:this.result.listPicUrl,
        goodname:this.result.name,
        num:v.selectedNum,
        goodinfo:this.result.pointsTip 
     })
    //  console.log(abc)
      this.$router.push({path: '/cart'})
      // console.log(v)
    },
    confirm(v){
      this.address = v[0].name+v[1].name+v[2].name
      this.show1 = false
    },
    cancel(){
      this.show1 = false
    }
    
  },
  components: {

  },
  async mounted(){
     this.areaList = areaList
     let result =await http.get('/miniapp/xhr/item/detail.json',{
       itemId:this.id
     })
     this.result = result.data
    //  console.log(this.result)
     this.images = Object.values(result.data.itemDetail)
     this.data = this.images.splice(0,1)[0]
    document.getElementById('wzt').innerHTML+=this.data
     this.result.skuSpecList[0].skuSpecValueList.forEach(element => {
       element["previewImgUrl"] = element.picUrl
     });
     this.sku.tree[0].v = this.convertKey(this.result.skuSpecList[0].skuSpecValueList, ['id','value','previewImgUrl','name','imgUrl'])
     this.sku.tree[0].k= this.result.skuSpecList[0].name
     this.goods.picture = this.result.listPicUrl
     this.sku.price = this.result.retailPrice
     this.sku.tree[0].v.forEach(element => {
      let id = element.id
      let price = (this.result.skuMap[id]).retailPriceV2
      let obj = {}
      obj["id"] = id
      obj["s1"] = id
      obj["price"] = price*100
      obj["stock_num"] = 999999
      this.sku.list.push(obj)
     });


     
  }
}
</script>

<style lang="stylus">
.zItem
  height 100%
  .zconter
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    .conter
      height 100rem
      overflow-y scroll
      img 
        width 100%
      .m-promBanner
        display flex
        width 100%
        height .6rem
        div.title
          width .55rem
          height .6rem
          background-image:url("https://yanxuan.nosdn.127.net/0770ea90ff0526062ccab81f02c259ac.png");
          background-repeat:no-repeat;
          background-size:100% 100%;
          border_1px(0 1px 0 0)
        .bannerContent
          display flex
          flex 1
          padding-right: .2rem
          background-image url("https://yanxuan.nosdn.127.net/aee487bbec398d6c790d2e2a320da5e6.png")
          background-size 100% 100%;
          background-repeat: no-repeat;
          .col1
            width 2.1rem
            height 100%
            display flex
            flex-direction column
            padding-left .08rem
            .mt12
              margin-top .08rem
              font-size .12rem
              font-weight bold
              color #fff
              width 100%
              height .24rem
            .mr8
              flex 1
              height 100%
              line-height 100%
              font-size .24rem
              font-weight bold
              color #fff
          .status
            display flex
            flex 1
            flex-direction row
            padding .07rem
            width 100%
            .col2
              width 100%
              .text
                color #fff
                width 100%
      .nameBox
        display flex
        flex-direction row
        padding .090rem 0 0 .15rem
        .goodsInfo
          width 2.71rem
          padding-right .12rem
          display flex
          flex-direction column
          .goodsName
            display inline-block
            height .48rem
            font-size: .16rem;
            color: #333;
            margin-bottom: .02rem;
            font-weight: 700;
          .desc
            font-size: .12rem;
            line-height: .24rem;
            color: #333;
            font-weight: lighter;
        .comment
          flex 1
          padding-left .1rem
          .num
            font-weight: 700;
            font-size: .14rem;
            height: .2rem;
            line-height .3rem
            color: #DD1A21;
            text-align: center;
          .com
            font-family: PingFangSC-Light;
            line-height: .24rem;
            font-size: .12rem;
            color: #7F7F7F;
            text-align center
      .rcmdBanner
        margin 0 .15rem
        background #FAFAFA
        padding .07rem .1rem
        border-radius 5px
        border_1px(1px)
        ul li
          font-family: PingFangSC-Regular;
          font-size: .14rem;
          color: #333;
      .content 
        padding: 16px 16px 160px;
      .listItem-custom
        margin  0 .15rem 
        display flex
        width 100%
        .oyo
          display flex
          width 3.20rem
          height .55rem
          line-height .55rem
          .tagList
            margin-left .15rem
        .u-icon 
          height 100%
          width .25rem
          line-height .55rem
      .blank
        border-top 0.26667rem solid rgb(244, 244, 244)


          

  
        
            


    
  
</style>

<style lang='stylus'>
.van-nav-bar .van-icon
  color #1c1c1c
.van-nav-bar__title
  font-size .14rem
  font-weight bolder


</style>
