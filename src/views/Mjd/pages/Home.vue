<template>
  <div class="home_content">
    <div class="slider__bg"></div>
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
        <li v-for="(icon, index) in iconList" :key="index">
          <img
            :src="icon.img"
            alt=""/>
          <span>{{icon.desc}}</span>
        </li>
      </ul>
      <div class="nearby">
        <h3>附近店铺</h3>
        <ul class="nearby__container">
          <li v-for="(nearby, index) in nearbyList" :key="index">
            <img
              src="//img10.360buyimg.com/mobilecms/s372x372_jfs/t1/134155/17/8787/199125/5f4c6e07E6f9969fd/b9ad661cae84cb50.jpg"
              alt="">
            <div class="neardy__listing">
              <h5>{{nearby.title}}</h5>
              <div class="neardy__listing-tags">
                <span v-for="(tags, key) in nearby.tags" :key="key">{{tags}}</span>
              </div>
              <p>{{nearby.desc}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {defineComponent} from "vue"

export default defineComponent({
  name: "Home",
  setup() {
    const nearbyList = [
      {
        title: '沃尔玛',
        tags: ['月售1万+', '起送¥0', '基础运费¥5'],
        desc: 'VIP尊享满89元减4元运费券（每月3张）'
      },
      {
        title: '沃尔玛',
        tags: ['月售1万+', '起送¥0', '基础运费¥5'],
        desc: 'VIP尊享满89元减4元运费券（每月3张）'
      },
      {
        title: '沃尔玛',
        tags: ['月售1万+', '起送¥0', '基础运费¥5'],
        desc: 'VIP尊享满89元减4元运费券（每月3张）'
      },
      {
        title: '沃尔玛',
        tags: ['月售1万+', '起送¥0', '基础运费¥5'],
        desc: 'VIP尊享满89元减4元运费券（每月3张）'
      },
      {
        title: '沃尔玛',
        tags: ['月售1万+', '起送¥0', '基础运费¥5'],
        desc: 'VIP尊享满89元减4元运费券（每月3张）'
      },
    ]
    const iconList = [
      {
        img: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/125678/35/5947/4868/5efbf28cEbf04a25a/e2bcc411170524f0.png',
        desc: '京东超市'
      },
      {
        img: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/125678/35/5947/4868/5efbf28cEbf04a25a/e2bcc411170524f0.png',
        desc: '京东超市'
      },
      {
        img: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/125678/35/5947/4868/5efbf28cEbf04a25a/e2bcc411170524f0.png',
        desc: '京东超市'
      },
      {
        img: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/125678/35/5947/4868/5efbf28cEbf04a25a/e2bcc411170524f0.png',
        desc: '京东超市'
      }
    ]
    return {
      nearbyList,
      iconList
    }
  }
})
</script>

<style scoped lang="less">
@import "../../../styles/mixin.less";
@import "../../../styles/var.less";

.home_content {
}

.slider__bg {
  background-image: linear-gradient(0deg, #f1503b, #c82519 50%);
  position: absolute;
  top: 0;
  left: 0;
  height: 180px;
  width: 100%;
  border-bottom-left-radius: 100%;
  border-bottom-right-radius: 100%;
}

.home {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  padding: 0 18px;
  font-size: .16em;
  width: 100%;
  box-sizing: border-box;

  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 40px;
    line-height: 40px;
    color: #fff;

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
      .svg-input();
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
        margin: 10px 0;
        width: 40px;
      }

      span {
        margin-top: 6px;
        font-size: 12px;
        color: #666666;
      }
    }
  }

  .nearby {
    h3 {
      margin: 20px 0;
      font-size: 16px;
      font-weight: 600;
      color: @jd__color-gray;
      vertical-align: middle;
      &::before {
        content: '';
        vertical-align: top;
        display: inline-block;
        width: 4px;
        height: 16px;
        margin-right: 8px;
        background: @jd__font-red;
      }
    }

    &__container {
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
  }
}
</style>
