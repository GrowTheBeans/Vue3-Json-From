<template>
  <div class="detail">
    <router-link to="/about/detail/seller">商品</router-link>
    <router-link to="/about/detail/goods">评论</router-link>
    <router-link to="/about/detail/ratings">商家</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Detail",
};
</script>

<style scoped></style>
