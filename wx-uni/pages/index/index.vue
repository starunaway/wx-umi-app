<template>
  <view class="home">
    <swiper :indicator-dots="true" :circular="true" :autoplay="true" :interval="3000" :duration="1000">
      <swiper-item v-for="item in swipers" :key="item.id">
        <view class="swiper-item">
          <image :src="item.img"></image>
        </view>
      </swiper-item>
    </swiper>

    <view class="nav">
      <view class="nav_item" v-for="item in navs" :key="item.text" @click="navItemClick(item)">
        <view :class="item.icon"> </view>
        <text>{{ item.text }}</text>
      </view>
    </view>

    <view class="hot_goods">
      <view class="tit"> 推荐商品 </view>

      <goodList :goods="goods"></goodList>
    </view>
  </view>
</template>

<script>
import goodList from '../../components/goods-list';
import {mockGoods} from '../../mockData/data.js';

export default {
  components: {
    goodList,
  },

  data() {
    return {
      swipers: [],
      goods: [],
      navs: [
        {
          icon: 'iconfont icon-ziyuan',
          text: '我的超市',
          path: '/pages/goods/goods',
        },
        {
          icon: 'iconfont icon-guanyuwomen',
          text: '联系我们',
          path: '/pages/contact/contact',
        },
        {
          icon: 'iconfont icon-tupian',
          text: '社区图片',
          path: '/pages/pics/pics',
        },
        {
          icon: 'iconfont icon-shipin',
          text: '学习视频',
          path: '/pages/videos/videos',
        },
      ],
    };
  },
  methods: {
    async getSwipers() {
      let result = this.$fetch.get('https://dog.ceo/api/breeds/image/random');
      if (((result || {}).data || {}).status !== 0) {
        uni.showToast({
          title: '获取数据失败',
        });
      } else {
        //   this.swipers = result.data.swipers
      }
      this.swipers = [
        {
          id: 1,
          img: 'https://images.dog.ceo/breeds/bulldog-boston/n02096585_942.jpg',
        },
        {
          id: 2,
          img: 'https://images.dog.ceo/breeds/terrier-american/n02093428_1378.jpg',
        },
        {
          id: 3,
          img: 'https://images.dog.ceo/breeds/mastiff-bull/n02108422_2678.jpg',
        },
      ];
    },

    async getGoods() {
      console.log(mockGoods);
      this.goods = mockGoods;
    },

    navItemClick(item) {
      console.log(item);
      uni.navigateTo({
        url: item.path,
      });
    },
  },
  onLoad() {
    this.getSwipers();

    this.getGoods();
  },
};
</script>
<style lang="scss">
.home {
  swiper {
    width: 750rpx;
    height: 380rpx;
  }
  .nav {
    display: flex;
    .nav_item {
      width: 25%;
      text-align: center;
      view {
        height: 120rpx;
        width: 120rpx;
        background-color: #b50e03;
        border-radius: 60rpx;
        margin: 10px auto;
        line-height: 120rpx;
        color: #fff;
        font-size: 50rpx;
      }
      .icon-tupian {
        font-size: 45rpx;
      }
      text {
        font-size: 30rpx;
      }
    }
  }

  .hot_goods {
    background-color: #eeeeee;
    overflow: hidden;
    margin: 10rpx 0 10rpx 0;
    padding-bottom: 10rpx;
    .tit {
      color: $shop-color;
      height: 50rpx;
      line-height: 50rpx;
      text-align: center;
      letter-spacing: 20px;
      background-color: #fff;
      margin: 6rpx 0;
    }
  }
}
</style>
