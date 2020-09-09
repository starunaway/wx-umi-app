<template>
	<view>
		组件内部的数据 {{num}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				num:0
			};
		},
		created() {
			uni.$on("addNum",(v) =>{
				this.num += v
			})
		}
	}
</script>

<style>

</style>
