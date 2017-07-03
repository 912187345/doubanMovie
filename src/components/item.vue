<template>
	<div class="item">
		<div class="img" :style="'background-image: url( ' + url + ');'">
			<!--<img :src="url"/>-->
		</div>
		<div>
			<div>
				{{ title }}
			</div>
			<div>
				<span v-for="author in author">{{ author }}/</span>
			</div>
		</div>
	</div>
</template>


<script>
	export default{
		props:['url','title','author']
	}
</script>


<style scoped="scoped">
	.item{
		background: #FFFFFF;
		margin-bottom: 10px;
		padding: 10px;
	}
	.item > div{
		display: inline-block;
		vertical-align: middle;
		color: #666666;
	}
	.img{
		background: no-repeat center center;
		background-size: cover;
		width: 80px;
		height: 80px;
	}
</style>
