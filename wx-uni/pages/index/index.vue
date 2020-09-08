<template>
	<view :class="test" >
		<text @click="click">test</text>
		<navigator url="/pages/contact/contact" open-type="switchTab">跳转到contract</navigator>
		<navigator url="/pages/home/home?id=80">跳转到home</navigator>
		<button @click="toDetail" type="default">跳转到detail</button>
		<button @click="toMessage" type="default">跳转到Message</button>
		<Test></Test>
	</view>
</template>

<script>
	
	import Test from "../../components/Test.vue"
	
	
	export default {
		data() {
			return {
				title: 'Hello',
				test:'test'
			}
		},
		components:{Test},
		onLoad(options) {
			console.log("index load",options)
		},

		onShow() {
			console.log("index show")
		},
		onReady() {
			console.log("index ready")
		},
		onHide() {
			console.log("index hide")
		},
		
		methods: {
			click(){
				console.log('222222222');
			},
			toDetail(){
				uni.navigateTo({
					url:'/pages/detail/detail'
				})
			},
			toMessage(){
				uni.switchTab({
					url:"/pages/message/message"
				})
			}
		}
	}
</script>

<style>
	.test{
		color: red;
	}
	
</style>
