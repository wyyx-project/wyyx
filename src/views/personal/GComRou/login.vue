<template>
  <div>
    <van-nav-bar title="登录" left-arrow @click-left="onClickLeft" />
    <div class="logoWrap" data-reactid=".0.1.0.1.0">
      <img
        src="./GComImg/timg.jpg"
        data-reactid=".0.1.0.1.0.0"
      />
    </div>
    <van-form validate-first @failed="onFailed">
      <!-- 通过 pattern 进行正则校验 -->
      <van-field
        v-model="value1"
        name="pattern"
        label='手机号'
        placeholder="请输入手机号"
        :rules="[{ pattern, message: '手机号格式不正确' }]"
        autocomplete="off"
      />
      <!-- 通过 validator 进行函数校验 -->
      <van-field
        v-model="value2"
        name="validator"
        label='密码'
        placeholder="请输入密码"
        :rules="[{ validator, message: '密码格式不正确' }]"
        autocomplete="off"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit" @click='loginHandler'>
          登录
        </van-button>
        <button class="van-button van-button--info van-button--normal van-button--block van-button--round" @click="registerHandler">
          注册
        </button>
      </div>
    </van-form>
  </div>
</template>

<script>
import Vue from "vue";
import http from "@u/http.js"
import { NavBar } from "vant";
import { Form, Field, Button } from "vant";
import { Toast } from "vant";

Vue.use(Form);
Vue.use(Field);
Vue.use(NavBar);
Vue.use(Button);

export default {
  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
      pattern: /^1[0-9]{10}$/,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/Tpersonal");
    },
    // 校验函数返回 true 表示校验通过，false 表示不通过
    validator(val) {
      //至少8-16个字符，至少1个大写字母，1个小写字母和1个数字，其他可以是任意字符：
      return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/.test(val);
    },
    // 异步校验函数返回 Promise
    asyncValidator(val) {
      return new Promise((resolve) => {
        Toast.loading('验证中...');

        setTimeout(() => {
          Toast.clear();
          resolve(/^1[0-9]{10}$/.test(val));
        }, 1000);
      });
    },
    onFailed(errorInfo) {
      console.log('failed', errorInfo);
    },
    async loginHandler(){
      if(this.value1==="" || this.value2===""){
        window.alert('手机号或密码不能为空')
      }else{
        let phone=this.value1;
        let password=this.value2;
        let res=await http.post('http://10.9.65.210:8090/admin/user/login',{phone,password});
        console.log(res)
        window.alert('你好'+res.data.data.phone+'登录成功');
        window.localStorage.setItem('info', JSON.stringify(res.data.data));
        this.$router.push('/Tpersonal')
      }
    },
    registerHandler(){
        this.$router.push("/register")
      }
  },
  components: {},
};
</script>

<style lang='stylus' scoped>
.logoWrap
    text-align center
    padding-top 1rem
    padding-bottom 1rem
    img 
      width: 2.5rem;
      height: 1.25rem;
.van-button
  width 50%
  float left
</style>
