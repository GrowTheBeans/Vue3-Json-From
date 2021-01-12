<template>
  <div class="survry">
    <h3 class="banner_title">企业用工需求调查问卷</h3>
    <van-form
      @submit="onSubmit"
      label-width="130px"
      error-message-align="right"
      input-align="right"
      class="survry_form_containers"
    >
      <van-field
        v-model="state.username"
        name="用户名"
        label="企业名称"
        is-link
        required
        placeholder="请输入企业名称"
        :rules="[{ required: true, message: '请填写企业名称' }]"
      />
      <van-field
        v-model="state.password"
        type="password"
        name="密码"
        label="统一社会信用代码"
        is-link
        required
        placeholder="请输入统一社会信用代码"
        :rules="[{ required: true, message: '请填写统一社会信用代码' }]"
      />
      <div style="margin: 16px;">
        <van-button plain round block type="default" hairline native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script type="text/ecmascript-6">
import { reactive } from 'vue';
export default {
  name: "HelloWorld",
  setup() {
    const state = reactive({
      username: '',
      password: '',
    });
    const onSubmit = (values) => {
      console.log('submit', values);
    }
    return {
      state,
      onSubmit,
    };
  }
}
</script>
<style scoped lang="less">
.survry {
  .banner_title {
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    color: aliceblue;
  }
  .survry_form_containers {
    padding: 0 10px 10px 10px;
    border-radius: 14px;
  }
}
</style>
