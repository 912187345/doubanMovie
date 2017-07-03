
<template>
	<header>
		<span @click='back()'>返回</span>
		<h1>{{ name }}</h1>
	</header>	
</template>


<script>
	export default{
		props:['name'],
		name:'head',
		methods:{
			back:function(){
				window.history.back();
			}
		}
	}
</script>


<style scoped="scoped">
	header{
		line-height: 44px;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		background: #FFFFFF;
	}
	header span{
		font-size: 14px;
		color: brown;
		margin-left: 10px;
		float: left;
	}
	h1{
		text-align: center;
		color: deepskyblue;
		font-size: 18px;
	}
</style>