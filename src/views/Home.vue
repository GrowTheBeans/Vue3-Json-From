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
    <van-tabs
      background="#f7f8fa"
      title-active-color="#1989fa"
      title-inactive-color="#323233"
    >
      <van-tab title="填写问卷">
        <div class="home">
          <van-cell
            border
            icon="clock"
            is-link
            title="选择日期区间"
            :value="date"
            @click="show = true"
          />
          <van-calendar
            type="range"
            @confirm="onConfirm"
            v-model:show="show"
            color="#1989fa"
          />
          <div class="survry_containers">
            <survry />
          </div>
        </div>
      </van-tab>
      <van-tab title="个人填报">内容 2</van-tab>
    </van-tabs>
  </div>
</template>

<script type="text/ecmascript-6">
import {ref} from "vue";
import {Toast} from "vant";
import survry from "../components/survry"
import router from "../router/index";

export default {
  name: "Home",
  components: {
    survry
  },
  setup() {
    const date = ref("");
    const show = ref(false);

    const formatDate = date => `${date.getMonth() + 1}/${date.getDate()}`;
    const onConfirm = value => {
      const [start, end] = value;
      show.value = false;
      date.value = `${formatDate(start)} - ${formatDate(end)}`;
    };
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
      onClickLeft,
      onClickRight
    };
  }
};
</script>

<style scoped lang="less">
.survry_containers {
  width: 100%;
  height: calc(100vh - 134px);
  overflow: scroll;
  background: url("../assets/images/success-banner.png") no-repeat;
  background-size: 100% 100%;
}
</style>
