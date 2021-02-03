<template>
  <div class="signup_container">
    <div class="signup_left"></div>
    <div class="signup_right">
      <h3>欢迎注册粽子系统</h3>
      <el-form label-position="top">
        <el-form-item label="邮箱地址">
          <el-input prefix-icon="el-icon-message" size="medium" placeholder="请输入邮箱地址"></el-input>
        </el-form-item>
        <el-form-item label="昵称">
          <el-input prefix-icon="el-icon-user" size="medium" placeholder="请输入昵称"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            prefix-icon="el-icon-lock"
            size="medium"
            show-password
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item label="重复密码">
          <el-input
            prefix-icon="el-icon-lock"
            show-password
            size="medium"
            placeholder="请再次输入密码"
          ></el-input>
        </el-form-item>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-switch v-model="SwitchValue" active-text="记住密码" />
          </el-col>
          <el-col :span="12">
            <el-link type="primary" :underline="false" @click="onSigLogin">返回登录</el-link>
          </el-col>
        </el-row>
        <el-form-item size="large">
          <el-button type="primary" size="medium">注册新的用户</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'Signup',
  setup() {
    const router = useRouter()
    const SwitchValue = ref(true)
    const onSigLogin = () => {
      router.push('/login')
    }
    return {
      SwitchValue,
      onSigLogin
    }
  }
})
</script>

<style lang="less" scoped>
.signup_container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  .signup_left {
    width: 50%;
    height: 100%;
    background: url('../components/image/groups@2x.png') no-repeat;
  }
  .signup_right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    height: 100%;
    background: url('../components/image/BG@2x.png') no-repeat bottom;
    background-size: 100%;
    h3 {
      text-align: center;
      font-size: 30px;
      color: #056fff;
      line-height: 56px;
      font-family: PingFangSC, PingFangSC-Medium;
      font-weight: 500;
    }
    .el-form {
      margin: 50px auto;
      width: 500px;
      height: 650px;
      .el-button {
        margin-top: 20px;
        width: 100%;
      }
    }
    :deep(.el-link) {
      float: right;
    }
  }
}
</style>
