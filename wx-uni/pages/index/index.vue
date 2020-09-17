<template>
  <view class=""> 首页 </view>
</template>

<script>
import fetch from '../../api/fetch.js';
export default {
  data() {
    return {
      swipers: [],
    };
  },
  methods: {
    async getSwipers() {
      let result = await fetch.get('https://dog.ceo/api/breeds/image/random');
      if (((result || {}).data || {}).status !== 0) {
        uni.showToast({
          title: '获取数据失败',
        });
      } else {
        //   this.swipers = result.data.swipers
        this.swipers = [];
      }
    },
  },
	onLoad() {
		this.getSwipers()
	}
};
</script>
