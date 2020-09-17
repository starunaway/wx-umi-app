<template>
  <view class="home">
    <swiper :indicator-dots="true" :circular="true" :autoplay="true" :interval="3000" :duration="1000">
      <swiper-item v-for="item in swipers" :key="item.id">
        <view class="swiper-item">{{ item.id }}</view>
      </swiper-item>
    </swiper>
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
        },
        {
          id: 2,
        },
        {
          id: 3,
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
}
</style>
