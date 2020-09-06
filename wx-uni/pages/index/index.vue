<template>
	<view :class="test" @click="click">
		hhhh
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				test:'test'
			}
		},
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
			}
		}
	}
</script>

<style>
	.test{
		color: red;
	}
	
</style>
