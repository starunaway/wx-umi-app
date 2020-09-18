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

      <view class="goods_list" >
        <view class="goods_item" v-for="item in goods" :key="item.id"> 
          <image :src="item.img_url" mode=""></image>
					<view class="price">
						<text>{{item.sell_price}}</text>
						<text>{{item.market_price}}</text>
					</view>
					<view class="name">
						<text>{{item.title}}</text>
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
			goods:[]
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
  
		async getGoods(){
			this.goods = [
				{
					id:1,
					title:"是大家看法和精神的",
					add_time:"2020-09-05 15:14:26",
					zhaiyao:"摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要是大家看法和精神的摘要",
					click:0,
					img_url:"https://images.dog.ceo/breeds/akita/Akina_Inu_in_Riga_1.jpg",
					sell_price:2195,
					market_price:2999,
					stock_quantity:60
				},
				{
					id:2,
					title:"士大夫即将开始的",
					add_time:"2020-09-07 15:14:26",
					zhaiyao:"摘要摘要士大夫即将开始的看法和精神的摘要",
					click:0,
					img_url:"https://images.dog.ceo/breeds/basenji/n02110806_4792.jpg",
					sell_price:699,
					market_price:899,
					stock_quantity:60
				},
				{
					id:3,
					title:"山豆根山豆根公司的分为五山豆根山豆根公司的分为五",
					add_time:"2020-09-06 15:14:26",
					zhaiyao:"摘要摘要摘豆根山豆根公司的分为豆根山豆根公司的分为是大家看法和精神的摘要",
					click:0,
					img_url:"https://images.dog.ceo/breeds/terrier-scottish/n02097298_3641.jpg",
					sell_price:215,
					market_price:299,
					stock_quantity:60
				},
			]
		}
	},
  onLoad() {
    this.getSwipers();
		
		this.getGoods()
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
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
		.goods_item{
			background-color: #fff;
			width: 355rpx;
			padding: 15rpx;
			box-sizing: border-box;
			margin: 6rpx 0;
			image{
				width: 80%;
				height: 150px;
				margin: 0 auto;
				display: block;
			}
			.price{
				color: $shop-color;
				font-size: 36rpx;
				margin: 20rpx 0 0 0;
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
