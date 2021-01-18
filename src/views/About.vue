<template>
  <div class="about">
    <van-tabbar route active-color="#ee0a24" inactive-color="#000">
      <van-tabbar-item replace to="/about/home" icon="music-o">音乐</van-tabbar-item>
      <van-tabbar-item replace to="/about/detail" icon="shop-o">点餐</van-tabbar-item>
      <van-tabbar-item replace to="/about/edit" icon="search">编辑页面</van-tabbar-item>
      <van-tabbar-item replace to="/about/mine" icon="friends-o">个人中心</van-tabbar-item>
    </van-tabbar>
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "About"
}
</script>
