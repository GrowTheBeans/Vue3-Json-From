<template>
  <div class="login_container">
    <h1>欢迎来到粽子窗口系统平台</h1>
    <div class="login_frame">
      <h3>登录系统</h3>
      <el-form label-width="60px" class="demo-ruleForm" label-position="left">
        <el-form-item label="账号" prop="pass">
          <el-input
            prefix-icon="el-icon-user"
            size="medium"
            type="text"
            placeholder="请输入账号"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="checkPass">
          <el-input
            prefix-icon="el-icon-lock"
            suffix-icon="el-icon-view"
            size="medium"
            type="password"
            placeholder="请输入密码"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item class="login_btn">
          <el-button type="primary" size="small">提交</el-button>
          <el-button size="small">重置</el-button>
        </el-form-item>
      </el-form>
      <span @click="onReturn">
        <i class="el-icon-right"></i>
      </span>
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
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: url('../components/image/img_bg@2x.png') no-repeat;
  background-size: cover; // 注意顺序问题
  h1 {
    margin: 100px auto;
    margin-top: 100px;
    letter-spacing: 8px;
    font-size: 32px;
    color: #fff;
    font-weight: 500;
    font-family: Helvetica;
  }
  .login_frame {
    position: fixed;
    right: 396px;
    bottom: 328px;
    width: 396px;
    height: 280px;
    background: #ffffff;
    border-radius: 4px;
    padding: 20px 32px;
    box-sizing: border-box;
    box-shadow: 0px, 5px, 29px, 0px, rgba(82, 82, 82, 0.36);
    h3 {
      display: flex;
      align-items: center;
      font-size: 20px;
      color: #333;
      &::before {
        content: '';
        display: inline-block;
        width: 4px;
        height: 20px;
        margin-right: 10px;
        border-radius: 2px;
        background-color: #409eff;
      }
    }
    .demo-ruleForm {
      margin-top: 40px;
      .login_btn {
        margin-top: 20px;
      }
    }
    span {
      position: absolute;
      top: 10px;
      right: 0px;
      cursor: pointer;
      width: 50px;
      height: 28px;
      background: #66b1ff;
      box-shadow: 0 2px 8px 0 rgb(80 100 142 / 50%);
      border-radius: 57px 0 0 57px;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      i {
        color: #fff;
        font-size: 14px;
        font-weight: 500;
      }
    }
  }
}
</style>
