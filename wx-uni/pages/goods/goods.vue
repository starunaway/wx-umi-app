<template>
  <view class="goods_list">
    <goodsList :goods="goods"></goodsList>
    <view class="is-end" v-if="endFlag"> -------我是有底线的-------- </view>
  </view>
</template>

<script>
import goodsList from '../../components/goods-list';
import {mockGoods} from '../../mockData/data.js';
export default {
  data() {
    return {
      pageIndex: 1,
      goods: [],
      endFlag: false,
    };
  },
  components: {
    goodsList,
  },
  methods: {
    async getGoodsList(callback) {
      let result = this.$fetch.get('https://dog.ceo/api/breeds/image/random');
      this.goods = [...this.goods, ...mockGoods];
      callback && callback();
    },
  },
  onLoad() {
    this.getGoodsList();
  },
  onReachBottom() {
    if (this.pageIndex >= 5) {
      this.endFlag = true;
      return;
    }

    this.pageIndex++;
    this.getGoodsList();
  },
  onPullDownRefresh() {
    console.log('下拉刷新');
    this.endFlag = false;
    this.pageIndex = 1;
    this.goods = [];
    this.getGoodsList(() => {
      uni.stopPullDownRefresh();
    });
  },
};
</script>

<style lang="scss" scoped>
.goods_list {
  background-color: #eee;
  padding-top: 10rpx;
}
.is-end {
  width: 100%;
  height: 50rpx;
  line-height: 50rpx;
  text-align: center;
  font-size: 28rpx;
}
</style>
