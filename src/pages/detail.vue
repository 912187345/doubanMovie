<template>
	<div class="container">
		<headera :name='bookDetail.title'></headera>
		<div class="img">
			<img :src="bookDetail.image" class=""/>			
		</div>
		<div class="text">
			{{ bookDetail.summary }}
		</div>
	</div>	
</template>

<style scoped="scoped">
	.container{
		padding-top: 54px;
	}
	.img{
		width:150px;
		margin: 0 auto;
	}
	.img > img{
		display: block;
		width: 100%;
	}
	.text{
		text-indent: 2em;
	}
</style>

<script>
	import headera from '../components/header'
	import jsonp from 'jsonp'
	export default{
		created(){
			var _this = this;
			this.id = this.$route.query.id;
			console.log(this.id)
			jsonp('https://api.douban.com/v2/book/' + this.$route.query.id, null, function (err,data){
				if( err ){
					console.log( err )
				}else{
					_this.bookDetail = data;
					console.log( _this.bookDetail )
				}
			})
		},
		data(){
			return {
				id:'',
				bookDetail:{}
			}
		},
		components:{
			headera,
		}
	}
</script>
