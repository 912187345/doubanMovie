<template>
    <div>
        <mt-header title="搜索">
            <mt-button slot="left" @click="back()" icon="back">返回</mt-button>
        </mt-header>
        <mt-search
            v-model="value"
            :placeholder="inpTips"
            :autofocus="true"
            :show="true">
           <transition-group enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
                <div class="searchLine" 
                    @click='goDetail(item.id)' 
                    v-for="(item,index) in result"
                    :key="index">
                    {{ item.title }}
                </div>
           </transition-group>
        </mt-search>
    </div>
</template>

<script>
import jsonp from 'jsonp'
import { Indicator } from 'mint-ui';
import { mapActions } from 'vuex';
var timer = null;
export default {
    name:'search',
    mounted(){
        window.scrollTo(0, 0);
        this.searchType = this.$route.params.type;
        if( this.searchType === 'movie' ){
            this.url = 'https://api.douban.com/v2/movie/search';
            this.inpTips = '请输入电影名字';
        }else if( this.searchType === 'book' ){
            this.url = 'https://api.douban.com/v2/book/search';
            this.inpTips = '请输入书本名字';
        }
    },
    methods:{
        ...mapActions(['FETCH_MOVIE_DETAIL']),
        searchMoive(){
            if( this.searchBol || !this.value || this.beforeValue === this.value ){ return }
            this.beforeValue = this.value;
            this.searchBol = true;
            if( this.searchType === 'movie' ){
                var url = 'https://api.douban.com/v2/movie/search';
            }else if( this.searchType === 'book' ){
                var url = 'https://api.douban.com/v2/book/search';
            }
            jsonp(`${ url }?tag=${ this.value }`,null,function (err,data) {
                if( err ){
                    console.log( err );
                } else {
                    if( this.searchType === 'book' ){
                        this.result = data.books;
                    }else if(this.searchType === 'movie'){
                        this.result = data.subjects;
                    }
                    this.searchBol = false;
                }
            }.bind(this))
        },
        goDetail(id){
            if( this.searchType === 'movie' ){
                this.FETCH_MOVIE_DETAIL(id);
                this.$router.push({ path:'movieDetail'});
            }else if( this.searchType === 'book' ){
                this.$router.push({ name:'bDetail',params:{ bookId: id }});
            }
        },
        back(){
            window.history.back();
        }
    },
    data(){
        return {
            value:'',
            beforeValue:'',
            result:{},
            searchBol:false,
            searchType:'',
            inpTips:'',
            url:''
        }
    },
    watch:{
        value(newV,oldV){
            clearTimeout(timer);
            timer = setTimeout(this.searchMoive,700);
        }
    }
}
</script>

<style>
    header{
        z-index: 999;
    }
    .searchLine{
        padding: 0 15px;
        line-height: 40px;
        font-size: 14px;
    }
    .mint-search-list{
        padding-top: 90px !important;
    }
</style>
