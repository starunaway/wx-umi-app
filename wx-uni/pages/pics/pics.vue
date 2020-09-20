<template>
  <view class="pics">
    <scroll-view scroll-y="true" class="left">
      <view
        :class="index === active ? 'active' : ''"
        @click="leftClick(index, item)"
        v-for="(item, index) in cates"
        :key="item.id"
        >{{ item.title }}</view
      >
    </scroll-view>

    <scroll-view scroll-y="true" class="right">
      <view class="item" v-for="item in secondData" :key="item.id">
        <image :src="item.img_url" mode="" @click="previewImg"></image>
        <text>{{ item.title }}</text>
      </view>
    </scroll-view>
  </view>
</template>

<script>
import {picsCategory} from '../../mockData/picsCategory.js';
import {mockGoods} from '../../mockData/data.js';
export default {
  data() {
    return {
      cates: [],
      active: 0,
      secondData: [],
    };
  },
  methods: {
    async getPicsCategory() {
      let result = this.$fetch.get('https://dog.ceo/api/breeds/image/random');
      this.cates = picsCategory;
      this.secondData = mockGoods;
    },
    leftClick(index, item) {
      // let result = this.$fetch.get(item.id);
      this.active = index;
      this.secondData = mockGoods;
    },
		previewImg(){
			uni.previewImage({
				current:mockGoods[1].img_url,
				urls:mockGoods.map(d => d.img_url)
			})
		}
  },
  onLoad() {
    this.getPicsCategory();
  },
};
</script>

<style lang="scss">
page {
  height: 100%;
}
.pics {
  display: flex;
  height: 100%;
  .left {
    width: 200rpx;
    height: 100%;
    view {
      height: 60px;
      line-height: 60px;
      font-size: 30rpx;
      text-align: center;
      color: #333;

      border-top: 1px solid #eee;
      border-right: 1px solid #eee;
    }
    .active {
      background-color: $shop-color;
      color: #fff;
    }
  }

  .right {
    height: 100%;
    width: 520rpx;
    margin: 10rpx auto;
    .item {
      image {
        display: block;
        width: 520rpx;
        height: 520rpx;
        border-radius: 5px;
      }
      text {
        font-size: 30rpx;
        line-height: 60rpx;
      }
    }
  }
}
</style>
