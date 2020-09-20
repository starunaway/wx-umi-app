<template>
  <view class="news-item" @click="newsItemClick">
    <image :src="item.img_url" mode=""></image>
    <view class="right">
      <view class="tit">{{ item.title }}</view>
      <view class="info">
        <text>发表时间：{{ item.add_time | formatDate }}</text>
        <text>浏览:{{ item.click }}</text>
      </view>
    </view>
  </view>
</template>

<script>
import moment from 'moment';
export default {
  props: ['item'],
  filters: {
    formatDate(date) {
      return moment(date).format('HH:mm:ss');
    },
  },
  methods: {
    newsItemClick() {
      this.$emit('newsItemClick', this.item);
    },
  },
};
</script>

<style lang="scss">
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
      text:nth-child(2) {
        margin-left: 30rpx;
      }
    }
  }
}
</style>
