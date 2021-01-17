<template>
  <div class="posts_containers">
    <h5>填报岗位信息</h5>
    <div class="posts_content">
      <van-form @submit="onPosts" label-width="5em">
        <van-cell-group>
          <van-field required v-model="posts.text" label="岗位/工种" />
          <van-field required is-link v-model="posts.text" label="招聘人数" />
          <van-field required is-link v-model="posts.text" label="薪资待遇" />
          <van-field required is-link v-model="posts.text" label="学历" />
          <van-field required name="radio" label="单选框" input-align="right">
            <template #input>
              <van-radio-group v-model="posts.checked" direction="horizontal">
                <van-radio name="1" checked-color="#1989fa">男</van-radio>
                <van-radio name="2" checked-color="#1989fa">女</van-radio>
                <van-radio name="3" checked-color="#1989fa">无</van-radio>
              </van-radio-group>
            </template>
          </van-field>
          <van-field
            v-model="posts.message"
            rows="2"
            autosize
            label="留言"
            type="textarea"
            maxlength="80"
            placeholder="请输入留言"
            show-word-limit
          />
          <span class="marking">
            <van-icon name="warning" />请如实填写问卷信息
          </span>
          <div style="padding: 16px">
            <van-button plain block round size="small" type="primary">
              添加岗位信息
            </van-button>
          </div>
        </van-cell-group>
      </van-form>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {reactive} from "vue";

export default {
  setup() {
    const posts = reactive({
      text: '',
      checked: '1',
      message: ''
    });
    const onPosts = () => {
    }

    return {posts, onPosts};
  },
};
</script>

<style scoped lang="less">
.posts_containers {
  width: 100%;
  height: 100vh;
  background-color: #fafafa;

  h5 {
    text-align: left;
    padding: 16px;
    color: rgba(69, 90, 100, 0.6);
  }

  .posts_content {
    margin: 0 16px 16px 16px;
    border-radius: 8px;
    background-color: #ffffff;
  }
  .marking {
    display: flex;
    align-items: center;
    padding: 4px 0;
    color: #faab0c;
    margin: 8px 16px;
    border-radius: 8px;
    background-color: #fff8f8;
    font-size: 12px;
    i {
      font-size: 16px;
      margin-right: 4px;
    }
  }
}
</style>
