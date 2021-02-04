<template>
  <div id="Mjd__container">
    <div class="tabbar">
      <ul class="tab">
        <li class="tab__item">
          <router-link to="/mjd">
            <i class="iconfont">&#xe89f;</i>
            <span>首页</span>
          </router-link>
        </li>
        <li class="tab__item">
          <router-link to="/mjd/shopping">
            <i class="iconfont">&#xe663;</i>
            <span>购物车</span>
          </router-link>
        </li>
        <li class="tab__item">
          <router-link to="/mjd/order">
            <i class="iconfont">&#xe63b;</i>
            <span>订单</span>
          </router-link>
        </li>
        <li class="tab__item">
          <router-link to="/mjd/my">
            <i class="iconfont">&#xeb74;</i>
            <span>我的</span>
          </router-link>
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "index"
})
</script>

<style lang="less">
@import "../../styles/var.less";

#Mjd__container {
  width: 100vw;
  height: 100vh;
  background: @jd__bg-blue;
  font-family: -apple-system, Helvetica, sans-serif;

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
        justify-content: center;
        flex: 1;
        color: @jd__color-gray;

        .iconfont {
          margin: 4px 0;
          font-size: 22px;
        }

        span {
          display: block;
        }

        &.router-link-active, .router-link-exact-active {
          color: @jd__color-blue;
        }
      }
    }
  }
}
</style>
