<template>
  <view class="news">
    <newsList v-for="item in newsList" :key="item.id" :item="item"></newsList>
  </view>
</template>

<script>
import {mockGoods} from '../../mockData/data.js';
import newsList from '../../components/news-item/index.vue';
export default {
  components: {
    newsList,
  },
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

</style>
