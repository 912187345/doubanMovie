<template>
	<div id="detail">
		<div @click='goBack()'>
			返回
		</div>
		<div>
			detail
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			goBack:function(){
				window.history.back();
			}
		}
	}
</script>

<style scoped="scoped">
	#detail{
		width: 100px;
		height: 100px;
		background: cyan;
	}
</style>