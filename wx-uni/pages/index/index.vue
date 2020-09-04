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
		onLoad() {

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
