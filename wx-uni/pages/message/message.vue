<template>
	<view>
		<text>message</text>
		<view class="iconfont icon-icon_zhanghao"></view>
		<view class="">
			
			<button @click="setStorage">存数据</button>
			<button @click="getStorage">取数据</button>
			<button @click="removeId">删除数据</button>
			<button @click="setStorageSync">同步存数据</button>
			<button @click="getStorageSync">同步取数据</button>
			<button @click="removeIdSync">同步删除数据</button>
				
			<button type="default" @click="chooseImg">上传图片</button>
		</view>
		
		<view class="">
			<image v-for="item in imgArr" :src="item" mode="" @click="previewImg(item)"></image>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				imgArr:[]
			}
		},
		methods: {
			setStorage(){
				uni.setStorage({
					data:80,
					key:'id',
					success() {
						console.log('set successs')
					}
				})
			},
			
			getStorage(){
				uni.getStorage({
					key:"id",
					success:(res)=>{
						console.log("获取成功",res);
					}
				})
			},
			
			setStorageSync(){
				uni.setStorageSync("id",{key:"id",value:'200'})
			},
			getStorageSync(){
				 const res =  uni.getStorageSync("id")
				 console.log("getStorageSync",res);
			},
			
			removeId(){
				uni.removeStorage({
					key:"id",
					success() {
						console.log("删除成功");
					}
				})
			},
			
			removeIdSync(){
				uni.removeStorageSync("id")
			},
			
			chooseImg(){
				uni.chooseImage({
					count:5,
					success: (res) => {
						this.imgArr = res.tempFilePaths
					}
				})
			},
			previewImg(current){
				
				console.log(current);
				uni.previewImage({
					current,
					urls:this.imgArr,
					indicator:"number"
				})
			}
			
		}
	}
</script>

<style>

</style>
