<template>
  <div class="detail">
    <!--    <div class="detail_head">-->
    <!--      <img src="" alt="logo"/>-->
    <!--    </div>-->
    <div class="detail_container">
      <div class="detail_item">
        <router-link to="/about/detail/seller">商品</router-link>
      </div>
      <div class="detail_item">
        <router-link to="/about/detail/goods">评论</router-link>
      </div>
      <div class="detail_item">
        <router-link to="/about/detail/ratings">商家</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "Detail",
};
</script>

<style scoped lang="less">
.detail_container {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40px;
  line-height: 40px;

  .detail_item {
    text-align: center;
    flex: 1;

    a {
      width: 100%;
      font-size: 14px;
      color: rgb(77, 85, 93);
      display: inline-block;

      &.router-link-active,
      .router-link-exact-active {
        color: rgb(240, 20, 20);
      }
    }
  }
}
</style>
