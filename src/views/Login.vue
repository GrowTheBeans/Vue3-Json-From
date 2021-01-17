<template>
  <div class="home">
    <div class="switch">
      <van-switch
        v-model="state.checked"
        size="10px"
        inactive-color="#0d1117"
      />
    </div>
    <h1 class="home_title">Vue3项目测试案例</h1>
    <div class="home_container">
      <div class="title">疫情期间企业用工需求调查问卷</div>
      <main>
        为落实市委、市政府关于支持企业共渡难关的政策意见，在确保做好防疫工作的前提下，保障各类企业用工复产，切实掌握我市企业用工需求动态变化情况。现对全市规模以上企业开展用工需求调查，帮助企业尽快复工复产、摆脱疫情影响。
      </main>
      <van-form @submit="onSubmit">
        <van-field
          v-model="state.username"
          name="userName"
          label="用户名"
          label-width="3em"
          required
          placeholder="请输入用户名..."
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="state.password"
          type="password"
          name="passWord"
          label="密码"
          label-width="3em"
          required
          placeholder="请输入密码..."
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <span class="marking">
          <van-icon name="warning" />请如实填写问卷信息
        </span>
        <div style="margin-top: 16px">
          <van-button round block type="primary" native-type="submit">
            填写调查问卷
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {reactive} from "vue"
import {Notify} from 'vant';
import router from '../router';

export default {
  name: "Login",
  setup() {
    const state = reactive({
      username: "",
      password: "",
      checked: true
    })
    const onSubmit = (values) => {
      if ((values.userName === "123") && (values.passWord === "123")) {
        router.push('/')
      } else {
        Notify({type: 'warning', message: "输入用户名和密码错误!!!"})
      }
      return null
    }
    return {
      state,
      onSubmit
    }
  }
}
</script>

<style scoped lang="less">
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: url("../assets/images/background.png") no-repeat;
  background-size: 100% 100%;
  .switch {
    position: absolute;
    right: 8px;
    top: 10px;
  }

  .home_title {
    color: #3a3a3a;
    font-size: 32px;
    font-weight: bold;
    text-shadow: 1px 1px 4px #fff;
    margin-bottom: 80px;
  }

  .home_container {
    width: 90%;
    height: 450px;
    border-radius: 10px;
    padding: 22px 20px;
    box-sizing: border-box;
    background-color: #fff;

    .title {
      text-align: center;
      line-height: 32px;
      font-weight: 600;
      font-size: 20px;
      color: #0072ff;
    }

    main {
      margin: 18px 0px;
      line-height: 20px;
      font-size: 14px;
      color: #434343;
      text-indent: 1em;
      letter-spacing: 1.5px;
    }

    .marking {
      display: flex;
      align-items: center;
      color: #faab0c;
      margin-top: 10px;
      font-size: 12px;
      i {
        font-size: 16px;
        margin-right: 4px;
      }
    }
  }
}
</style>
