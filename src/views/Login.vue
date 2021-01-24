<template>
  <div class="login_container">
    <h1>欢迎来到粽子窗口系统平台</h1>
  </div>
  <div class="login_frame">
    <h3>登录系统</h3>
    <el-form label-width="80px" class="demo-ruleForm" label-position="left">
      <el-form-item label="密码" prop="pass">
      <el-input type="password" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="checkPass">
      <el-input type="password" autocomplete="off"></el-input>
    </el-form-item>
  <el-form-item>
    <el-button type="primary" size="small">提交</el-button>
    <!-- <el-button size="small">重置</el-button> -->
  </el-form-item>
  </el-form>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Login'
})
</script>

<style lang="less" scoped>
.login_container {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: url("../components/image/img_bg@2x.png") no-repeat;
  background-size: cover; // 注意顺序问题
  h1 {
    margin: 100px auto;
    display: flex;
    justify-content: center;
    margin-top: 100px;
    letter-spacing: 8px;
    font-size: 32px;
    color: #fff;
    font-weight: 500;
    font-family: Helvetica;
  }
}
.login_frame {
  position: absolute;
  right: 396px;
  bottom: 178px;
  width: 496px;
  height: 482px;
  background: #ffffff;
  border-radius: 4px;
  padding: 50px 64px 64px;
  box-sizing: border-box;
  box-shadow: 0px, 5px, 29px, 0px, rgba(82, 82, 82, 0.36);
  h3 {
    text-align: left;
    font-size: 20px;
    color: #333;
    vertical-align: bottom;
    &::before {
      content: '';
      display: inline-block;
      width: 4px;
      height: 20px;
      margin-right: 10px;
      border-radius: 2px;
      vertical-align: bottom;
      background-color: #409EFF;
    }
  }
  .demo-ruleForm {
    margin-top: 55px;
    text-align: left;
    .el-button {
      margin-top: 20px;
      width: 100%;
    }
  }
}
</style>
