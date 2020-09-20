<template>
  <view class="news">
    <view class="news-item" v-for="(item, index) in newsList" :key="index">
      <image :src="item.img_url" mode=""></image>
      <view class="right">
        <view class="tit">{{ item.zhaiyao }}</view>
        <view class="info">
          <text>发表时间：{{ item.add_time }}</text>
          <text>浏览:{{ item.click }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import {mockGoods} from '../../mockData/data.js';
export default {
  data() {
    return {
      newsList: [],
    };
  },
  methods: {
    async getNews() {
      let result = this.$fetch.get('https://dog.ceo/api/breeds/image/random');
      this.newsList = mockGoods;
    },
  },
  onLoad() {
    this.getNews();
  },
};
</script>

<style lang="scss">
.news {
  .news-item {
    display: flex;
    padding: 10rpx 20rpx;
    border-bottom: 1rpx solid $shop-color;
    image {
      min-width: 200rpx;
      max-width: 200rpx;
      height: 150rpx;
    }
    .right {
      margin-left: 15rpx;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .tit {
        font-size: 30rpx;
      }
      .info {
        font-size: 24rpx;
				text:nth-child(2){
					margin-left: 30rpx;
					}
      }
    }
  }
}
</style>
