<template>
    <div>
        <mt-header title="搜索">
            <mt-button slot="left" @click="back()" icon="back">返回</mt-button>
        </mt-header>
        <mt-search
            v-model="value"
            cancel-text="取消"
            placeholder="请输入电影名字"
            :autofocus="true"
            :show="true">
           <transition-group enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
                <div class="searchLine" @click='goDetail(item.id)' v-for="item in result" :key="item">
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
    },
    methods:{
        ...mapActions(['FETCH_MOVIE_DETAIL']),
        searchMoive(){
            if( this.searchBol || !this.value || this.beforeValue === this.value ){ return }
            this.beforeValue = this.value;
            this.searchBol = true;
            jsonp(`https://api.douban.com/v2/movie/search?tag=${ this.value }`,null,function (err,data) {
                if( err ){
                    console.log( err );
                } else {
                    this.result = data.subjects;
                    this.searchBol = false;
                    console.log( data.subjects );
                }
            }.bind(this))
        },
        goDetail(id){
            console.log(id);
            this.FETCH_MOVIE_DETAIL(id);
            this.$router.push({ path:'movieDetail'});
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
            searchBol:false
        }
    },
    watch:{
        value(newV,oldV){
            setTimeout(this.searchMoive,2000);
        }
    }
}
</script>

<style scoped>
    header{
        z-index: 999;
    }
    .searchLine{
        padding: 0 15px;
        line-height: 40px;
        font-size: 14px;
    }
    .mint-search-list{
        top: 40px;
    }
    .mint-cell{
        border-bottom: 1px solid #e5e5e5;
    }
</style>
