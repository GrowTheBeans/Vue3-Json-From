<template>
  <div class="study_container">
    <van-nav-bar
      title="书架"
      right-text="切换语言"
    />
    <h2 class="study_title">欢迎一起读书</h2>
    <div class="study_message">
      <div class="study_content">
        <!--      <img src="" alt="">-->
        <h3>学习《实战读书App》媲美原生APP书城</h3>
        <van-divider
          :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
        >
          粽子
        </van-divider>
        <div class="icon_study_click">
          <van-button plain hairline type="primary">去学习</van-button>
          <van-button plain hairline type="success">去找书</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "Study",
  data() {
    return {};
  },
};
</script>

<style scoped lang="less">
@import "../../styles/mixin.less";

.study_container {
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  vertical-align: top;
  width: 100%;
  height: 154px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .bg-img("../../assets/images/book_banner");

  ::v-deep(.van-nav-bar) {
    background-color: transparent;
  }

  ::v-deep(.van-nav-bar__title) {
    font-weight: bold;
    font-size: 18px;
  }

  ::v-deep(.van-nav-bar__text) {
    color: #fff;
  }

  .van-hairline--bottom::after {
    border: none;
  }

  .study_title {
    color: #fff;
    font-weight: 500;
    font-family: "Times New Roman", Times, serif;
    font-size: 26px;
    margin-left: 28px;
    margin-top: 30px;
  }

  .study_message {
    position: relative;
    top: 40px;
    width: 100%;

    .study_content {
      margin: 0 10px;
      height: calc(100vh - 280px);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      box-shadow: 0 8px 16px 0 rgb(28 31 33 / 10%);

      h3 {
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 50px;
        font-family: "Times New Roman", Times, serif;
      }

      .icon_study_click {
        width: 100%;
        margin-top: 50px;
        display: flex;
        justify-content: space-around;
      }
    }
  }
}
</style>
