<template>
  <mt-swipe :auto="4000">
    <mt-swipe-item v-for='(item,index) in inTheaters' :key="index" v-if='index <= 5'>
        <img :src="item.images.large" @click="goDetail(item.id)" style="width:100%;display:block;">
    </mt-swipe-item>
   </mt-swipe>
</template>

<script>
import jsonp from 'jsonp'
import { mapActions } from 'vuex';
export default {
  data(){
    return {
      inTheaters:{}
    }
  },
  created(){
    jsonp('https://api.douban.com/v2/movie/in_theaters',null,function (err,data) {
      if( err ){
        console.log( err )
      } else {
        this.inTheaters = data.subjects;
        // console.log( data )
      }
    }.bind(this))
  },
  methods:{
    ...mapActions(['FETCH_MOVIE_DETAIL']),
    goDetail(id){
      this.FETCH_MOVIE_DETAIL(id);
      this.$router.push({ path:'movieDetail'});
    }
  }
}
</script>

<style>
  .mint-swipe{
      height: 250px;
  }
</style>
