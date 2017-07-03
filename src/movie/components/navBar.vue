<template>
    <div class="navBar">
        <router-link to="/piaofang" @click.native='selct("piaofang")' :class='type ==="piaofang"?"active":""'>
            <div>
                北美票房榜
            </div>
        </router-link>
        <router-link to="/shangying" @click.native='selct("shangying")' :class='type ==="shangying"?"active":""'>
            正在上映
        </router-link>
        <router-link to="/TOP250" @click.native='selct("TOP250")' :class='type ==="TOP250"?"active":""'>
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
    data(){
        return {
            type:'piaofang'
        }
    }
}
</script>

<style scoped>
    .navBar{
        overflow: hidden;
    }
    .navBar > a{
        float: left;
        box-sizing: border-box;
        width: 33.3333333333333%;
        text-align: center;
        line-height: 40px;
        color: #26a2ff;
        border-bottom: 2px solid transparent;
    }
    .navBar .active{
        border-color: #26a2ff;
    }
</style>
