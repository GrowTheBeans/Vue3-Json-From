<template>
  <div class="header_containers">
    <header>
      <img width="64" height="64" :src="seller.avatar" alt="logo"/>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{ seller.name }}</span>
        </div>
        <div class="description">
          {{ seller.description }}/{{ seller.deliveryTime }}分钟送达
        </div>
        <div class="support" v-if="seller.supports">
          <div class="text">{{ seller.supports[0].description }}</div>
        </div>
      </div>
      <div class="support-count" v-if="seller.supports" @click="showDetail">
        <span class="count">{{ seller.supports.length }}个</span>
        <van-icon size="10" name="arrow"/>
      </div>
    </header>
    <div class="bulletin-wrapper" @click="showDetail">
      <span class="bulletin-title"></span>
      <span class="bulletin-text ellipsis">{{ seller.bulletin }}</span>
      <van-icon size="12" name="arrow"/>
    </div>
    <div class="background">
      <img :src="seller.avatar"/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "OrderHeader",
  props: {
    seller: Object
  },
  data() {
    return {}
  },
  methods: {
    showDetail() {
      console.log(234);
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../../../styles/mixin.less";

.header_containers {
  position: relative;
  overflow: hidden;

  header {
    color: #fff;
    background: rgba(7, 17, 27, 0.5);
    padding: 24px 12px 18px 24px;

    img {
      border-radius: 2px;
      vertical-align: middle;
    }

    .content {
      margin-left: 16px;
      vertical-align: middle;
      display: inline-block;

      .title {
        margin: 2px 0 8px 0;

        .brand {
          display: inline-block;
          vertical-align: top;
          width: 30px;
          height: 18px;
          .bg-img('img/brand');
          background-size: 30px 18px;
          background-repeat: no-repeat;
        }

        .name {
          margin-left: 6px;
          font-size: 16px;
          line-height: 18px;
          font-weight: bold;
        }
      }

      .description {
        margin-bottom: 10px;
        line-height: 12px;
        font-size: 12px;
      }

      .support {
        .text {
          line-height: 12px;
          font-size: 10px;
        }
      }
    }

    .support-count {
      position: absolute;
      right: 12px;
      bottom: 40px;
      height: 24px;
      display: inline;
      padding: 0 8px;
      text-align: center;
      line-height: 24px;
      border-radius: 12px;
      background: rgba(0, 0, 0, 0.2);

      .count {
        vertical-align: middle;
        font-size: 10px;
      }

      i {
        margin-left: 2px;
        vertical-align: middle;
      }
    }
  }

  .bulletin-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 28px;
    line-height: 28px;
    padding: 0 12px 0 12px;
    color: #fff;
    background: rgba(7, 17, 27, 0.6);

    .bulletin-title {
      width: 28px;
      height: 12px;
      .bg-img('img/bulletin');
      background-size: 24px 12px;
      background-repeat: no-repeat;
    }

    .bulletin-text {
      margin: 0 4px;
      font-size: 10px;
    }
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -10;
    filter: blur(10px);

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
