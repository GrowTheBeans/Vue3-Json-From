<template>
  <div class="home">
    <van-nav-bar
      title="填写问卷调查"
      left-text="登录"
      right-text="详情"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-swipe
      class="swiper-carousel"
      lazy-render
      loop
      touchable
      :height="260"
      :autoplay="3000"
    >
      <van-swipe-item v-for="(images, index) in imagesList" :key="index">
        <img class="swipe-img" :src="images" />
      </van-swipe-item>
    </van-swipe>
    <div class="home">
      <van-cell
        border
        title="选择单个日期"
        :value="date"
        @click="show = true"
      />
      <van-calendar v-model:show="show" @confirm="onConfirm" />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {ref} from "vue";
import {Toast} from 'vant';
import router from "../router/index";

export default {
  name: "Home",
  setup() {
    const date = ref("vue");
    const show = ref(false);

    const formatDate = date => `${date.getMonth() + 1}/${date.getDate()}`;
    const onConfirm = value => {
      show.value = false;
      date.value = formatDate(value);
    };
    const imagesList = [
      "https://img.yzcdn.cn/vant/apple-1.jpg",
      "https://img.yzcdn.cn/vant/apple-2.jpg"
    ];
    const onClickLeft = () => {
      router.push("/login");
    };
    const onClickRight = () => {
      router.push("/about")
      Toast.loading({
        message: "请求加载...",
        forbidClick: true
      });
    };
    return {
      date,
      show,
      onConfirm,
      imagesList,
      onClickLeft,
      onClickRight
    };
  }
};
</script>

<style scoped lang="less">
.home {
}

.swipe-img {
  width: 100%;
  height: 260px;
}
</style>
