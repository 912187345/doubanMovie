<template>
    <div>
        <header class="mint-header">
            <div class="mint-header-button is-left">
                <a href="javascript:;" @click="back()" class="router-link-exact-active router-link-active">
            <button class="mint-button mint-button--default mint-button--normal">
                <span class="mint-button-icon">
                    <i class="mintui mintui-back"></i>
                    </span> 
                    <label class="mint-button-text">返回</label>
                    </button>
                    </a>
                    </div> 
                    <h1 class="mint-header-title">搜索</h1>
                        <div class="mint-header-button is-right"></div>
                        </header>
        <mt-search
            v-model="value"
            cancel-text="取消"
            placeholder="请输入电影名字"
            :autofocus="true"
            :show="true"
           >
           <div class="searchLine" @click='goDetail(id)' v-for="item in result">
                {{ item.title }}
           </div>
        </mt-search>
    </div>
     
</template>

<script>
import jsonp from 'jsonp'
import { Indicator } from 'mint-ui';
var timer = null;
export default {
    name:'search',
    mounted(){
        window.scrollTo(0, 0);
    },
    methods:{
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
        goDetail(){
            this.$route
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

<style>
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
