<template>
  <div class="overlay_containers">
    <div class="overlay_warapper">
      <div class="overlay-main">
        <h1>{{ Seller.name }}</h1>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "Overlay",
  props: {
    Seller: {}
  },
  data() {
    return {}
  }
}
</script>

<style scoped lang="less">
.overlay_containers {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  background-color: rgba(7, 17, 27, .8);
  filter: blur(10);

  .overlay_warapper {
    margin-top: 64px;

    .overlay-main {
      h1 {
        line-height: 16px;
        text-align: center;
        font-size: 16px;
        font-weight: 700;
        color: rgb(255, 255, 255);
      }
    }
  }
}
</style>
