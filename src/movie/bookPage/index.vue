<template>
    <div>
        <mt-header title="豆瓣图书">
            <router-link to='/' slot='left'>首页</router-link>
            <router-link to="/search/book" slot="right">搜索</router-link>
        </mt-header>
        <recommend></recommend>
    </div>    
</template>

<script>
    import recommend from './recommend'
    export default {
        name:'bIndex',
        data(){
            return {

            }
        },
        components:{
            recommend
        }
    }
</script>

<style lang="less">
    
</style>