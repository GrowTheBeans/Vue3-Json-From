<template>
  <div class="logins">
    <header>
      <div class="jd__logo"></div>
      <h1>京东购物</h1>
    </header>
    <div class="jd__form">
      <input class="phone" type="text" placeholder="请输入手机号" maxlength="11" minlength="6"/>
      <input class="password" type="password" placeholder="请输入密码" maxlength="30" minlength="6"/>
      <button class="logins-button">登录</button>
    </div>
    <div class="jd__logins--footer">
      <span>立即注册</span>
      <span>忘记密码</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Login"
})
</script>

<style scoped lang="less">
@import "../../../styles/var.less";
@import "../../../styles/mixin.less";

.logins {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 0.14em;
  background: #fff;
  padding: 0 40px;
  box-sizing: border-box;

  header {
    display: flex;
    align-items: center;
    margin-bottom: 80px;

    .jd__logo {
      width: 66px;
      height: 66px;
      margin: 0 10px;
      background: url("../../../assets/jd/logo.png") no-repeat center center;
      background-size: 100% 100%;
    }

    h1 {
      font-size: 30px;
      font-weight: 500;
      font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Segoe UI, Arial, Roboto, 'PingFang SC', 'miui', 'Hiragino Sans GB', 'Microsoft Yahei', sans-serif;
    }
  }

  .jd__form {
    display: flex;
    flex-direction: column;

    input, .logins-button {
      width: 296px;
      height: 48px;
    }

    input {
      margin: 8px 0;
      padding: 0 16px;
      box-sizing: border-box;
      border-radius: 6px;
      border: 1px solid rgba(0, 0, 0, .10);
      background: #F9F9F9;
    }

    .phone {
      background: url(../../../assets/svg/phone.svg) no-repeat 6px center; /*设置小图标*/
      .svg-input();
    }

    .password {
      background: url(../../../assets/svg/password.svg) no-repeat 6px center; /*设置小图标*/
      .svg-input();
    }

    .logins-button {
      color: #fff;
      font-size: 16px;
      margin: 24px 0 16px 0;
      background: @jd__login-blue;
      box-shadow: 0 4px 8px 0 rgba(0, 145, 255, .32);
      border-radius: 4px;
    }
  }

  .jd__logins--footer {
    display: flex;
    align-items: center;

    span:first-child::after {
      content: "";
      display: inline-block;
      width: 2px;
      height: 12px;
      margin: 0 10px;
      background: rgba(0, 0, 0, .20);
    }
  }
}
</style>
