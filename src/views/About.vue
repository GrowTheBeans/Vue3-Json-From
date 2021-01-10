<template>
  <div class="about">
    <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000">
      <van-tabbar-item icon="home-o">
        <router-link to="/about">首页</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="search">
        <router-link to="/about/detail">详情页面</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="friends-o">
        <router-link to="/about/edit">编辑页面</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="setting-o">
        <router-link to="/about/mine">个人中心</router-link>
      </van-tabbar-item>
    </van-tabbar>
    <router-view />
  </div>
</template>

<script type="text/ecmascript-6">
import {ref} from "vue";

export default {
  name: "About",
  setup() {
    const active = ref(0);
    return {
      active
    }
  }
}
</script>
