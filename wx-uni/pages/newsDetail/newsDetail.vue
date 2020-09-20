<template>
  <view class="news-detail">
    <text class="title">{{ item.title }}</text>
    <view class="info">
      <text>发表时间:{{ item.add_time | formatDate }}</text>
      <text> 浏览:{{ item.click }}</text>
    </view>
    <rich-text class="content" :nodes=" item.zhaiyao"></rich-text >
  </view>
</template>

<script>
import {mockGoods} from '../../mockData/data.js';
import moment from 'moment';

export default {
  data() {
    return {
      item: {},
    };
  },
  methods: {
    getNewsDetail(options) {
      this.item = mockGoods.filter((m) => `${m.id}` === options.id)[0];
    },
  },
  onLoad(options) {
    console.log(options);
    this.getNewsDetail(options);
  },
};
</script>

<style lang="scss">
.news-detail {
  font-size: 30rpx;
  padding: 0 20rpx;
  .title {
    text-align: center;
    width: 710rpx;
    display: block;
    margin: 20rpx 0;
  }
  .info {
    display: flex;
    justify-content: space-between;
  }
}
</style>
