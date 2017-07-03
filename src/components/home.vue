<template>
	<div class="home">
		<div class="search">
			<input type="search" placeholder="请输入想查找的图书" v-model="searchContent" name="" id="" value="" />
			<button @click='search()'>查找</button>
		</div>
		<h1>
			{{ count }}
		</h1>
	</div>
</template>

<script>
	import Headera from './header'
	export default{
		data(){
			return {
				mes:'aaaaa',
				searchContent:''
			}
		},
		methods:{
			search(){
				if( !this.searchContent ){ return alert('请输入内容') }
				var payload = this.searchContent;
				this.$store.dispatch('search',payload);
				this.$router.push({name:'list'})
			}
		},
		computed:{
			count(){
				return this.$store.state.count
			}
		},
		components:{
			Headera // 名字不能用header 和 head  这两个是元素名字
		}
	}
</script>

<style scoped="scoped">
	.search{
		font-size: 20px;
		border: 1px solid #F1F1F1;
	}
</style>