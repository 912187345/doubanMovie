
<template>
<div>
    <mt-header title="豆瓣电影">
        <router-link to='/' slot='left'>首页</router-link>
        <router-link to="/search/movie" slot="right">搜索</router-link>
    </mt-header>
    <swiper></swiper>
    <nav-bar></nav-bar>
    <keep-alive>
          <router-view></router-view>
    </keep-alive>
</div>
</template>

<script>
import swiper from '../components/swiper'
import navBar from '../components/navBar'
export default {
    name:'mIndex',
    mounted(){
        this.$router.push({ path:'piaofang'});
        document.body.scrollTop = 0;
        document.documentElement.scrollTo = 0;
    },
    components:{
        swiper,
        navBar
    }
}
</script>

<style>

</style>

