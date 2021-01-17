<template>
  <div>
    <router-link to="/about/home/recommend">推荐</router-link>
    <router-link to="/about/home/singer">歌手</router-link>
    <router-link to="/about/home/ranking">排行</router-link>
    <router-view />
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "Home"
}
</script>

<style scoped></style>
