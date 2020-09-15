<template>
	<view :class="test" >
		<button @click="click">num++</button>
		<navigator url="/pages/contact/contact" open-type="switchTab">跳转到contract</navigator>
		<navigator url="/pages/home/home?id=80">跳转到home</navigator>
		<button @click="toDetail" type="default">跳转到detail</button>
		<button @click="toMessage" type="default">跳转到Message</button>
		<Test></Test>
		<Test2></Test2>
	</view>
</template>

<script>
	
	import Test from "../../components/Test.vue"
	import Test2 from "../../components/Test2.vue"
	import fetch from "../../api/fetch.js"
	
	export default {
		data() {
			return {
				title: 'Hello',
				test:'test'
			}
		},
		components:{Test,Test2},
		onLoad(options) {
			console.log("index load",options)
		},

		onShow() {
			console.log("index show")
		},
		async onReady() {
			console.log("index ready")
			let result =  await fetch.get("https://dog.ceo/api/breeds/image/random")
			
			console.log('fetch result',result);
		},
		onHide() {
			console.log("index hide")
		},
		
		methods: {
			click(){
				console.log('222222222');
				uni.$emit("addNum",10)
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
