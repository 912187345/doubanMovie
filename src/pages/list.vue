<template>
	<div class="container">
		<headera></headera>
		<router-link :to='{name:"detail",query:{ id:item.id }}' v-for='item in list'>
			<item
				:url='item.image'
				:title='item.title'
				:author='item.author'></item>
		</router-link>
	</div>	
</template>


<script>
	import headera from '../components/header'
	import item from '../components/item'
	import { mapState } from 'vuex'
	export default{
		name:'list',
		data(){
			return {
				lista:[]
			}
		},
		mounted(){ // 因为 this.$store.state 是动态的，所有要在计算属性中获取，现在获取不到是因为此时还没获取到豆瓣的数据
//			this.lista = this.$store.state.bookList;
			console.log( this.$store.state.bookList );
		},
		computed: mapState({  //其实就是方便获取store里面的状态，比较直观
		  // 传字符串参数 'count' 等同于 `state => state.count`
		  list: 'bookList'
		}),
		components:{
			headera,
			item
		}
	}
	
</script>


<style scoped="scoped">
	.container{
		padding-top: 54px;
	}
</style>