<template>
  <div>
    <van-nav-bar title="注册" left-arrow @click-left="onClickLeft" />

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
        :rules="[{ pattern, message: '请输入正确的手机号' }]"
        autocomplete="off"
      />
      <!-- 通过 validator 进行函数校验 -->
      <van-field
        v-model="value2"
        name="validator"
        label='密码'
        placeholder="请输入密码"
        :rules="[{ validator, message: '密码必须包含大小写和数字' }]"
        autocomplete="off"
      />
      <van-field
        v-model="value3"
        name="validator"
        label='再次输入密码'
        placeholder="请再次输入密码"
        :rules="[{ validator, message: '' }]"
        autocomplete="off"
      />
      <button class="regis-bto" @click='clickRegister'>注册</button>
    </van-form>
  </div>
</template>

<script>
import Vue from "vue";
import http from '@u/http.js'
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
      this.$router.push("/login");
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
      // console.log('failed', errorInfo);
      window.alert('格式不正确，请重新输入');
    },
    async clickRegister(){
      let phone=/^1[0-9]{10}$/.test(this.value1);
      let password=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/.test(this.value2);
      let repassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/.test(this.value3);
      if(phone){
        if(password && repassword && this.value2===this.value3){
          let obj={
            phone:this.value1,
            password:this.value2
          }      
          let res = await http.post('http://10.9.65.210:8090/admin/user/registered',obj)
          // console.log(obj);
          // console.log('充公');
          window.alert('注册成功');
          this.$router.push('/login')
      }else{  
        window.alert('两次输入的密码不一致')
      }
      }
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
.regis-bto
  display block
  font-size .14rem
  height .44rem
  color: #fff;
  background-color: #1989fa;
  border: 1px solid #1989fa;
  text-align: center;
  border-radius: 999px;
  cursor: pointer;
  width 50%
  margin .2rem 0 0 25%
</style>
