<template>
  <div class="success">
    <header class="success_img">
      <van-nav-bar
        title="在线填报"
        left-arrow
      >
        <template #right>
          <van-icon name="setting-o" size="20"/>
        </template>
      </van-nav-bar>
    </header>
    <div class="success_container">
      <img src="./img/success@2x.png" alt="填报成功"/>
      <p class="title">恭喜您！填报成功!</p>
      <div class="submit_content">
        <button class="btn_continue">继续填报</button>
        <button class="btn_individual">个人填报</button>
      </div>
      <div class="success_cue">
        <span class="title"><van-icon name="warning-o" color="#FFD700" size="20px"/>温馨提示</span>
        <p>1、请于2020/11/23 09:30-10:00到新北区薛家镇为民服务中心大厅（黄河西路268号）取号机上刷身份证取号办理。 2、大厅采用有声叫号，届时请留意大厅语音呼叫及排号单信息。
          3、预约时间段内取号可以优先办理，提前取号将无法享受优先办理。预约人在预约截止时间尚未取号的，系统将自动取消相关预约。</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "success",
}
</script>

<style scoped lang="less">
.success {
  background-color: #f1f3f7;
  position: relative;

  .success_img {
    width: 100%;
    height: 138px;
    background: url("./img/booking_banner@2x.png") no-repeat;
    background-size: 100% 100%;

    .van-nav-bar {
      background-color: transparent;

      /deep/ .van-icon {
        color: #ffffff;
        font-size: 20px;
      }

      /deep/ .van-nav-bar__title {
        color: #ffffff;
      }
    }

    .van-hairline--bottom::after {
      border: none;
    }
  }

  .success_container {
    position: absolute;
    top: 77px;
    height: 576px;
    width: 100%;
    border-radius: 6px;
    background-color: #fff;
    text-align: center;
    box-shadow: 0 3px 12px 0 rgba(68, 150, 255, 0.15);

    img {
      width: 278px;
      height: 121px;
      margin: 14px 35px;
    }

    .title {
      color: #4e4e4e;
      line-height: 22px;
      font-weight: 700;
    }

    .submit_content {
      display: flex;
      justify-content: center;

      button {
        width: 134px;
        height: 39px;
        margin-top: 38px;
        font-size: 14px;
        border-radius: 4px;
      }

      .btn_continue {
        color: #fff;
        font-weight: 500;
        background: linear-gradient(90deg, #04c1fd, #118cff);
        box-shadow: 0 2px 12px 0 rgba(14, 152, 254, 0.37);
      }

      .btn_individual {
        color: #0e99ff;
        border: 1px solid #0e99ff;
        background-color: #fff;
        margin-left: 22px;
        box-shadow: 0 2px 12px 0 rgba(14, 152, 254, 0.37);
      }
    }

    .success_cue {
      margin: 40px auto;
      padding: 15px 18px;
      width: 323px;
      height: 223px;
      box-sizing: content-box;
      background: #fffbe6;
      border: 1px solid #ffe58f;
      border-radius: 4px;

      .title {
        display: flex;
        align-items: center;
        font-size: 16px;
        font-weight: 700;
        text-align: left;
        color: rgba(0, 0, 0, 0.85);
        i {
          margin-right: 4px;
        }
      }

      p {
        margin-top: 10px;
        line-height: 26px;
      }
    }
  }
}
</style>
