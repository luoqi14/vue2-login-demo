<template>
  <div class="login-container flex flex-dv" v-title data-title="用户登录">
    <form class="login-form">
      <mt-field label="手机号" placeholder="请输入手机号" type="tel"
                :value = 'username'
                @input = "username = arguments[0]"
                :attr = "{ minlength: 11, maxlength: 11}">
      </mt-field>
      <mt-field label="密码" placeholder="请输入密码(6-16)" type="password"
                :value = 'password'
                @input = "password = arguments[0]"
                :attr = "{ minlength: 6, maxlength: 16}">
      </mt-field>
      <div class="login-button-wrapper">
        <mt-button type="primary" size="large" @click.native.prevent="action">{{ buttonText }}</mt-button>
      </div>
      <p class="flex flex-jb" v-if="show == 'login'">
        <a class="t_aaa">忘记密码？</a>
        <a class="t_blue" @click="jump('register')">立即注册</a>
      </p>
      <p class="flex flex-jb" v-if="show == 'register'">
        <span class="t_aaa">注册即视为同意<span class="t_orange">《注册协议》</span></span>
        <a class="t_blue" @click="jump('login')">返回登录</a>
      </p>

    </form>
    <div class="flex1 flex flex-c">
      <img src="../assets/logo.png"/>
    </div>
  </div>
</template>

<script>
  import { Indicator } from 'mint-ui';

  export default {
    name: 'login',
    data () {
      return {
        show: 'login',
        username: '',
        password: ''
      }
    },
    computed: {
      buttonText () {
        return this.show == 'login' ? '登录' : '注册'
      }
    },
    watch: {
      show () {
        this.reset() // 清除所填内容
      }
    },
    methods: {
      // 登录/注册切换
      jump (show) {
        this.show = show
      },
      // 重置表单
      reset () {
        this.username = '';
        this.password = '';
      },
      action () {
        let show = this.show
        if (this.valid()) {
          if (show == 'login') {
            this.login();
          } else if (show == 'register') {
            this.reg();
          }
        } else {
          this.$toast({
            message: '手机号或密码格式错误，请检查',
            position: 'bottom',
            duration: 1000
          });
        }
      },
      reg () {
        // TODO 发送请求注册用户
        this.$toast({
          message: '注册成功',
          iconClass: 'fa fa-check',
          duration: 1000
        });
        setTimeout(() => {
          this.show = 'login'
        }, 1000);
      },
      login () {
        Indicator.open();
        this.$store.dispatch('getUser', {"username": this.username, "password": this.password}).then(() => {
          Indicator.close();
          window.localStorage.setItem('access-token',this.username)
          this.$router.push({path: '/index'})
        }, () => {
          Indicator.close();
          this.$toast({
            message: '用户不存在',
            position: 'bottom',
            duration: 1000
          });
        })

      },
      // 表单验证
      valid () {
        const phoneReg = /^1[34578]{1}\d{9}$/;
        const pwdReg = /^\S{6,16}$/;
        return phoneReg.test(this.username) && pwdReg.test(this.password);
      }
    }
  }
</script>
<style>
.login-container {
  padding: 10px;
  height: 100%;
}

  .login-button-wrapper {
    margin: 10px 0;
  }
</style>
