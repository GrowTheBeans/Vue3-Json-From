<template>
  <ul class="nearby__container">
    <li v-for="(nearby, index) in nearbyList" :key="index">
      <img
        src="//img10.360buyimg.com/mobilecms/s372x372_jfs/t1/134155/17/8787/199125/5f4c6e07E6f9969fd/b9ad661cae84cb50.jpg"
        alt="">
      <div class="neardy__listing">
        <h5>{{ nearby.title }}</h5>
        <div class="neardy__listing-tags">
          <span v-for="(tags, key) in nearby.tags" :key="key">{{ tags }}</span>
        </div>
        <p>{{ nearby.desc }}</p>
      </div>
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
export default {
  name: "nearby",
  props: ['nearbyList']
}
</script>

<style scoped lang="less">
@import "../../../styles/mixin.less";
@import "../../../styles/var.less";
.nearby__container {
  margin-bottom: 70px;

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px 4px;
    margin: 14px 0;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px 0 #dadada;

    img {
      width: 56px;
      height: 56px;
    }

    .neardy__listing {
      margin-left: 16px;

      h5 {
        font-size: 16px;
      }

      .neardy__listing-tags {
        display: flex;
        margin: 8px 0;

        span {
          display: block;
          flex: 1 auto;
          font-size: 14px;
        }
      }

      p {
        .ellipsis();
        font-size: 14px;
        color: @jd__font-red;
      }
    }
  }
}
</style>
