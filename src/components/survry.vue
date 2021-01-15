<template>
  <div class="survry">
    <h3 class="banner_title">企业用工需求调查问卷</h3>
    <van-form
      @submit="onSubmit"
      label-width="140px"
      error-message-align="right"
      input-align="right"
      class="survry_form_containers"
    >
      <van-field
        v-model="state.QuestionInfo.CorpName"
        name="CorpName"
        label="企业名称"
        required
        placeholder="请输入企业名称"
        :rules="[{ required: true, message: '请填写企业名称' }]"
      />
      <van-field
        v-model="state.QuestionInfo.CorpCreditCode"
        type="number"
        name="CorpCreditCode"
        label="统一社会信用代码"
        required
        placeholder="请输入统一社会信用代码"
        :rules="[{ required: true, message: '请填写统一社会信用代码' }]"
      />
      <van-field
        v-model="state.QuestionInfo.CorpCreditCode"
        type="password"
        label="人力资源部联系人"
        required
        placeholder="请输入人力资源部联系人"
        :rules="[{ required: true, message: '请填写人力资源部联系人' }]"
      />
      <van-field
        v-model="state.QuestionInfo.CorpCreditCode"
        name="密码"
        type="tel"
        label="人力资源部联系人手机"
        required
        placeholder="请输入人力资源部联系人手机"
        :rules="[{ required: true, message: '请填写人力资源部联系人手机' }]"
      />
      <van-field
        v-model="state.QuestionInfo.CorpCreditCode"
        type="password"
        name="密码"
        label="对外招聘电话"
        required
        placeholder="请输入对外招聘电话"
        :rules="[{ required: true, message: '请填写对外招聘电话' }]"
      />
      <van-field
        v-model="state.QuestionInfo.CorpCreditCode"
        type="password"
        name="密码"
        label="对外招聘邮箱"
        required
        placeholder="请输入对外招聘邮箱"
        :rules="[{ required: true, message: '请填写对外招聘邮箱' }]"
      />
      <van-field
        v-model="state.QuestionInfo.CorpCreditCode"
        type="password"
        name="密码"
        label="企业所属镇(区)"
        is-link
        required
        placeholder="请输入企业所属镇(区)"
        :rules="[{ required: true, message: '请填写企业所属镇(区)' }]"
      />
      <van-field
        v-model="state.QuestionInfo.CorpCreditCode"
        type="password"
        name="密码"
        label="企业所属行业"
        is-link
        required
        placeholder="请输入企业所属行业"
        :rules="[{ required: true, message: '请填写企业所属行业' }]"
      />
      <van-field
        v-model="state.QuestionInfo.CorpCreditCode"
        type="password"
        name="密码"
        label="企业登记注册类型"
        is-link
        required
        placeholder="请输入企业登记注册类型"
        :rules="[{ required: true, message: '请填写企业登记注册类型' }]"
      />
      <van-field
        v-model="state.QuestionInfo.CorpCreditCode"
        type="password"
        name="密码"
        label="企业目前员工人数"
        is-link
        required
        placeholder="请输入企业目前员工人数"
        :rules="[{ required: true, message: '请填写企业目前员工人数' }]"
      />
      <van-field
        v-model="state.QuestionInfo.CorpCreditCode"
        type="password"
        name="密码"
        label="其中外地员工人数"
        required
        placeholder="请输入其中外地员工人数"
        :rules="[{ required: true, message: '请填写其中外地员工人数' }]"
      />
      <van-field
        v-model="state.QuestionInfo.CorpCreditCode"
        type="password"
        name="密码"
        label="其中女性员工人数"
        required
        placeholder="请输入其中女性员工人数"
        :rules="[{ required: true, message: '请填写其中女性员工人数' }]"
      />
      <van-field
        v-model="state.QuestionInfo.CorpCreditCode"
        type="password"
        name="密码"
        label="企业何时复工"
        is-link
        required
        placeholder="请输入企业何时复工时间"
        :rules="[{ required: true, message: '请填写企业何时复工时间' }]"
      />
      <van-field name="radio" required label="现阶段是否缺工">
        <template #input>
          <van-radio-group v-model="checked" direction="horizontal">
            <van-radio name="yes">是</van-radio>
            <van-radio name="no">否</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <div style="margin: 16px;">
        <van-button plain round block type="primary" native-type="submit">
          <text style="font-size: 16px">提&nbsp;&nbsp;&nbsp;交</text>
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script type="text/ecmascript-6">
import { reactive, ref } from 'vue';
export default {
  name: "HelloWorld",
  setup() {
    const state = reactive({
      QuestionInfo: {
        CorpName: "",
        CorpCreditCode: ""
      }
    });
    const checked = ref('yes');
    const onSubmit = (values) => {
      console.log('submit', values);
    }
    return {
      state,
      checked,
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
