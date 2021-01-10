<template>
  <div class="home">
    <van-nav-bar
      title="Home标题"
      left-text="登录"
      right-text="详情"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-swipe
      class="swiper-carousel"
      lazy-render
      :height="280"
      :autoplay="3000"
    >
      <van-swipe-item v-for="(images, index) in imagesList" :key="index">
        <img class="swipe-img" :src="images" />
      </van-swipe-item>
    </van-swipe>
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png" />
      <HelloWorld msg="Welcome to Your Vue.js App" />
      <van-button size="small" color="#7232dd">单色按钮</van-button>
      <van-button size="small" plain type="primary">朴素按钮</van-button>
      <van-button size="small" loading type="primary" loading-text="加载中..." />
      <van-button size="mini" color="linear-gradient(to right, #ff6034, #ee0a24)">
        渐变色按钮
      </van-button>
      <van-icon name="cart-o" color="#1989fa" size="30" />
      <van-icon name="fire-o" color="#ee0a24" size="20" />
      <van-cell-group>
        <van-cell title="单元格" value="内容" />
        <van-cell title="单元格" value="内容" label="描述信息" />
      </van-cell-group>
      <van-cell border title="选择单个日期" :value="date" @click="show = true" />
      <van-calendar v-model:show="show" @confirm="onConfirm" />
      <van-image round width="100" height="100" :src="Img" />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// @ is an alias to /src
import {ref} from "vue";
import {Toast} from 'vant';
import router from "../router/index";
import HelloWorld from "@/components/HelloWorld.vue";

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
    const Img = "https://img.yzcdn.cn/vant/cat.jpeg";
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
      Img,
      imagesList,
      onClickLeft,
      onClickRight
    };
  },
  components: {
    HelloWorld
  }
};
</script>

<style scoped lang="less">
.home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.swipe-img {
  width: 100%;
  height: 300px;
}
</style>
