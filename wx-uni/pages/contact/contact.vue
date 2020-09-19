<template>
  <view class="contact">
    <image src="https://images.dog.ceo/breeds/bulldog-boston/n02096585_942.jpg" mode=""></image>
    <view class="info">
      <view class="" @click="callPhone"> Phone number : 1515151(click to call) </view>
      <view class=""> Location: xxxxxxxxxxxxxxxx </view>
    </view>
    <map :longitude="longitude" :latitude="latitude" :markers="markers" :scale="scale"> </map>
  </view>
</template>

<script>
export default {
  data() {
    return {
      longitude: 120.3,
      latitude: 30.03,
      scale: 13,
      markers: [
        {
          longitude: 120.3,
          latitude: 30.03,
          iconPath: '../../static/hmlogo.png',
          width: 30,
          height: 30,
        },
      ],
    };
  },
  methods: {
    callPhone() {
      uni.makePhoneCall({
        phoneNumber: '15151515',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.contact {
  image {
    width: 750rpx;
    height: 320rpx;
  }
  .info {
    padding: 10rpx 20rpx;
    font-size: 30rpx;
    view {
      line-height: 80rpx;
      border-bottom: 1px solid #eee;
    }
  }
  map {
    height: 750rpx;
    width: 750rpx;
  }
}
</style>
