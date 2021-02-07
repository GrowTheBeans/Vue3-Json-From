<template>
  <div class="overlay__containers">
    <div class="overlay__warapper">
      <div class="overlay-main">
        <h1>{{ Seller.name }}</h1>
      </div>
      <span class="overlay-rate">新鲜</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "Overlay",
  props: {
    Seller: {
      type: Object
    },
  },
  data(props) {
    // return {
    // };
    console.log(props)
  },
};
</script>

<style scoped lang="less">
.overlay__containers {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  background-color: rgba(7, 17, 27, 0.8);
  filter: blur(10);

  .overlay__warapper {
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
