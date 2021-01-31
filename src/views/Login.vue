<template>
  <div class="login_container">
    <div class="login-login_wrap">
      <div class="login-login_box">
        <el-row type="flex" justify="center">
          <el-col :xs="22" :sm="20" :md="20" :lg="20" :xl="14">
            <div class="grid-content">
              <div class="key">
                <div class="bottom-img"></div>
                <div class="form-info mt14vh pb50" style="margin-left:5vw">
                  <el-row :gutter="20">
                    <el-col :xs="22" :sm="14" :md="10" :lg="8" :xl="7">
                      <div class="logo"><img src="../components/image/logo.png" alt="login" /></div>
                      <form onsubmit="return false">
                        <ul class="user-info mt60">
                          <li class="user-input">
                            <input class="effect" placeholder="请输入用户名" id="usernameIput" type="text" />
                            <label>用户名</label>
                          </li>
                          <li class="user-input">
                            <input class="effect" placeholder="请输入密码" id="passwordIput" type="password"/>
                            <label>密码</label>
                          </li>
                          <li class="keep-password">
                            <label>
                              测试账号: admin  &nbsp; &nbsp; 密码: 123456
                            </label>
                          </li>
                          <el-button class="buttonSize button-solid goHome" type="primary">
                            登&nbsp;&nbsp;录
                          </el-button>
                          <li class="keep-password signup">
                            <label>
                              没有账号？
                              <router-link to="/signup">马上注册</router-link>
                            </label>
                          </li>
                        </ul>
                      </form>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Login',
  setup() {
    const router = useRouter()
    const onReturn = () => {
      router.push('/')
    }
    return {
      onReturn
    }
  }
})
</script>

<style lang="less" scoped>
.login_container {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: url('../components/image/img_bg@2x.png') no-repeat;
  background-size: cover; // 注意顺序问题
  overflow: hidden;
  .login-login_box {
    position: absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    z-index: 1000;
    width: 100%;
    overflow: auto;
    .key {
      box-sizing: border-box;
       background: #fff url("../components/image/bg_img1.png") right top no-repeat;
      box-shadow: 0 0 60px 5px rgba(36, 132, 255, 0.41);
      border-radius: 10px;
      overflow: hidden;
      opacity: 0;
      -webkit-animation: fromBack 0.3s linear 0.1s forwards;
      -moz-animation: fromBack 0.3s linear 0.1s forwards;
      -ms-animation: fromBack 0.3s linear 0.1s forwards;
      animation: fromBack 0.3s linear 0.1s forwards;
      /* -webkit- */
      @-webkit-keyframes fromBack {
        0% {
          -webkit-transform: scale(0);
          opacity: 0;
        }
        100% {
          -webkit-transform: scale(1);
          opacity: 1;
          min-height: 69vh;
          max-height: 90vh;
        }
      }
      /* -moz- */
      @-moz-keyframes fromBack {
        0% {
          -moz-transform: scale(0);
          opacity: 0;
        }
        100% {
          -moz-transform: scale(1);
          opacity: 1;
          height: 69vh;
          min-height: 69vh;
          max-height: 90vh;
        }
      }
      @keyframes fromBack {
        0% {
          transform: scale(0);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
          min-height: 69vh;
          max-height: 90vh;
        }
      }
      .bottom-img {
        width: 170px;
        height: 170px;
        display: block;
        position: absolute;
        z-index: 2;
        bottom: 0;
         background: url("../components/image/login_2.png") left bottom no-repeat;
      }
      .form-info {
        .logo {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          margin: 50px auto;
          img {
            width: 100%;
            height: 100%;
            display: block;
            background-size: cover;
          }
        }
        .user-info {
          padding-left: 30px;
          .user-input {
            position: relative;
            border-bottom: 1px solid #dedeff;
            padding: 0 20px 0 30px;
            margin-top: 37px;
            height: 30px;
            background: #fff;
            .effect {
              border: none;
              outline: none;
            }
            .effect ~ label {
              position: relative;
              top: -45px;
              width: 100%;
              color: #0d6efd;
              transition: 0.3s;
              -webkit-transition: 0.1s;
              font-size: 12px;
              letter-spacing: 0.5px;
            }
            .effect:focus ~ label {
              position: relative;
              top: -45px;
              color: #3E76D4;
              transition: 0.3s;
              border-left: 3px solid #3E76D4;
              margin-left: -30px;
              padding-left: 30px;
            }
            input {
              position: relative;
              width: 100%;
              font-size: 13px;
            }
          }
          .keep-password {
            font-size: 14px;
            letter-spacing: 0;
            margin-top: 24px;
            label {
              .el-checkbox__input.is-checked + .el-checkbox__label {
                color: #919191;
              }
            }
          }
          .goHome {
            background: #0d6efd;
            box-shadow: 0 12px 51px -12px #3376E4;
            border-radius: 6px;
            width: 256px;
            height: 40px;
            display: block;
            margin: 24px auto;
            font-size: 18px;
            text-align: center;
            line-height: 17px;
          }
          .register {
            font-size: 13px;
            color: #919191;
            text-align: center;
            .a {
              color: #0d6efd;
              cursor: pointer;
            }
            .a:hover {
              text-decoration: underline;
            }
          }
          .signup {
            float: right;
          }
          .forget {
            font-size: 13px;
            color: #0d6efd;
            letter-spacing: 0;
            text-align: right;
            border: none;
            padding: 0;
            text-decoration: underline;
            background: none;
            margin-top: 2px;
          }
        }
      }
    }
  }
}
</style>
