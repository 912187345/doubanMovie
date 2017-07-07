
<template>
<div>
    <mt-header title="豆瓣电影">
        <router-link to="/search" slot="right">搜索</router-link>
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
    components:{
        swiper,
        navBar
    }
}
</script>

<style>

</style>

