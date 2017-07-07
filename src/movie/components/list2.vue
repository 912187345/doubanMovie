<template>
  <div
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="10"
    infinite-scroll-immediate-check=false>
    <mt-spinner type="snake" v-show="boxList.length === 0"></mt-spinner>
    <item 
        v-for="(item,index) in boxList" 
        :index='index'
        :src='item.images.large'
        :title='item.title'
        :daoyan='item.directors'
        :zhuyan='item.casts'
        :id ='item.id'>
    </item>
    <loading v-show='loading' :loadIcon='loadIcon' :content='loadContent'></loading>
  </div>
</template>

<script>
import item from '../components/selectItem'
import jsonp from 'jsonp'
import loading from '../components/loading'
export default {
    methods:{
        loadMore(){
            this.loading = true;
            this.showData('loadMore');
        },
        showData(type){
            var start = this.boxList.length;
            var count = 10;
            jsonp(`https://api.douban.com/v2/movie/in_theaters?city="广州"&start=${ start }&count=${ count }`,null,function (err,data) {
                if (err) {
                    console.log( err )
                } else {
                    if ( !data.subjects.length ){
                        this.loadIcon = false;
                        this.loadContent = '已全部加载完~';
                        return;
                    }
                    if ( type === 'loadMore' ){
                        for(let i = 0; i < data.subjects.length; i++){
                            this.boxList.push( data.subjects[i] )
                            this.loading = false;
                        }
                    } else {
                        this.boxList = data.subjects
                    }
                }
            }.bind(this))
        }
    },
    created(){
        this.showData();
    },
    data(){
        return {
            boxList:[],
            loading:false,
            loadIcon:true,
            loadContent:'加载中'
        }
    },
    components:{
        item,
        loading
    }
}
</script>

<style>
</style>
