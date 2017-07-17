<template>
  <div class="selec-item" @click="goDetail(id)">
      <div class="index">
          {{ index + 1 }}
      </div>
      <div class="img" :style="'background-image: url( ' + src + ');'">
      </div>
      <div class="con">
          <div class="title">
              {{ title }}
          </div>
          <div class="daoyan">
              导演:&nbsp;
               <span v-for='(item,index) in daoyan'> <span v-if='index !== 0'>/</span> {{ item.name }} </span>
          </div>
          <div class="zhuyan">
              主演:&nbsp;
              <span v-for='(item,index) in zhuyan'> <span v-if='index !== 0'>/</span> {{ item.name }} </span>
          </div>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    props:['index','src','title','daoyan','zhuyan','id'],
    methods:{
        ...mapActions(['FETCH_MOVIE_DETAIL']),
        goDetail:function(id){
            console.log(id);
            this.FETCH_MOVIE_DETAIL(id);
            this.$router.push({ path:'movieDetail'});
        }
    }
}
</script>

<style scoped lang='less'>
  .selec-item{
      font-size: 12px;
      margin-top: 10px;
      background: #ffffff;
      padding: 6px 0;
      >div{
        display: inline-block;
        vertical-align: middle;
      }
  }
  .con{
      margin-left: 6px;
      width: 64%;
  }
  .title{
      font-size: 14px;
      margin-bottom: 6px;
  }
  .daoyan{
      margin-bottom: 4px;
  }
  .index{
      font-size: 18px;
      color: orange;
      width: 30px;
      text-align: center;
  }
  .selec-item .img{
      width: 79px;
      height: 79px;
      background: no-repeat center center;
      background-size: cover;
  }
</style>
