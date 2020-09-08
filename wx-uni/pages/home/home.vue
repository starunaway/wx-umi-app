<template>
	<view class="">
		<view class="">
			{{message}}
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				message:'hello'
			}
		},
		onLoad(options) {
			console.log("home load",options);
		},
	}
</script>

<style>
</style>
