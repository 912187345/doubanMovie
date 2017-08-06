<template>
  <div>
    <mt-spinner type="snake" v-show="boxList.length === 0"></mt-spinner>
        <item 
            v-for="(item,index) in boxList" 
            :key="index"
            :index='index'
            :src='item.subject.images.large'
            :title='item.subject.title'
            :daoyan='item.subject.directors'
            :zhuyan='item.subject.casts'
            :id ='item.subject.id'>
        </item>
  </div>
</template>

<script>
import item from '../components/selectItem'
import jsonp from 'jsonp'
export default {
    created(){
        jsonp('https://api.douban.com/v2/movie/us_box',null,function (err,data) {
            if (err) {
                console.log( err )
            } else {
                this.boxList = data.subjects;
            }
        }.bind(this))
    },
    data(){
        return {
            boxList:[]
        }
    },
    components:{
        item
    }
}
</script>

<style>
</style>
