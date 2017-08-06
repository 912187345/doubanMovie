<template>
    <div class="navBar" :class="fiexdBol?'fixed':''" ref='nav'>
        <router-link to="/piaofang" @click.native='selct("/piaofang")' :class='type ==="/piaofang"?"active":""'>
            <div>
                北美票房榜
            </div>
        </router-link>
        <router-link to="/shangying" @click.native='selct("/shangying")' :class='type ==="/shangying"?"active":""'>
            广州正在上映
        </router-link>
        <router-link to="/TOP250" @click.native='selct("/TOP250")' :class='type ==="/TOP250"?"active":""'>
            TOP250
        </router-link>
    </div>
</template>

<script>
import selectItem from '../components/selectItem'
import jsonp from 'jsonp'
export default {
    methods:{
        selct(type){
            this.type = type;
        }
    },
    mounted(){
        var swipe = document.querySelector('.mint-swipe');
        var swipeT = swipe.offsetTop;
        var swipeH = swipe.offsetHeight;
        window.onscroll = function(){
            var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            if( scrollTop > (swipeT+swipeH) ){
                this.fiexdBol = true;
            }else{
                this.fiexdBol = false;
            }
        }.bind(this);
    },
    data(){
        return {
            type:'/piaofang',
            fiexdBol:false
        }
    },
    watch:{
        $route(newV, oldV){
            this.type = newV.path;
        }
    }
}
</script>

<style scoped lang='less'>
    .navBar{
        overflow: hidden;
        >a{
            float: left;
            box-sizing: border-box;
            width: 33.3333333333333%;
            text-align: center;
            line-height: 40px;
            color: #26a2ff;
            border-bottom: 2px solid transparent;
        }
        .active{
            border-color: #26a2ff;
        }
    }
    .fixed{
        position: fixed;
        background: #f5f5f5;
        width: 100%;
        top: 0;
        left: 0;
    }
</style>
