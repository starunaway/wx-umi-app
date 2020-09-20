<template>
  <view class="goods_detail">
    <swiper :indicator-dots="true">
      <swiper-item v-for="item in swipers" :key="item.id">
        <image :src="item.url"></image>
      </swiper-item>
    </swiper>

    <view class="box1">
      <view class="price">
        <text>{{ item.sell_price }}</text>
        <text>{{ item.market_price }}</text>
      </view>
      <view class="goods-name">{{ item.title }}</view>
    </view>
    <view class="line"></view>

    <view class="box2">
      <view>{{ item.id }}</view>
      <view>{{ item.stock_quantity }}</view>
    </view>

    <view class="line"></view>

    <view class="box3">
      <view class="tit">详情介绍</view>
      <rich-text class="content" :nodes="item.zhaiyao"></rich-text>
    </view>

    <view class="goods-nav">
      <uni-goods-nav
        :fill="true"
        :options="options"
        :buttonGroup="buttonGroup"
        @click="leftClick"
        @buttonClick="rightClick"
      />
    </view>
  </view>
</template>

<script>
import {mockGoods} from '../../mockData/data.js';
import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue';

export default {
  components: {
    uniGoodsNav,
  },
  data() {
    return {
      swipers: [],
      item: {},
      options: [
        {
          icon: 'headphones',
          text: '客服',
        },
        {
          icon: 'shop',
          text: '店铺',
          info: 2,
          infoBackgroundColor: '#007aff',
          infoColor: 'red',
        },
        {
          icon: 'cart',
          text: '购物车',
          info: 2,
        },
      ],
      buttonGroup: [
        {
          text: '加入购物车',
          backgroundColor: '#ff0000',
          color: '#fff',
        },
        {
          text: '立即购买',
          backgroundColor: '#ffa200',
          color: '#fff',
        },
      ],
    };
  },
  methods: {
    getSwipers(id) {
      this.swipers = mockGoods.map((d) => {
        return {
          id: d.id,
          url: d.img_url,
        };
      });
    },
    getGoods(id) {
      this.item = mockGoods.filter((m) => `${m.id}` === id)[0];
    },
    leftClick() {},
    rightClick() {},
  },
  onLoad(options) {
    this.getSwipers(options.id);
    this.getGoods(options.id);
  },
};
</script>

<style lang="scss">
$nav-height: 150px;
.goods_detail {
  height: calc(100% - #{$nav-height});
  swiper {
    height: 700rpx;
    image {
      height: 100%;
      width: 100%;
    }
  }
  .box1 {
    padding: 10rpx;
    .price {
      font-size: 35rpx;
      line-height: 80rpx;
      color: $shop-color;
      text:nth-child(2) {
        color: #ccc;
        font-size: 28rpx;
        text-decoration: line-through;
        margin-left: 20rpx;
      }
    }
    .goods-name {
      font-size: 32rpx;
      line-height: 60rpx;
    }
  }

  .line {
    height: 5rpx;
    width: 750rpx;
    background-color: #eee;
  }

  .box2 {
    padding: 0 10rpx;
    font-size: 32rpx;
    line-height: 70rpx;
  }

  .box3 {
    .tit {
      padding: 10rpx;
      font-size: 32rpx;
      line-height: 70rpx;
      border-bottom: 1px solid #eee;
    }
    .content {
      padding: 10rpx;
      color: #333;
      font-size: 28rpx;
    }
  }
}

.goods-nav {
  position: fixed;
  bottom: 0;
  width: 100%;
}

page {
  height: 100%;
}
</style>
