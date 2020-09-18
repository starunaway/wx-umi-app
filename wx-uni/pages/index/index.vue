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
      <view class="nav_item">
        <view class="iconfont icon-ziyuan"> </view>
        <text>超市</text>
      </view>

      <view class="nav_item">
        <view class="iconfont icon-guanyuwomen"> </view>
        <text>联系我们</text>
      </view>

      <view class="nav_item">
        <view class="iconfont icon-tupian"> </view>
        <text>社区图片</text>
      </view>

      <view class="nav_item">
        <view class="iconfont icon-shipin"> </view>
        <text>学习视频</text>
      </view>
    </view>

    <view class="hot_goods">
      <view class="tit"> 推荐商品 </view>

      <view class="goods_list">
        <view class="goods_item">
          <image src="https://images.dog.ceo/breeds/bulldog-boston/n02096585_942.jpg" mode=""></image>
					<view class="price">
						<text>$199</text>
						<text>$299</text>
					</view>
					<view class="name">
						<text>描述描述描述述描述述描述描述描述</text>
					</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      swipers: [],
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
  },
  onLoad() {
    this.getSwipers();
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
	.goods_list{
		padding: 0 15rpx;
		.goods_item{
			background-color: #fff;
			width: 355rpx;
			display: flex;
			flex-wrap: wrap;
			padding: 15rpx;
			box-sizing: border-box;
			justify-content: space-between;
			image{
				width: 80%;
				height: 150px;
				margin: 0 auto;
				display: block;
			}
			.price{
				color: $shop-color;
				font-size: 36rpx;
				text:nth-child(2){
					color: #ccc;
					font-size: 28rpx;
					margin-left: 10rpx;
					text-decoration: line-through;
				}
			}
			.name{
				font-size: 28rpx;
				line-height: 50rpx;
				padding: 10rpx 0;
			}
		}
	}
  }

}
</style>
