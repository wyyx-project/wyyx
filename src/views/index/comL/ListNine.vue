 <template>
  <div>
    <div class="aaa">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="————更多内容,敬请期待————"
        @load="onLoad"
        class="a-ul"
      >
        <li v-for="value in list" :key="value.id">
          <div class="a-totalList">
            <div class="a-list">
              <img :src="value.categoryItem.listPicUrl" class="a-img" />
              <div
                class="if-exsit"
                v-if="
                  value.categoryItem.promBanner.promoTitle &&
                  value.categoryItem.promBanner.content
                "
              >
                <span>
                  {{ value.categoryItem.promBanner.promoTitle }}
                </span>
                <p>
                  {{ value.categoryItem.promBanner.content }}
                </p>
              </div>
              <div v-else class="else-h">
                <h3>{{ value.categoryItem.simpleDesc }}</h3>
              </div>
              <div class="price">
                <p>{{ value.categoryItem.name }}</p>
                <span v-if="value.categoryItem.activityPrice"
                  >￥{{ value.categoryItem.activityPrice }}
                  <span>￥{{ value.categoryItem.retailPrice }}</span>
                </span>
                <span v-else>￥{{ value.categoryItem.retailPrice }} </span>
              </div>
              <div class="my-content" v-if="value.categoryItem.comments[0].content">
                <p>{{ value.categoryItem.comments[0].content }}</p>
              </div>
            </div>
          </div>
        </li>
      </van-list>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import http from "@u/http.js";
import { List } from "vant";
Vue.use(List);

export default {
  data() {
    return {
      listB: [],
      list: [],
      loading: false,
      finished: false,
      limit:10,
    };
  },
  methods: {
    async loadData() {
      let listA = await http.get(
      "/api/xhr/rcmd/indexV2.json?type=2&size=22&lastItemId=0&categoryId=1019000"
      );
      listA.data.rcmdItemList.forEach((value) => {
        if (value.categoryItem && value.categoryItem.promBanner.content) {
          if(value.categoryItem.comments[0]){
            this.listB.push(value);
          }
        }
      }); 
      let page=Math.ceil(this.listB.length/this.limit)
      // console.log(page);
      setTimeout(()=>{
        for(let i=0;i<page;i++){
        for(let j=0;j<this.limit;j++){
          if(this.listB[i*this.limit+j]){
          this.list.push(this.listB[i*this.limit+j])
          }
        }
        this.loading=false;
        if(this.list.length===this.listB.length){
          this.finished=true
        }
       }
      },1000)
      //  console.log(this.list);
     },
    onLoad() {
      this.loadData();
    },
  },
  components: {},

  mounted() {
    // let listA = await http.get(
    //   "/api/xhr/rcmd/indexV2.json?type=0&size=99&lastItemId=0&categoryId=0"
    // );
    // listA.data.rcmdItemList.forEach((value) => {
    //   if (value.categoryItem) {
    //     this.listB.push(value);
    //   }
    // });
    // console.log(this.listB);
  },
};
</script>

<style lang='stylus'>
@import '~@a/stylus/border.styl';
@import '~@a/stylus/ellipsis.styl';

.aaa {
  height: 100%;

  .a-ul {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0.1rem;
    overflow: hidden;
    height: calc(100% - 0.44rem);
    margin-top: 0.07rem;
    li {
      width: calc(50% - 10px);
      list-style none
      &:nth-child(2n+1) {
        margin-right: 0.1rem;
        margin-bottom: 0.1rem;
      }
    }
  }
}

.a-totalList {
  width: 100%;
  height: 2.25rem;
}

.a-list {
  width: 100%;
  height: 1.34rem;
  border-radius: 0.05rem;
  position: relative;

  .my-content {
    text-align: left;
    overflow: hidden;
    ellipsis();

    >p:last-child {
      font-size: 0.1rem;
    }
  }
}

.a-img {
  width: 100%;
  height: 100%;
  border-radius: 0.05rem;
  background-color: white;
}

.if-exsit {
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;

  >span:first-child {
    background: url('https://yanxuan.nosdn.127.net/d71e2460d062eaa21d5bdf97eba9da89.png');
    font-size: 0.12rem;
    color: white;
  }

  p {
    background: url('https://yanxuan.nosdn.127.net/c168892ef76f29971032dc1c12613720.png');
    font-size: 0.06rem;
    color: white;
  }
}

.else-h {
  background-color: rgb(241, 236, 226);

  h3 {
    font-weight: lighter;
    font-size: 0.14rem;
    transform: scale(0.8);
  }
}

.a-list {
  h4 {
    font-size: 0.1rem;
    font-weight: 300;
  }
}

.price {
  border_1px(0 0 1px 0);

  span {
    color: rgb(226, 61, 67);

    span {
      color: rgb(171, 171, 171);
      text-decoration: line-through;
    }
  }
}
</style>

