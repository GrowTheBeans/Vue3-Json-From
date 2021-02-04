<template>
  <div class="home">
    <div class="wrapper">
      <nav>2</nav>
    </div>
    <div class="tabbar">
      <ul class="tab">
        <li class="tab__item tab__item--active">
          <i class="iconfont">&#xe89f;</i>
          首页
        </li>
        <li class="tab__item">
          <i class="iconfont">&#xe663;</i>
          购物车
        </li>
        <li class="tab__item">
          <i class="iconfont">&#xe63b;</i>
          订单
        </li>
        <li class="tab__item">
          <i class="iconfont">&#xeb74;</i>
          我的
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {defineComponent} from "vue"

export default defineComponent({
  name: "Home"
})
</script>

<style scoped lang="less">
.wrapper {
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5em;
  right: 0;
  padding: 0 .18em;
  background: url("../../../assets/jd/jd_floor.jpg") no-repeat top center;
  background-size: 100% 30%;

  nav {
    background: #fff;
  }
}

.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 49px;
  border-top: 1px solid #F1F1F1;
  font-size: 0.10em;
  background: #fff;
  box-shadow: 0 0 10px 0 hsl(0deg 6% 58% / 60%);

  .tab {
    height: 100%;
    display: flex;

    &__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
      color: @jd__color-gray;

      .iconfont {
        margin: 4px 0;
        font-size: 22px;
      }

      &--active {
        color: @jd__color-blue;
      }
    }
  }

}
</style>
