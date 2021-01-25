<template>
  <div class="signup_container">
    <div class="signup_left"></div>
    <div class="signup_right">
      <h3>欢迎注册粽子系统</h3>
      <el-form label-position="top">
        <el-form-item label="名称">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="活动形式">
          <el-input></el-input>
        </el-form-item>
        <el-switch active-text="记住密码" />
        <el-form-item size="large">
          <el-button type="primary" size="small">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Signup'
})
</script>

<style lang="less" scoped>
.signup_container {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  .signup_left {
    width: 50%;
    height: 100vh;
    background: url("../components/image/groups@2x.png") no-repeat;
  }
  .signup_right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    background: url("../components/image/BG@2x.png") no-repeat bottom;
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
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 500px;
      height: 650px;
      .el-button {
        margin-top: 20px;
        width: 100%;
      }
    }
  }
}
</style>
