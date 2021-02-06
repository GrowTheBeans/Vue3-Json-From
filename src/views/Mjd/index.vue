<template>
  <div class="Mjd__container">
    <div class="tabbar">
      <ul class="tab">
        <li class="tab__item" v-for="(tab_item, index) in TabBarList" :key="index">
          <router-link :to="tab_item.link">
            <i class="iconfont" v-html="tab_item.icon"></i>
            <span>{{ tab_item.text }}</span>
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
  name: "index",
  setup() {
    const TabBarList = [
      {
        link: '/mjd',
        icon: '&#xe89f;',
        text: '首页'
      },
      {
        link: '/mjd/shopping',
        icon: '&#xe663;',
        text: '购物车'
      },
      {
        link: '/mjd/order',
        icon: '&#xe63b;',
        text: '订单'
      },
      {
        link: '/mjd/my',
        icon: '&#xeb74;',
        text: '我的'
      }
    ]
    return {
      TabBarList
    }
  },
})
</script>

<style lang="less">
@import "../../styles/var.less";

.Mjd__container {
  .tabbar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 49px;
    border-top: 1px solid #F1F1F1;
    font-size: 0.10em;
    background: #fff;
    z-index: 100;
    box-shadow: 0 0 10px 0 hsl(0deg 6% 58% / 60%);

    .tab {
      display: flex;

      &__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
        color: @jd__color-gray;

        .iconfont {
          margin: 4px 0;
          display: inline-block;
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
