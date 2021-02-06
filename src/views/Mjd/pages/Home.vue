<template>
  <div class="home">
    <nav>
      <i class="iconfont">&#xe608;</i>
      <span>北京理工大学国防科技园2号楼10层</span>
      <i class="iconfont">&#xe675;</i>
    </nav>
    <div class="search">
      <input class="search__icon" type="text" placeholder="山姆会员商店优惠商品"/>
    </div>
    <div class="banner">
      <img
        src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/158656/22/6096/150613/601a95acE8cdca1d2/7245596bfe5a11b7.jpg!q70.jpg.dpg"
        alt="banner"/>
    </div>
    <ul class="slideshow__container">
      <li>
        <img
          src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/125678/35/5947/4868/5efbf28cEbf04a25a/e2bcc411170524f0.png"
          alt=""/>
        <span>京东超市</span>
      </li>
      <li>
        <img
          src="//m.360buyimg.com/mobilecms/s120x120_jfs/t1/113589/24/11332/4897/5efbf3feE705d87db/e5c12d5e943266b9.png"
          alt=""/>
        <span>京东超市</span>
      </li>
      <li>
        <img
          src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/125678/35/5947/4868/5efbf28cEbf04a25a/e2bcc411170524f0.png"
          alt=""/>
        <span>京东超市</span>
      </li>
      <li>
        <img
          src="//m.360buyimg.com/mobilecms/s120x120_jfs/t1/140012/8/1804/3641/5efbf318E38bd5dad/0db99d859ab16ce9.png"
          alt=""/>
        <span>京东超市</span>
      </li>
      <li>
        <img
          src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/125678/35/5947/4868/5efbf28cEbf04a25a/e2bcc411170524f0.png"
          alt=""/>
        <span>京东超市</span>
      </li>
      <li>
        <img
          src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/125678/35/5947/4868/5efbf28cEbf04a25a/e2bcc411170524f0.png"
          alt=""/>
        <span>京东超市</span>
      </li>
      <li>
        <img
          src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/125678/35/5947/4868/5efbf28cEbf04a25a/e2bcc411170524f0.png"
          alt=""/>
        <span>京东超市</span>
      </li>
      <li>
        <img
          src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/125678/35/5947/4868/5efbf28cEbf04a25a/e2bcc411170524f0.png"
          alt=""/>
        <span>京东超市</span>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import {defineComponent} from "vue"

export default defineComponent({
  name: "Home"
})
</script>

<style scoped lang="less">
@import "../../../styles/mixin.less";

.home {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  padding: 0 18px;
  font-size: .16em;
  background: #fff;
  width: 100%;
  height: calc(100% - 50px);
  box-sizing: border-box;
  //background: url("../../../assets/jd/jd_floor.jpg") no-repeat top center;
  //background-size: 100% 30%;
  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 40px;
    line-height: 40px;

    i {
      flex: 1;
      font-size: 22px;

      &:last-child {
        text-align: right;
      }
    }

    span {
      .ellipsis();
      flex: auto;
    }
  }

  .search {
    background: #F5F5F5;
    border-radius: 16px;

    input {
      padding: 0 16px;
      box-sizing: border-box;
      width: 100%;
      height: 32px;
      font-size: 14px;

    }

    .search__icon {
      background: url("../../../assets/svg/search.svg") no-repeat 6px center;
      background-size: 20px 20px;
      padding: 8px 0 8px 30px;
    }
  }

  .banner {
    margin: 10px 0;

    img {
      width: 100%;
      height: 100%;
      border-radius: 8px;
    }
  }

  .slideshow__container {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 25%;
      img {
        margin-top: 10px;
        width: 40px;
      }
      span {
        margin-top: 6px;
        font-size: 12px;
        color: #666666;
      }
    }
  }
}
</style>
