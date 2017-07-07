<template>
  <mt-swipe :auto="4000">
    <mt-swipe-item v-for='(item,index) in inTheaters' v-if='index <= 5'>
        <img :src="item.images.large" style="width:100%;display:block;">
    </mt-swipe-item>
   </mt-swipe>
</template>

<script>
import jsonp from 'jsonp'
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
        console.log( data )
      }
    }.bind(this))
  },
}
</script>

<style>
  .mint-swipe{
      height: 250px;
  }
</style>
